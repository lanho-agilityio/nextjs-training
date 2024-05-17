'use client';
import { ForwardedRef, forwardRef } from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Box, Typography } from '@mui/material';

// Components
import Input from '../Common/Input';

// Models
import { PostTag } from '@/models';

export interface TagSelectProps {
  options: PostTag[];
  value?: string;
  errorMessage?: string;
  onChange: (value: string | PostTag | null) => void;
  onBlur?: () => void;
}

const filter = createFilterOptions<PostTag>();

const TagSelect = (
  { value, options, errorMessage, onChange, onBlur }: TagSelectProps,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column">
      <Autocomplete
        ref={ref}
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string' || newValue === null) {
            onChange(newValue);
          } else {
            onChange(newValue?.title);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option.title);
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              id: inputValue,
              title: inputValue,
              color: 'black',
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={options}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          } else {
            return option.title;
          }
        }}
        renderOption={(props, option) => (
          <Typography {...props} key={option.title}>
            {option.title}
          </Typography>
        )}
        freeSolo
        renderInput={(params) => (
          <Input
            name="tag"
            placeholder="Select Tag"
            {...params}
            errorMessage={errorMessage}
            sx={{ marginBottom: errorMessage ? '0px ' : '24px' }}
          />
        )}
        onBlur={onBlur}
      />
    </Box>
  );
};

export default forwardRef(TagSelect);
