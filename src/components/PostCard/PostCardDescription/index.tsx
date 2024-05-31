'use client';
import { memo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import EditIcon from '@mui/icons-material/Edit';

// Constants
import { COLORS, ROUTES } from '@/constants';

// Componenst
import { Link } from '@/components';

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

  const handleNavigation = useCallback(() => {
    push(ROUTES.EDIT_POST(postId));
  }, [push, postId]);

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
          }}
        >
          <Link aria-label={`${name}' page`} href={ROUTES.AUTHOR(id)} linkStyle={{ color: COLORS.DESCRIPTION }}>
            <Typography
              sx={{
                color: isDetailed ? COLORS.HEADING : 'unset',
                fontSize: isDetailed ? '16px' : '14px',
                maxWidth: isDetailed ? '300px' : '140px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {name}
            </Typography>
          </Link>

          {!isDetailed && (
            <CircleIcon
              sx={{ height: 5, width: 5, color: COLORS.DESCRIPTION_ICON, fontSize: isDetailed ? '16px' : '14px' }}
            />
          )}
          <Typography sx={{ fontSize: isDetailed ? '16px' : '14px' }}>
            {dayjs(new Date(updatedAt)).format('MMMM DD, YYYY')}
          </Typography>
        </Box>
      </Box>
      {user?.id === id && (
        <Tooltip title="Edit">
          <IconButton
            aria-label="more"
            size={isDetailed ? 'small' : 'large'}
            sx={{ padding: 0, marginLeft: isDetailed ? '50px' : 0 }}
            onClick={handleNavigation}
          >
            <EditIcon sx={{ height: isDetailed ? 25 : 20, width: isDetailed ? 25 : 20 }} />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

export default memo(PostCardDescription);
