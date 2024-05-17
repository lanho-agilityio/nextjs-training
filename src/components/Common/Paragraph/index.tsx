import { Box, Typography, TypographyProps } from '@mui/material';

interface ParagraphProps extends TypographyProps {
  content: string;
}

const Paragraph = ({ content }: ParagraphProps): JSX.Element => {
  return (
    <article>
      <Box
        sx={{
          maxWidth: '762px',
        }}
      >
        <Typography sx={{ marginX: '59px', marginY: '12px' }} variant="body1">
          {content}
        </Typography>
      </Box>
    </article>
  );
};

export default Paragraph;
