'use client';
import { ChangeEvent, useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Box, Stack } from '@mui/material';

// APIs
import { createPost } from '@/services';

// Constants
import { COLORS } from '@/constants';

// Components
import { Button, Input } from '../Common';
import FilePicker from '../FilePicker';
import CategorySelect from '../CategorySelect';

// Hooks
import { useAuthContext } from '@/hooks';

// Models
import { PostCategory, PostCreate } from '@/models';

// Utils
import { fileToBase64, validateRequired } from '@/utils';

interface PostFormProps {
  tags: PostCategory[];
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
}

const PostForm = ({ tags }: PostFormProps): JSX.Element => {
  const { user } = useAuthContext();
  const [image, setImage] = useState<File | null>(null);
  const { name: imageName } = image || {};

  const postFormInitValues: PostFormValues = {
    title: '',
    content: '',
    tag: '',
  };

  const {
    control,
    handleSubmit: submitConfirm,
    watch,
    formState: { isValid },
  } = useForm<PostFormValues>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    values: postFormInitValues,
  });

  const isDisableSubmit = !isValid || user?.id === undefined;

  const selectedTag = tags.filter((tag) => tag.value === watch('tag'))[0];

  const handleSelectImage = (event: ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.files && event.target.files[0]);
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleSubmit: SubmitHandler<PostFormValues> = useCallback(
    async (values) => {
      if (user && user.id) {
        let imageBase64;
        if (image) {
          imageBase64 = await fileToBase64(image);
        }
        const data: PostCreate = {
          ...values,
          imageName,
          imageBase64,
          tag: selectedTag,
          userId: user.id,
          updatedAt: new Date().toISOString(),
        };
        await createPost(data);
      }
    },
    [image, selectedTag, imageName, user],
  );

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
        <Box sx={{ paddingBottom: image ? '0px ' : '45px' }}>
          <FilePicker
            accept="image/png, image/gif, image/jpeg"
            handleSelectFile={handleSelectImage}
            hanldeRemoveFile={handleRemoveImage}
            fileName={imageName}
          >
            Upload Image
          </FilePicker>
        </Box>

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
