'use client';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '../Common';

const SearchInput = (): JSX.Element => {
  return (
    <Input
      name="search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
