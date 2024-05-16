import styles from './page.module.css';
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
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      name: 'Mario Sanchez 1',
      profilePicture: '',
    },
    pictureSrc: '/post.png',
    updatedAt: 'October 21, 2022',
  },
  {
    id: 'post2',
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    tag: {
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      name: 'Mario Sanchez 2',
      profilePicture: '',
    },
    pictureSrc: '/post.png',
    updatedAt: 'October 21, 2022',
  },
  {
    id: 'post3',
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    tag: {
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      name: 'Mario Sanchez 3',
      profilePicture: '',
    },
    pictureSrc: '/post.png',
    updatedAt: 'October 21, 2022',
  },
  {
    id: 'post4',
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    tag: {
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      name: 'Mario Sanchez 4',
      profilePicture: '',
    },
    pictureSrc: '/post.png',
    updatedAt: 'October 21, 2022',
  },
  {
    id: 'post5',
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    tag: {
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      name: 'Mario Sanchez 5',
      profilePicture: '',
    },
    pictureSrc: '/post.png',
    updatedAt: 'October 21, 2022',
  },
  {
    id: 'post5',
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    tag: {
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      name: 'Mario Sanchez 6',
      profilePicture: '',
    },
    pictureSrc: '/post.png',
    updatedAt: 'October 21, 2022',
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <PostList posts={posts} />
      <Box display="flex" alignItems="center" justifyContent="center" marginTop="40px">
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
