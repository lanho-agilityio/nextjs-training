'use client';
import { ChangeEvent, InputHTMLAttributes } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '../Common';
import { COLORS } from '@/constants';

export interface ImagePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  fileName?: string;
  handleSelectFile?: (event: ChangeEvent<HTMLInputElement>) => void;
  hanldeRemoveFile?: () => void;
}

const FilePicker = ({
  children,
  fileName,
  handleSelectFile,
  hanldeRemoveFile,
  ...props
}: ImagePickerProps): JSX.Element => {
  return (
    <>
      <Button
        component="label"
        role={undefined}
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        backgroundColor="black"
        hoverColor={COLORS.HEADING}
        fullWidth
      >
        {children}
        <input
          type="file"
          multiple={false}
          style={{
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
            height: 1,
            overflow: 'hidden',
            position: 'absolute',
            bottom: 0,
            left: 0,
            whiteSpace: 'nowrap',
            width: 1,
          }}
          onChange={handleSelectFile}
          {...props}
        />
      </Button>
      {fileName && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            gap: '12px',
            fontSize: '14px',
            marginTop: '12px',
          }}
        >
          <Typography variant="caption">{fileName}</Typography>
          <IconButton aria-label="delete" size="small" onClick={hanldeRemoveFile}>
            <DeleteIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default FilePicker;
