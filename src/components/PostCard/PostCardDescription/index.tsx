'use client';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import EditIcon from '@mui/icons-material/Edit';
// Constants
import { COLORS, ROUTES } from '@/constants';

// Componenst
import { Link } from '../../Common';

// Hooks
import { useAuthContext } from '@/hooks';

// Models
import { Author } from '@/models';

interface PostCardDescriptionProps {
  postId: string;
  author: Author;
  updatedAt: Date | string;
  isDetailed?: boolean;
}

const PostCardDescription = ({
  postId,
  author,
  updatedAt,
  isDetailed = false,
}: PostCardDescriptionProps): JSX.Element => {
  const { push } = useRouter();
  const { user } = useAuthContext();
  const { username: name, id } = author;

  const handleNavigation = () => {
    push(ROUTES.EDIT_POST(postId));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        marginTop: '12px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          gap: '12px',
          fontSize: '14px',
          color: COLORS.DESCRIPTION,
        }}
      >
        <Avatar alt="name" src={''} sx={{ height: isDetailed ? 40 : 20, width: isDetailed ? 40 : 20 }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: isDetailed ? 'column' : 'row',
            alignContent: 'center',
            alignItems: isDetailed ? 'unset' : 'center',
            gap: isDetailed ? '0px' : '12px',
            fontSize: isDetailed ? '16px' : 'unset',
          }}
        >
          <Link href={ROUTES.AUTHOR(id)} _style={{ color: COLORS.DESCRIPTION }}>
            <Typography variant="caption" sx={{ color: isDetailed ? COLORS.HEADING : 'unset' }}>
              {name}
            </Typography>
          </Link>

          {!isDetailed && <CircleIcon sx={{ height: 5, width: 5, color: COLORS.DESCRIPTION_ICON }} />}
          <Typography variant="caption">{dayjs(new Date(updatedAt)).format('YYYY-MM-DD')}</Typography>
        </Box>
      </Box>
      <Box>
        {!isDetailed && user?.id === id && (
          <Tooltip title="Edit">
            <IconButton aria-label="more" size="small" sx={{ padding: 0 }} onClick={handleNavigation}>
              <EditIcon sx={{ height: 20, width: 20 }} />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
};

export default PostCardDescription;
