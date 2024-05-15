import { CSSProperties } from 'react';
import Link from 'next/link';

export interface NavLinkStyledProps {
  title: string;
  to: string;
  _style?: CSSProperties | undefined;
}

const NavLink = ({ title, to, _style }: NavLinkStyledProps): JSX.Element => {
  return (
    <Link
      href={to}
      style={{
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem',
        width: '100%',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        fontWeight: 500,
        textDecoration: 'none',
        color: '#525252',
        ..._style,
      }}
    >
      {title}
    </Link>
  );
};

export default NavLink;
