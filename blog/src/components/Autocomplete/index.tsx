'use client';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Tag } from '../../types/tag';
import { TAG_LIST } from '../../constants/tag';

const filter = createFilterOptions<Tag>();

export default function TagSelect() {
  const [value, setValue] = React.useState<Tag[] | undefined>(undefined);

  return (
    <>
      <Autocomplete
        value={value}
        multiple
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.name
          );
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              id: inputValue,
              color: 'white',
              name: `Add "${inputValue}"`
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={TAG_LIST}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.name;
        }}
        renderOption={(props, option) => {
          console.log(option);
          return (
            <li {...props} key={option.name}>
              {option.name}
            </li>
          );
        }}
        fullWidth
        sx={{ paddingBottom: '1rem' }}
        freeSolo
        renderInput={(params) => <TextField {...params} placeholder="Tags" />}
      />
    </>
  );
}
