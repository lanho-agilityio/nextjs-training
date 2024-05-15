import Link from 'next/link';

export interface TagProps {
  title: string;
  href: string;
  color: string;
}

const Tag = ({ title, href, color }: TagProps): JSX.Element => {
  return (
    <Link
      title={title}
      href={href}
      color={color}
      style={{
        display: 'inline-block',
        marginTop: '20px',
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 500,
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: `${color}`
      }}
    >
      {title}
    </Link>
  );
};

export default Tag;
