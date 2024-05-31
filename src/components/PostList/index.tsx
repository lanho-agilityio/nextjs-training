import { memo } from 'react';
import { Box, Grid } from '@mui/material';

// Constants
import { LASTEST_POST_INDEX } from '@/constants';

// Components
import { PostCard } from '@/components';

// Models
import { Post } from '@/models';

interface PostListProps {
  posts: Post[];
  isArchived?: boolean;
}

const PostList = ({ posts, isArchived = false }: PostListProps): JSX.Element => {
  return (
    <Box>
      <Grid container rowSpacing={5} columnSpacing={5}>
        {posts.map((post, index) => {
          const isRecentPost = LASTEST_POST_INDEX.includes(index);
          return (
            <Grid key={`post-${post.id}`} item xs={12} sm={6} md={6} lg={!isArchived && isRecentPost ? 6 : 4}>
              <PostCard content={post} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default memo(PostList);
