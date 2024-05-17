'use client';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Box, Typography } from '@mui/material';

// Components
import Input from '../Common/Input';

// Models
import { PostTag } from '@/models';

export interface TagSelectProps {
  options: string[];
  value?: string;
  errorMessage?: string;
  onChange?: (value: string | PostTag | null) => void;
  onBlur?: () => void;
}

const filter = createFilterOptions<string>();

const TagSelect = ({ value, options, errorMessage, onChange, onBlur }: TagSelectProps): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column">
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          onChange && onChange(newValue);
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option);
          if (inputValue !== '' && !isExisting) {
            filtered.push(inputValue);
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

          return option;
        }}
        renderOption={(props, option) => <Typography {...props}>{option}</Typography>}
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

export default TagSelect;
