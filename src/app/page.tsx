import { PostList } from '../components';
import { Post } from '@/models';
import { Box } from '@mui/material';
import { COLORS, ROUTES } from '@/constants';
import Link from 'next/link';

const posts: Post[] = [
  {
    id: 'post1',
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    tag: {
      id: '1',
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      id: '1',
      name: 'Mario Sanchez 1',
    },
    pictureSrc: '/post.png',
    updatedAt: 'October 21, 2022',
  },
  {
    id: 'post2',
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    tag: {
      id: '1',
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      id: '1',
      name: 'Mario Sanchez 2',
    },
    pictureSrc: '/post.png',
    updatedAt: 'October 21, 2022',
  },
  {
    id: 'post3',
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    tag: {
      id: '1',
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      id: '1',
      name: 'Mario Sanchez 3',
    },
    pictureSrc: '/post.png',
    updatedAt: 'October 21, 2022',
  },
  {
    id: 'post4',
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    tag: {
      id: '1',
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      id: '1',
      name: 'Mario Sanchez 4',
    },
    pictureSrc: '/post.png',
    updatedAt: 'October 21, 2022',
  },
  {
    id: 'post5',
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    tag: {
      id: '1',
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      id: '1',
      name: 'Mario Sanchez 5',
    },
    pictureSrc: '/post.png',
    updatedAt: 'October 21, 2022',
  },
];

export default function Home() {
  return (
    <main>
      <PostList posts={posts} />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
        <Link
          id="view-all-posts"
          href={ROUTES.POSTS}
          style={{
            color: COLORS.DESCRIPTION,
            border: `1px solid ${COLORS.DESCRIPTION}`,
            borderRadius: '6px',
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '16px',
            paddingRight: '12px',
            textDecoration: 'none',
          }}
        >
          View All Posts
        </Link>
      </Box>
    </main>
  );
}
