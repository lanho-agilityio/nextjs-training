'use client';
import { useCallback, useEffect } from 'react';
import { AddPost, EditPost } from '../../../../types/post';
import {
  Container,
  FormContainer,
  HeaderContainer,
  HeaderStyled
} from './edit.styled';
import { Controller, SubmitHandler, set, useForm } from 'react-hook-form';
import { REQUIRED } from '../../../../constants/form';
import { FormControl, TextField } from '@mui/material';
import FileUpload from '../../../../components/FileUpload';
import TagSelect from '../../../../components/TagSelect';
import Button from '../../../../components/Button';
import { createPost, editPost } from '../../../../services/post';
import useSWRMutation from 'swr/mutation';
import { API_ENDPOINTS } from '../../../../constants/fetch';
import { Tag } from '../../../../types/tag';
import useSWR from 'swr';
import { FETCH_METHODS } from '../../../../enums/fetch';
import { FetchService } from '../../../../services/fetchApi';
import { base64ToFile } from '../../../../helpers/base64pic';

const EditPostPage = ({
  params: { id }
}: {
  params: { id: string };
}): JSX.Element => {
  const { data, error, isLoading } = useSWR(
    `${API_ENDPOINTS.POSTS}?id=${id}`,
    (url) => FetchService.fetch(url, FETCH_METHODS.SSR)
  );

  const { trigger } = useSWRMutation(API_ENDPOINTS.POSTS, editPost);

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
      tag: [],
      dateCreated: undefined
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

  const onSubmitForm: SubmitHandler<EditPost> = async (data) => {
    await trigger(data);
  };

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
    (value: Tag[]) => {
      setValue('tag', value);
    },
    [setValue]
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

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
          rules={{ required: { value: true, message: REQUIRED } }}
          render={() => (
            <FormControl fullWidth sx={{ paddingBottom: '1rem' }}>
              <TagSelect value={watch('tag')} onChange={handleTag} />
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
    </Container>
  );
};

export default EditPostPage;
