import { memo } from 'react';
import { Grid } from '@mui/material';

// Components
import PostCardSkeleton from '../PostCardSkeleton';

const PostListSkeleton = (): JSX.Element => {
  const skeleton = Array(9).fill(0);

  return (
    <Grid container rowSpacing={5} columnSpacing={5}>
      {skeleton.map((_, index) => (
        <Grid key={`post-${index}`} item xs={12} sm={6} md={6} lg={4}>
          <PostCardSkeleton />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(PostListSkeleton);
