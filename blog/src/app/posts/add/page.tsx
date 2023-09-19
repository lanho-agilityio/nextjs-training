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
import FileUpload from '../../../components/FileUpload/FileUpload.styled';
import Autocomplete from '../../../components/Autocomplete';

const AddPostPage = (): JSX.Element => {
  const {
    formState: { errors },
    handleSubmit,
    control,
    watch,
    getValues,
    setValue
  } = useForm<AddPost>({
    values: {
      title: '',
      content: '',
      imageBase64: '',
      imagePath: '',
      imageFile: undefined,
      tags: []
    },
    mode: 'onBlur'
  });

  const onSubmitForm: SubmitHandler<AddPost> = useCallback((data) => {
    console.log(data);
  }, []);

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
        <Autocomplete />
        <FileUpload
          value={watch('imageFile')}
          onChange={handleFileUpload}
          onRemove={handleRemoveFile}
        />
      </FormContainer>
    </Container>
  );
};

export default AddPostPage;
