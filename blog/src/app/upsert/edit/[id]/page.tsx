'use client';
import { useCallback, useEffect, useState } from 'react';
import { AddPost, EditPost } from '../../../../types/post';
import {
  Container,
  FormContainer,
  HeaderContainer,
  HeaderStyled
} from './edit.styled';
import { Controller, SubmitHandler, set, useForm } from 'react-hook-form';
import { REQUIRED } from '../../../../constants/form';
import { Alert, FormControl, Snackbar, TextField } from '@mui/material';
import FileUpload from '../../../../components/FileUpload';
import Button from '../../../../components/Button';
import { API_ENDPOINTS } from '../../../../constants/fetch';
import { Tag } from '../../../../types/tag';
import useSWR from 'swr';
import { FETCH_METHODS } from '../../../../enums/fetch';
import { FetchService } from '../../../../services/fetchApi';
import { base64ToFile } from '../../../../helpers/base64pic';
import { useRouter } from 'next/navigation';
import { usePostContext } from '../../../../hooks/usePostContext';
import TagSelectSingle from '../../../../components/TagSelectSingle';

const EditPostPage = ({
  params: { id }
}: {
  params: { id: string };
}): JSX.Element => {
  const { data, error, isLoading } = useSWR(
    `${API_ENDPOINTS.POSTS}?id=${id}`,
    (url) => FetchService.fetch(url, FETCH_METHODS.SSR)
  );

  const {
    formState: { errors },
    handleSubmit,
    control,
    watch,
    setValue,
    reset
  } = useForm<EditPost>({
    values: {
      id: '',
      userId: '',
      title: '',
      content: '',
      imageBase64: '',
      imageName: '',
      imageFile: undefined,
      tag: null,
      dateCreated: new Date(1970, 1, 1, 0, 0)
    },
    mode: 'onBlur'
  });

  useEffect(() => {
    if (data && data.length > 0) {
      if (data[0].imageBase64) {
        base64ToFile(data[0].imageBase64, data[0].imageName).then((file) => {
          reset({
            id: data[0].id,
            userId: data[0].userId,
            title: data[0].title,
            content: data[0].content,
            imageBase64: data[0].imageBase64,
            imageName: data[0].imageName,
            imageFile: file,
            tag: data[0].tag,
            dateCreated: data[0].dateCreated
          });
        });
      } else {
        reset({
          id: data[0].id,
          userId: data[0].userId,
          title: data[0].title,
          content: data[0].content,
          imageBase64: data[0].imageBase64,
          imageName: data[0].imageName,
          imageFile: undefined,
          tag: data[0].tag,
          dateCreated: data[0].dateCreated
        });
      }
    }
  }, [data, reset]);

  const { edit } = usePostContext();

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

  const onSubmitForm: SubmitHandler<EditPost> = useCallback(
    async (data) => {
      edit(data, handleSuccess, handleError);
    },
    [edit, handleError, handleSuccess]
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

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div
        role="loading"
        className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8"
      >
        <h1 className="text-center animate-pulse">Loading</h1>
      </div>
    );

  return (
    <Container>
      <HeaderContainer>
        <HeaderStyled variant="h1">Edit Post - {id}</HeaderStyled>
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
          EDIT
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

export default EditPostPage;
