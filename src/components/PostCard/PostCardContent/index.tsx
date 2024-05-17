import { Box } from '@mui/material';

// Constants
import { ROUTES } from '@/constants';

// Components
import { Link, Tag } from '../..';
import PostCardDescription from '../PostCardDescription';

// Models
import { Author, PostTag } from '@/models';

export interface PostCardContentProps {
  id: string;
  title: string;
  tag: PostTag;
  author: Author;
  updatedAt: Date | string;
}

const PostCardContent = ({ id, title, tag, author, updatedAt }: PostCardContentProps): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Tag tag={tag} />
      <Box sx={{ marginTop: '8px' }}>
        <Link
          id="post-title"
          title={title}
          href={ROUTES.POST_DETAIL(id)}
          style={{
            marginTop: '8px',
            fontSize: '18px',
            lineHeight: '28px',
            fontWeight: 600,
            color: '#262626',
            textDecoration: 'none',
          }}
        >
          {title}
        </Link>
      </Box>
      <PostCardDescription author={author} updatedAt={updatedAt} />
    </Box>
  );
};

export default PostCardContent;
