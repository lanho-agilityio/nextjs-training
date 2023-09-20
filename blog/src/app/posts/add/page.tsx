'use client';
import { useCallback } from 'react';
import { AddPost } from '../../../types/post';
import {
  Container,
  FormContainer,
  HeaderContainer,
  HeaderStyled
} from './addPost.styled';
import { Controller, SubmitHandler, set, useForm } from 'react-hook-form';
import { REQUIRED } from '../../../constants/form';
import { FormControl, TextField } from '@mui/material';
import FileUpload from '../../../components/FileUpload';
import Autocomplete from '../../../components/Autocomplete';
import Button from '../../../components/Button';
import { createPost } from '../../../services/post';
import useSWRMutation from 'swr/mutation';
import { API_ENDPOINTS } from '../../../constants/fetch';
import { Tag } from '../../../types/tag';

const AddPostPage = (): JSX.Element => {
  const {
    formState: { errors },
    handleSubmit,
    control,
    watch,
    setValue
  } = useForm<AddPost>({
    values: {
      title: '',
      content: '',
      imageFile: undefined,
      tag: null
    },
    mode: 'onBlur'
  });

  const { trigger } = useSWRMutation(API_ENDPOINTS.POSTS, createPost);

  const onSubmitForm: SubmitHandler<AddPost> = async (data) => {
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
          rules={{ required: { value: true, message: REQUIRED } }}
          render={() => (
            <FormControl fullWidth sx={{ paddingBottom: '1rem' }}>
              <Autocomplete value={watch('tag')} onChange={handleTag} />
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
    </Container>
  );
};

export default AddPostPage;
