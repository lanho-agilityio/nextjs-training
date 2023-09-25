import { FormControl, TextField } from '@mui/material';
import {
  SearchBarContainer,
  SearchIconWrapper,
  SearchInputContainer
} from './SearchBar.styled';
import TagSelect from '../TagSelect';
import SearchIcon from '@mui/icons-material/Search';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Filter } from '../../types/filter';
import { useCallback } from 'react';
import { Tag } from '../../types/tag';
import Button from '../Button';

interface SearchBarProps {
  value?: Filter | null;
  onSubmit: (formData: Filter) => void;
}

const SearchBar = ({ value, onSubmit }: SearchBarProps): JSX.Element => {
  const {
    formState: { errors },
    control,
    watch,
    setValue,
    handleSubmit,
    reset
  } = useForm<Filter>({
    values: value ?? {
      search: '',
      tag: null
    }
  });

  const handleTag = useCallback(
    (value: Tag | null) => {
      setValue('tag', value);
    },
    [setValue]
  );

  const onSubmitForm: SubmitHandler<Filter> = async (data) => {
    onSubmit(data);
  };

  const resetData = () => {
    onSubmit({
        search: '',
        tag: null
      })
  }

  return (
    <SearchBarContainer onSubmit={handleSubmit(onSubmitForm)}>
      <Controller
        name="search"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth sx={{ paddingBottom: '1rem' }}>
            <SearchInputContainer>
              <TextField
                variant="outlined"
                type="text"
                placeholder="Search"
                fullWidth
                {...field}
              />
              <SearchIconWrapper>
                <SearchIcon fontSize="small" />
              </SearchIconWrapper>
            </SearchInputContainer>
          </FormControl>
        )}
      />
      <Controller
        name="tag"
        control={control}
        render={() => (
          <FormControl fullWidth sx={{ paddingBottom: '1rem' }}>
            <TagSelect value={watch('tag')} onChange={handleTag} />
          </FormControl>
        )}
      />
      <Button type="submit" >
        Search
      </Button>
      <Button type="button" sx={{ marginTop: '1rem' }} onClick={resetData}>
        Reset
      </Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
