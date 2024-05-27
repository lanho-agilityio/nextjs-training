'use client';
import { ChangeEvent, memo } from 'react';
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
      value={value}
      name="search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {value && (
              <IconButton onClick={onClearSearchInput}>
                <CloseIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
      autoComplete="off"
      onChange={onChange}
    />
  );
};

export default memo(SearchInput);
