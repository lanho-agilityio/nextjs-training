'use client';
import { ChangeEvent } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

// Components
import { Input } from '../Common';

interface SearchInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClearSearchInput: () => void;
}

const SearchInput = ({ value, onChange, onClearSearchInput }: SearchInputProps): JSX.Element => {
  return (
    <Input
      name="search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onClearSearchInput}>
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
