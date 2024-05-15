import { Tag } from '@/components';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Tag title="technology" href="/" color="green" />
    </main>
  );
}
