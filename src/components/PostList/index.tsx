import { Post } from '@/models';
import { Box, Grid } from '@mui/material';
import PostCard from '../PostCard';
import { LASTEST_POST_INDEX } from '@/constants';

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps): JSX.Element => {
  return (
    <Box>
      <Grid container rowSpacing={5} columnSpacing={5}>
        {posts.map((post, index) => {
          const isRecentPost = LASTEST_POST_INDEX.includes(index);
          if (isRecentPost) {
            return (
              <Grid key={`post-${index}`} item xs={12} sm={6} md={6} lg={6}>
                <PostCard content={post} isRecentPost={isRecentPost} />
              </Grid>
            );
          } else {
            return (
              <Grid key={`post-${index}`} item xs={12} sm={6} md={6} lg={4}>
                <PostCard content={post} isRecentPost={isRecentPost} />
              </Grid>
            );
          }
        })}
      </Grid>
    </Box>
  );
};

export default PostList;
