import Link from 'next/link';

export interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps): JSX.Element => {
  return (
    <Link
      title={title}
      href={`/${title}`}
      style={{
        marginTop: '8px',
        fontSize: '18px',
        lineHeight: '28px',
        fontWeight: 600,
        color: '#262626',
        textDecoration: 'none',
      }}
    >
      {title}
    </Link>
  );
};

export default Heading;
