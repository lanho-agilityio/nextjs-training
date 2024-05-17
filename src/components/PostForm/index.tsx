'use client';
import { ChangeEvent, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Stack } from '@mui/material';

// Constants
import { MOCK_TAG_LIST } from '@/constants/mock';

// Components
import { Input } from '../Common';
import FilePicker from '../FilePicker';
import TagSelect from '../TagSelect';

// Utils
import { validateRequired } from '@/utils';

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

const PostForm = (): JSX.Element => {
  const [image, setImage] = useState<File | null>(null);

  const postFormInitValues = {
    title: '',
    content: '',
    tag: '',
  };

  const { control } = useForm<PostFormValues>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    values: postFormInitValues,
  });

  const { name: fileName } = image || {};

  const handleSelectImage = (event: ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.files && event.target.files[0]);
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <Box sx={{ marginTop: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ marginTop: '40px', width: { xs: '100%', sm: '100%', md: '70%' } }}>
        <Stack spacing={1}>
          <Controller
            name="title"
            control={control}
            rules={{
              validate: validations.title,
            }}
            render={({ field: { onChange, value, ...rest }, fieldState: { error } }) => (
              <Input
                sx={{ marginBottom: error?.message ? '0px ' : '24px' }}
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
                sx={{ marginBottom: error?.message ? '0px ' : '24px' }}
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
              <TagSelect
                options={MOCK_TAG_LIST.map((element) => element.title)}
                value={value}
                errorMessage={error?.message}
                onChange={(event) => {
                  console.log(event);
                  onChange(event);
                }}
                {...rest}
              />
            )}
          ></Controller>
          <FilePicker
            accept="image/png, image/gif, image/jpeg"
            handleSelectFile={handleSelectImage}
            hanldeRemoveFile={handleRemoveImage}
            fileName={fileName}
          >
            Upload Image
          </FilePicker>
        </Stack>
      </Box>
    </Box>
  );
};

export default PostForm;
