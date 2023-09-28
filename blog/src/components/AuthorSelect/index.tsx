import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Chip } from '@mui/material';
import useSWR from 'swr';
import { API_ENDPOINTS } from '../../constants/fetch';
import { FetchService } from '../../services/fetchApi';
import { FETCH_METHODS } from '../../enums/fetch';
import { User } from '../../types/user';

export interface AuthorSelectProps {
  value?: User[];
  onChange?: any;
}

const filter = createFilterOptions<User>();

const AuthorSelect = ({ value, onChange }: AuthorSelectProps): JSX.Element => {
  const { data, error, isLoading } = useSWR(API_ENDPOINTS.USERS, (url) =>
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
        renderInput={(params) => <TextField {...params} placeholder="Author" />}
      />
    </>
  );
};

export default React.memo(AuthorSelect);
