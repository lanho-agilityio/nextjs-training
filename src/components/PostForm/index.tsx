'use client';
import { ChangeEvent, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { Input } from '../Common';
import FilePicker from '../FilePicker';

const PostForm = (): JSX.Element => {
  const [image, setImage] = useState<File | null>(null);

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
        <Stack spacing={2}>
          <Input name="Title" placeholder="Title" fullWidth />
          <Input name="Content" placeholder="Content" multiline rows={7} fullWidth />
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
