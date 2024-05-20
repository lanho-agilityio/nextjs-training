'use client';
import { ForwardedRef, forwardRef } from 'react';
import { Typography, Box, MenuItem, Select, SelectChangeEvent, Checkbox, ListItemText } from '@mui/material';

// Models
import { PostTag } from '@/models';
import React from 'react';
import { isEmpty } from '../../utils';

interface TagSelectProps {
  options: PostTag[];
  value: string | string[];
  placeholder?: string;
  isMultiple?: boolean;
  errorMessage?: string;
  onChange: (value: string | string[]) => void;
  onBlur?: () => void;
}

const TagSelect = (
  { value, isMultiple = false, placeholder = 'Choose Tag', options, errorMessage, onChange, onBlur }: TagSelectProps,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
): JSX.Element => {
  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    onChange(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Select
        displayEmpty
        multiple={isMultiple}
        ref={ref}
        value={value}
        sx={{ height: '56px' }}
        fullWidth
        onChange={handleChange}
        onBlur={onBlur}
        renderValue={(value) => {
          if (isEmpty(value)) {
            return <Typography>{placeholder}</Typography>;
          } else {
            return typeof value === 'string' ? value : value.join(', ');
          }
        }}
      >
        {options.map(({ value: optionValue }, index) => (
          <MenuItem key={`time-${index}`} value={optionValue}>
            {isMultiple ? (
              <>
                <Checkbox checked={value.indexOf(optionValue) > -1} />
                <ListItemText primary={optionValue} />
              </>
            ) : (
              <>{optionValue}</>
            )}
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
