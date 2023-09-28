import * as React from 'react';
import useSWR from 'swr';
//Components
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Chip } from '@mui/material';
//Constants
import { API_ENDPOINTS } from '@/constants/fetch';
//Enums
import { FETCH_METHODS } from '@/enums/fetch';
//Services
import { FetchService } from '@/services/fetchApi';
//Types
import { Tag } from '@/Ttypes/tag';

export interface TagSelectMultipleProps {
  value?: Tag[];
  onChange?: any;
  validation?: boolean;
  helperText?: string;
}

const filter = createFilterOptions<Tag>();

const TagSelectMultiple = ({
  value,
  onChange,
  validation,
  helperText
}: TagSelectMultipleProps): JSX.Element => {
  const { data, error, isLoading } = useSWR(API_ENDPOINTS.TAGS, (url) =>
    FetchService.fetch(url, FETCH_METHODS.SSR)
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Autocomplete
        value={value}
        multiple
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
          return filtered;
        }}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
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

export default React.memo(TagSelectMultiple);
