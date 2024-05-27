'use client';
import { memo } from 'react';
import { Radio, Box, MenuItem, Select, SelectChangeEvent } from '@mui/material';

// Constants
import { COLORS, FILTER_TIME, POST_FILTER_TIME } from '@/constants';

interface DatePickerProps {
  value: string;
  options: { label: string; value: string }[];
  onSelectDate: (event: SelectChangeEvent) => void;
}

const DatePicker = ({ value, options, onSelectDate }: DatePickerProps): JSX.Element => {
  return (
    <Box>
      <Select
        value={value}
        onChange={onSelectDate}
        defaultValue={FILTER_TIME.ALL_TIME}
        sx={{
          height: '56px',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.HEADING,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.HEADING,
          },
        }}
        fullWidth
        renderValue={(value) => POST_FILTER_TIME[value as FILTER_TIME].label}
      >
        {options.map(({ label: itemLabel, value: itemValue }, index) => (
          <MenuItem key={`time-${index}`} value={itemValue}>
            <Radio
              checked={value === itemValue}
              sx={{
                paddingY: '5px',
                color: COLORS.HEADING,
                '&.Mui-checked': {
                  color: COLORS.HEADING,
                },
              }}
            />
            {itemLabel}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default memo(DatePicker);
