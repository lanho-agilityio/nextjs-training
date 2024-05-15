import { PostCard, PostList } from '../components';
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
      name: 'Mario Sanchez',
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
      name: 'Mario Sanchez',
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
