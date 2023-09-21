'use client';
import * as React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import {
  FileInformation,
  FileUploadStyled,
  PicWrapper
} from './FileUpload.styled';

export interface FileUploadProps {
  value?: File | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FileUpload = ({
  value,
  onChange,
  onRemove,
  ...props
}: FileUploadProps): JSX.Element => {
  return (
    <Box>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={onChange}
        {...props}
      />
      <label htmlFor="raised-button-file">
        <FileUploadStyled component="span" startIcon={<CloudUploadIcon />}>
          Upload Picture
        </FileUploadStyled>
      </label>
      {value ? (
        <Box>
          <FileInformation sx={{ display: 'flex', justifyItems: 'center' }}>
            <Typography>{value?.name}</Typography>
            <IconButton aria-label="delete" onClick={onRemove}>
              <CloseIcon sx={{ color: 'red' }} />
            </IconButton>
          </FileInformation>
          {/* <PicWrapper>
            <Image
              src={URL.createObjectURL(value)}
              alt="Post Image"
              width={50}
              height={50}
              priority
              style={{ width: '25%', height: 'auto' }}
            ></Image>
          </PicWrapper> */}
        </Box>
      ) : null}
    </Box>
  );
};

export default FileUpload;
