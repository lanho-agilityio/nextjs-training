import { PostList } from '../components';
import styles from './page.module.css';
import { Post } from '@/models';

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
];

export default function Home() {
  return (
    <main className={styles.main}>
      <PostList posts={posts} />
    </main>
  );
}
