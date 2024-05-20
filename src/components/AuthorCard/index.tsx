import { Avatar, Box, Typography } from '@mui/material';

// Constants
import { COLORS, ROUTES } from '@/constants';

// Components
import { Link } from '../Common';

// Models
import { Author } from '@/models';

interface AuthorCardProps {
  author: Author;
}

const AuthorCard = ({ author }: AuthorCardProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        alignItems: 'flex-start',
        gap: { sm: '0px', md: '24px' },
        backgroundColor: COLORS.AUTHOR_CARD_BACKGROUND,
        borderRadius: '16px',
        padding: '32px',
      }}
    >
      <Avatar alt="Author's Picture" sx={{ width: 96, height: 96 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '12px',
        }}
      >
        <Typography variant="h2" sx={{ fontSize: '18px', fontWeight: 500, color: COLORS.HEADING }}>
          About {author.name}
        </Typography>
        <Typography sx={{ color: COLORS.HEADING }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor ullamcorper sollicitudin. Vivamus
          viverra nec lacus ac egestas. Aliquam sagittis, erat sit amet finibus varius, odio ipsum laoreet magna,
          sagittis gravida quam ipsum eget ex. Vivamus mattis velit nec dolor sodales facilisis. Proin laoreet orci sed
          purus semper hendrerit. Morbi dictum ultrices dolor sit amet tincidunt.
        </Typography>
        <Link href={ROUTES.HOME} _style={{ color: COLORS.POST_LINK }}>
          View profile
        </Link>
      </Box>
    </Box>
  );
};

export default AuthorCard;
