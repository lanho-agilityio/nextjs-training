'use client';
import { useCallback, useEffect, useMemo } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Box, Stack } from '@mui/material';

// APIs
import { createPost, editPost } from '@/services';

// Constants
import { COLORS, FORM_TYPE, ROUTES, SUCCESS_MESSAGES } from '@/constants';

// Components
import { Button, Input, CategorySelect } from '@/components';

// Hooks
import { useAuthContext } from '@/hooks';
import { useToast } from '../Toast';

// Models
import { Post, PostCategory, PostCreate } from '@/models';

// Utils
import { validateRequired } from '@/utils';

interface PostFormProps {
  tags: PostCategory[];
  data: Post | null;
}

const validations = {
  title: {
    required: validateRequired,
  },
  content: {
    requrired: validateRequired,
  },
  tag: {
    required: validateRequired,
  },
};

interface PostFormValues {
  title: string;
  content: string;
  tag: string;
  imageName?: string;
}

const PostForm = ({ data, tags }: PostFormProps): JSX.Element => {
  const router = useRouter();
  const toast = useToast();
  const { user } = useAuthContext();

  const { title, tag, imageName, content } = data || {};

  const formType = data ? FORM_TYPE.EDIT : FORM_TYPE.CREATE;

  const postFormInitValues: PostFormValues = useMemo(
    () => ({
      title: title || '',
      content: content || '',
      tag: tag?.value || '',
      imageName: imageName || undefined,
    }),
    [title, tag, content, imageName],
  );

  const {
    control,
    handleSubmit: submitConfirm,
    watch,
    reset,
    formState: { isValid },
  } = useForm<PostFormValues>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    values: postFormInitValues,
  });

  const isDisableSubmit = !isValid || user?.id === undefined;

  const selectedTagValue = watch('tag');
  const selectedTag = useMemo(() => tags.filter((tag) => tag.value === selectedTagValue)[0], [tags, selectedTagValue]);

  const handleSuccess = useCallback(() => {
    const message = formType === FORM_TYPE.CREATE ? SUCCESS_MESSAGES.POST_CREATED : SUCCESS_MESSAGES.POST_EDITED;
    toast.success(message);
    router.push(ROUTES.HOME);
  }, [toast, router, formType]);

  const handleError = useCallback(
    (errorMessage: string) => {
      toast.error(errorMessage);
    },
    [toast],
  );

  const handleCreatePost = useCallback(
    async (values: PostFormValues) => {
      if (user && user.id) {
        const createData: PostCreate = {
          ...values,
          tag: selectedTag,
          userId: user.id,
          updatedAt: new Date().toISOString(),
        };
        const response = await createPost(createData);
        response.data && handleSuccess();
        response.errorMessage && handleError(response.errorMessage);
      }
    },
    [selectedTag, user, handleSuccess, handleError],
  );

  const handleEditPost = useCallback(
    async (values: PostFormValues) => {
      if (user && user.id && data) {
        const editData: Post = {
          ...data,
          ...values,
          tag: selectedTag,
          userId: user.id,
          updatedAt: new Date().toISOString(),
        };
        const response = await editPost(data.id, editData);
        response.data && handleSuccess();
        response.errorMessage && handleError(response.errorMessage);
      }
    },
    [selectedTag, user, data, handleSuccess, handleError],
  );

  const handleSubmit: SubmitHandler<PostFormValues> = useCallback(
    async (values) => {
      formType === FORM_TYPE.CREATE ? await handleCreatePost(values) : await handleEditPost(values);
    },
    [handleCreatePost, handleEditPost, formType],
  );

  useEffect(() => {
    if (data) {
      reset(postFormInitValues);
    }
  }, [postFormInitValues, data, reset]);

  return (
    <Box sx={{ width: { xs: '100%', sm: '100%', md: '70%' } }}>
      <Stack spacing={1}>
        <Controller
          name="title"
          control={control}
          rules={{
            validate: validations.title,
          }}
          render={({ field: { onChange, value, ...rest }, fieldState: { error } }) => (
            <Input
              sx={{ paddingBottom: error?.message ? '0px ' : '24px' }}
              placeholder="Title"
              fullWidth
              value={value}
              onChange={(event) => {
                onChange(event);
              }}
              errorMessage={error?.message}
              {...rest}
            />
          )}
        ></Controller>
        <Controller
          name="content"
          control={control}
          rules={{
            validate: validations.content,
          }}
          render={({ field: { onChange, value, ...rest }, fieldState: { error } }) => (
            <Input
              sx={{ paddingBottom: error?.message ? '0px ' : '24px' }}
              placeholder="Content"
              multiline
              rows={7}
              fullWidth
              value={value}
              onChange={(event) => {
                onChange(event);
              }}
              errorMessage={error?.message}
              {...rest}
            />
          )}
        ></Controller>
        <Controller
          name="tag"
          control={control}
          rules={{
            validate: validations.tag,
          }}
          render={({ field: { onChange, value, ...rest }, fieldState: { error } }) => (
            <Box sx={{ paddingBottom: error?.message ? '0px ' : '24px' }}>
              <CategorySelect
                options={tags}
                value={value}
                errorMessage={error?.message}
                onChange={(event) => {
                  onChange(event);
                }}
                {...rest}
              />
            </Box>
          )}
        ></Controller>
        <Controller
          name="imageName"
          control={control}
          rules={{
            validate: validations.tag,
          }}
          render={({ field: { onChange, value, ...rest } }) => (
            <Input
              sx={{ paddingBottom: '24px' }}
              placeholder="Image"
              fullWidth
              value={value}
              onChange={(event) => {
                onChange(event);
              }}
              {...rest}
            />
          )}
        ></Controller>
        <Button
          type="submit"
          backgroundColor={COLORS.HEADING}
          hoverColor={COLORS.HEADING}
          fullWidth
          disabled={isDisableSubmit}
          onClick={submitConfirm(handleSubmit)}
        >
          Submit Post
        </Button>
      </Stack>
    </Box>
  );
};

export default PostForm;
