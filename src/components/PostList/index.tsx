import { Post } from '@/models';
import { Box, Grid, Stack } from '@mui/material';
import PostCard from '../PostCard';

export interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps): JSX.Element => {
  return (
    <Box>
      <Stack direction="row" spacing={1.25}>
        <PostCard content={posts[0]} _image={{ width: 472, height: 235 }} />
        <PostCard content={posts[0]} _image={{ width: 472, height: 235 }} />
      </Stack>
    </Box>
  );
};

export default PostList;
