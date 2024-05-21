'use client';
import { ChangeEvent, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Stack } from '@mui/material';

// Constants
import { MOCK_TAG_LIST, COLORS } from '@/constants';

// Components
import { Button, Input } from '../Common';
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

  const { name: imageName } = image || {};

  const postFormInitValues: PostFormValues = {
    title: '',
    content: '',
    tag: '',
  };

  const {
    control,
    formState: { isValid },
  } = useForm<PostFormValues>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    values: postFormInitValues,
  });

  const handleSelectImage = (event: ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.files && event.target.files[0]);
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const isDisableSubmit = !isValid;

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
              <TagSelect
                options={MOCK_TAG_LIST}
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
          onClick={() => console.log('Submit')}
        >
          Submit Post
        </Button>
      </Stack>
    </Box>
  );
};

export default PostForm;
