import { Avatar, Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

import { Author } from '@/models';
import { COLORS } from '@/constants';

export interface PostCardDescriptionProps {
  author: Author;
  updatedAt: Date | string;
  isDetailed?: boolean;
}

const PostCardDescription = ({ author, updatedAt, isDetailed = false }: PostCardDescriptionProps): JSX.Element => {
  const { name } = author;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        gap: '12px',
        fontSize: '14px',
        marginTop: '12px',
        color: COLORS.DESCRIPTION,
      }}
    >
      <Avatar alt="name" src={''} sx={{ height: isDetailed ? 40 : 20, width: isDetailed ? 40 : 20 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: isDetailed ? 'column' : 'row',

          gap: isDetailed ? '0px' : '12px',
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: isDetailed ? 'black' : 'unset', fontSize: isDetailed ? '16px' : 'unset' }}
        >
          {name}
        </Typography>
        {!isDetailed && <CircleIcon sx={{ height: 5, width: 5, color: COLORS.DESCRIPTION_ICON }} />}
        <Typography variant="caption">{updatedAt.toString()}</Typography>
      </Box>
    </Box>
  );
};

export default PostCardDescription;
