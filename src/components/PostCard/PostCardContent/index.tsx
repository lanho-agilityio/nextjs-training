import { memo } from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

// Constants
import { COLORS, ROUTES } from '@/constants';

// Components
import { Link, Category } from '../..';

// Models
import { Author, PostCategory } from '@/models';

const PostCardDescription = dynamic(() => import('../PostCardDescription'), { ssr: false });

interface PostCardContentProps {
  id: string;
  title: string;
  tag: PostCategory;
  author: Author;
  updatedAt: Date | string;
}

const PostCardContent = ({ id, title, tag, author, updatedAt }: PostCardContentProps): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Category tag={tag} />
      <Box sx={{ marginTop: '8px' }}>
        <Link
          aria-label={title}
          title={title}
          href={ROUTES.POST_DETAIL(id)}
          _style={{
            marginTop: '8px',
            fontSize: '18px',
            lineHeight: '28px',
            fontWeight: 600,
            color: COLORS.HEADING,
            ':hover': {
              backgroundSize: '100% 3px',
              transitionDuration: '0.5s',
              background: COLORS.POST_TITLE_HOVER,
            },
          }}
        >
          {title}
        </Link>
      </Box>
      <PostCardDescription postId={id} author={author} updatedAt={updatedAt} />
    </Box>
  );
};

export default memo(PostCardContent);
