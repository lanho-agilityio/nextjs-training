import { Container, Typography } from '@mui/material';

export interface HeadingProps {
  title: string;
  description?: string;
}

const Heading = ({ title, description }: HeadingProps): JSX.Element => {
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{
          marginTop: '8px',
          marginBottom: '12px',
          fontSize: {
            xs: '30px',
            sm: '30px',
            md: '36px',
            lg: '36px',
          },
          lineHeight: {
            xs: '36px',
            sm: '36px',
            md: '40px',
            lg: '40px',
          },
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography variant="subtitle1" sx={{ fontSize: '18px', lineHeight: '28px', textAlign: 'center' }}>
          {description}
        </Typography>
      )}
    </Container>
  );
};

export default Heading;
