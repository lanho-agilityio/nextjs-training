import { Avatar, Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

import { Author } from '@/models';
import { COLORS } from '@/constants';

export interface PostCardDescriptionProps {
  author: Author;
  updatedAt: Date | string;
}

const PostCardDescription = ({ author, updatedAt }: PostCardDescriptionProps): JSX.Element => {
  const { name, profilePicture } = author;

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignContent="center"
      alignItems="center"
      gap="12px"
      fontSize="14px"
      marginTop="12px"
      color={COLORS.DESCRIPTION}
    >
      <Avatar alt="name" src={profilePicture} sx={{ height: 20, width: 20 }} />
      <Typography variant="caption">{name}</Typography>
      <CircleIcon sx={{ height: 5, width: 5, color: COLORS.DESCRIPTION_ICON }} />
      <Typography variant="caption">{updatedAt.toString()}</Typography>
    </Box>
  );
};

export default PostCardDescription;
