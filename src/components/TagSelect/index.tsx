'use client';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Box, Typography } from '@mui/material';

// Constants
import { MOCK_TAG_LIST } from '@/constants';

// Components
import Input from '../Common/Input';

// Models
import { PostTag } from '@/models';

export interface TagSelectProps {
  options: PostTag[];
  value?: PostTag;
  errorMessage?: string;
  onChange?: (value: string | PostTag | null) => void;
}

const filter = createFilterOptions<PostTag>();

const TagSelect = ({ value, options, errorMessage, onChange }: TagSelectProps): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column">
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (onChange) {
            if (typeof newValue !== 'string' && newValue !== null) {
              const isExisting = MOCK_TAG_LIST.some((option) => newValue?.title === option.title);
              if (isExisting) {
                onChange(newValue);
              } else {
                onChange({
                  id: '4',
                  title: newValue.title,
                  color: 'black',
                });
              }
            } else {
              onChange(null);
            }
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option.title);
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              id: '4',
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
          }
          // Add "xxx" option created dynamically
          if (option.title) {
            return option.title;
          }
          // Regular option
          return option.title;
        }}
        renderOption={(props, option) => (
          <Typography {...props} sx={{ color: option.color }}>
            {option.title}
          </Typography>
        )}
        freeSolo
        renderInput={(params) => <Input name="Tag" placeholder="Select Tag" {...params} />}
      />
      {errorMessage && (
        <Typography variant="caption" sx={{ marginTop: '4px', color: '#DC2626' }}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default TagSelect;
