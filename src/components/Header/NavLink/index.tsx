import { CSSProperties } from 'react';
import Link from 'next/link';
import { COLORS } from '@/constants';

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
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '20px',
        paddingRight: '20px',
        width: '100%',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 500,
        textDecoration: 'none',
        color: COLORS.LINK,
        ..._style,
      }}
    >
      {title}
    </Link>
  );
};

export default NavLink;
