'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FILTER_TIME, TRANSACTION_FILTER_TIME } from '@/constants';
import { Radio } from '@mui/material';

const DatePicker = (): JSX.Element => {
  const transactionFilterTime = Object.keys(TRANSACTION_FILTER_TIME).map(
    (key: string) => TRANSACTION_FILTER_TIME[key as FILTER_TIME],
  );

  const [date, setDate] = useState<FILTER_TIME>(FILTER_TIME.ALL_TIME);

  const handleChange = (event: SelectChangeEvent) => {
    setDate(event.target.value as FILTER_TIME);
  };

  return (
    <Box>
      <Select
        value={date}
        onChange={handleChange}
        defaultValue={FILTER_TIME.ALL_TIME}
        sx={{ height: '56px' }}
        fullWidth
      >
        {transactionFilterTime.map(({ label: labelItem, value }, index) => (
          <MenuItem key={`time-${index}`} value={value}>
            <Radio checked={date === value} sx={{ paddingY: 0 }} />
            {labelItem}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default DatePicker;
