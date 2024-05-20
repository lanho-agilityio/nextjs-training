'use client';
import { Grid } from '@mui/material';
import SearchInput from '../SearchInput';
import DatePicker from '../DatePicker';
import { MOCK_TAG_LIST } from '../../constants';
import TagSelect from '../TagSelect';
import { useState } from 'react';

export const PostFilter = (): JSX.Element => {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (value: string | string[]) => {
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Grid container sx={{ marginBottom: '40px' }} spacing={2}>
      <Grid item xs={12} md={6}>
        <SearchInput />
      </Grid>
      <Grid item xs={6} md={3}>
        <DatePicker />
      </Grid>
      <Grid item xs={6} md={3}>
        <TagSelect
          options={MOCK_TAG_LIST}
          value={personName}
          multiple
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default PostFilter;
