import Link from 'next/link';
import { PostTag } from '@/models';

export interface PostTagProps {
  tag: PostTag;
}

const Tag = ({ tag }: PostTagProps): JSX.Element => {
  const { title, color } = tag;

  return (
    <Link
      title={title}
      href={`/${title}`}
      style={{
        display: 'inline-block',
        marginTop: '20px',
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 500,
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: `${color}`,
      }}
    >
      {title}
    </Link>
  );
};

export default Tag;
