import { CSSProperties } from 'react';

// Constants
import { COLORS } from '@/constants';

// Components
import { Link } from '@/components';

interface NavLinkStyledProps {
  title: string;
  to: string;
  _style?: CSSProperties | undefined;
}

const NavLink = ({ title, to, _style }: NavLinkStyledProps): JSX.Element => {
  return (
    <Link
      id="nav-link"
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
        color: COLORS.LINK,
        textDecoration: 'none',
        ..._style,
      }}
    >
      {title}
    </Link>
  );
};

export default NavLink;
