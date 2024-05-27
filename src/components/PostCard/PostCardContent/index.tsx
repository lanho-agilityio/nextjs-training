import { memo } from 'react';
import { Box } from '@mui/material';

// Constants
import { COLORS, ROUTES } from '@/constants';

// Components
import { Link, Category } from '../..';
import PostCardDescription from '../PostCardDescription';

// Models
import { Author, PostCategory } from '@/models';

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
          id="post-title"
          title={title}
          href={ROUTES.POST_DETAIL(id)}
          _style={{
            marginTop: '8px',
            fontSize: '18px',
            lineHeight: '28px',
            fontWeight: 600,
            color: COLORS.HEADING,
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
