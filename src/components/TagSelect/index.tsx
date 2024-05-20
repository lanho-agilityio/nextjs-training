'use client';
import { ForwardedRef, forwardRef } from 'react';
import { Typography, Box, MenuItem, Select, SelectChangeEvent } from '@mui/material';

// Models
import { PostTag } from '@/models';
import React from 'react';

interface TagSelectProps {
  options: PostTag[];
  value: string | string[];
  multiple?: boolean;
  errorMessage?: string;
  onChange: (value: string | string[]) => void;
  onBlur?: () => void;
}

const TagSelect = (
  { value, multiple = false, options, errorMessage, onChange, onBlur }: TagSelectProps,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
): JSX.Element => {
  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    onChange(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Select
        multiple={multiple}
        ref={ref}
        value={value}
        sx={{ height: '56px' }}
        fullWidth
        onChange={handleChange}
        onBlur={onBlur}
      >
        {options.map(({ value }, index) => (
          <MenuItem key={`time-${index}`} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
      {errorMessage && (
        <Typography variant="caption" sx={{ marginTop: '4px', color: '#DC2626' }}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default forwardRef(TagSelect);
