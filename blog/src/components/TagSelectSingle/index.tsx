import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Tag } from '../../types/tag';
import { Chip } from '@mui/material';
import useSWR from 'swr';
import { API_ENDPOINTS } from '../../constants/fetch';
import { FetchService } from '../../services/fetchApi';
import { FETCH_METHODS } from '../../enums/fetch';
import { randomHexColor } from '../../helpers/color';

export interface TagSelectProps {
  value?: Tag | null;
  onChange?: any;
  validation?: boolean;
  helperText?: string;
}

const filter = createFilterOptions<Tag>();

const TagSelect = ({
  value,
  onChange,
  validation,
  helperText
}: TagSelectProps): JSX.Element => {
  const { data, error, isLoading } = useSWR(API_ENDPOINTS.TAGS, (url) =>
    FetchService.fetch(url, FETCH_METHODS.SSR)
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Autocomplete
        value={value}
        // multiple
        fullWidth
        sx={{ paddingBottom: '1rem' }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={data}
        onChange={(_, newValue) => {
          if (onChange) onChange(newValue);
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.name
          );
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              id: new Date().getTime().toString(),
              color: randomHexColor(),
              name: `${inputValue}`
            });
          }

          return filtered;
        }}
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
          return (
            <li {...props} key={option.id}>
              {option.name}
            </li>
          );
        }}
        renderTags={(tagValue, getTagProps) => {
          return tagValue.map((option, index) => (
            <Chip
              {...getTagProps({ index })}
              key={option.id}
              label={option.name}
            />
          ));
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Tags"
            error={validation}
            helperText={helperText}
          />
        )}
      />
    </>
  );
};

export default React.memo(TagSelect);
