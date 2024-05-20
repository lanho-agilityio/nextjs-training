'use client';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FILTER_TIME, POST_FILTER_TIME } from '@/constants';
import { Radio } from '@mui/material';

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
        sx={{ height: '56px' }}
        fullWidth
        renderValue={(value) => POST_FILTER_TIME[value as FILTER_TIME].label}
      >
        {options.map(({ label: itemLabel, value: itemValue }, index) => (
          <MenuItem key={`time-${index}`} value={itemValue}>
            <Radio checked={value === itemValue} sx={{ paddingY: 0 }} />
            {itemLabel}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default DatePicker;
