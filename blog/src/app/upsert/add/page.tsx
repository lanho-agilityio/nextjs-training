'use client';
import { lazy, useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
//Constants
import { REQUIRED } from '@/constants/form';
//Hooks
import { usePostContext } from '@/hooks/usePostContext';
import { useAuthContext } from '@/hooks/useAuthContext';
//Types
import { AddPost } from '@/Ttypes/post';
import { Tag } from '@/Ttypes/tag';
//Components
import { Alert, FormControl, Snackbar, TextField } from '@mui/material';
import {
  Container,
  FormContainer,
  HeaderContainer,
  HeaderStyled
} from './add.styled';
const Button = lazy(() => import('@/components/Button'));
const FileUpload = lazy(() => import('@/components/FileUpload'));
const TagSelectSingle = lazy(() => import('@/components/TagSelectSingle'));

const AddPostPage = (): JSX.Element => {
  const {
    formState: { errors },
    handleSubmit,
    control,
    watch,
    setValue
  } = useForm<AddPost>({
    values: {
      userId: '',
      title: '',
      content: '',
      imageFile: undefined,
      tag: null
    },
    mode: 'onBlur'
  });

  const { user } = useAuthContext();
  const { add } = usePostContext();

  const router = useRouter();

  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleSuccess = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleError = useCallback((e: unknown) => {
    const error = e as Error;
    setMessage(error.message);
    setOpenSnackbar(true);
  }, []);

  const onSubmitForm: SubmitHandler<AddPost> = useCallback(
    async (data) => {
      const value = {
        ...data,
        userId: user ? user.id : ''
      };
      add(value, handleSuccess, handleError);
    },
    [add, handleError, handleSuccess, user]
  );

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setValue('imageFile', e.target.files[0]);
      }
    },
    [setValue]
  );

  const handleRemoveFile = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setValue('imageFile', undefined), [];
    },
    [setValue]
  );

  const handleTag = useCallback(
    (value: Tag | null) => {
      setValue('tag', value);
    },
    [setValue]
  );

  return (
    <Container>
      <HeaderContainer>
        <HeaderStyled variant="h1">Add a New Post</HeaderStyled>
      </HeaderContainer>
      <FormContainer onSubmit={handleSubmit(onSubmitForm)}>
        <Controller
          name="title"
          control={control}
          rules={{ required: { value: true, message: REQUIRED } }}
          render={({ field }) => (
            <FormControl fullWidth sx={{ paddingBottom: '1rem' }}>
              <TextField
                error={!!errors.title}
                helperText={errors.title && errors.title.message}
                variant="outlined"
                type="text"
                placeholder="Title"
                {...field}
              />
            </FormControl>
          )}
        />
        <Controller
          name="content"
          control={control}
          rules={{ required: { value: true, message: REQUIRED } }}
          render={({ field }) => (
            <FormControl fullWidth sx={{ paddingBottom: '1rem' }}>
              <TextField
                error={!!errors.content}
                helperText={errors.content && errors.content.message}
                variant="outlined"
                type="text"
                placeholder="Content"
                multiline
                rows={15}
                {...field}
              />
            </FormControl>
          )}
        />
        <Controller
          name="tag"
          control={control}
          rules={{
            validate: (value) => {
              return watch('tag') !== null || REQUIRED;
            }
          }}
          render={() => (
            <FormControl fullWidth sx={{ paddingBottom: '1rem' }}>
              <TagSelectSingle
                value={watch('tag')}
                onChange={handleTag}
                validation={!!errors.tag && watch('tag') === null}
                helperText={
                  watch('tag') === null ? errors.tag && errors.tag.message : ''
                }
              />
            </FormControl>
          )}
        />
        <FileUpload
          value={watch('imageFile')}
          onChange={handleFileUpload}
          onRemove={handleRemoveFile}
        />
        <Button type="submit" sx={{ marginTop: '1rem' }}>
          ADD
        </Button>
      </FormContainer>
      <Snackbar open={openSnackbar} autoHideDuration={6000}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddPostPage;
