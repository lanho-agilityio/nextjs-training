import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from '../Common';
import { InputHTMLAttributes } from 'react';
import { COLORS } from '../../constants';

export interface ImagePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

const FilePicker = ({ children, ...props }: ImagePickerProps): JSX.Element => {
  return (
    <Button
      component="label"
      role={undefined}
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      backgroundColor="black"
      hoverColor={COLORS.HEADING}
      fullWidth
    >
      {children}
      <input
        type="file"
        multiple={false}
        style={{
          clip: 'rect(0 0 0 0)',
          clipPath: 'inset(50%)',
          height: 1,
          overflow: 'hidden',
          position: 'absolute',
          bottom: 0,
          left: 0,
          whiteSpace: 'nowrap',
          width: 1,
        }}
        {...props}
      />
    </Button>
  );
};

export default FilePicker;
