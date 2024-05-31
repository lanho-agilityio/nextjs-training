import { memo } from 'react';
import { SxProps, Theme } from '@mui/material';

// Constants
import { COLORS } from '@/constants';

// Components
import { Link } from '@/components';

interface NavLinkStyledProps {
  title: string;
  to: string;
  linkStyle?: SxProps<Theme> | undefined;
}

const NavLink = ({ title, to, linkStyle }: NavLinkStyledProps): JSX.Element => {
  return (
    <Link
      id="nav-link"
      href={to}
      linkStyle={{
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '20px',
        paddingRight: '20px',
        width: '100%',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 500,
        color: COLORS.NAV_LINK_PRIMARY,
        ':hover': {
          color: COLORS.NAV_LINK_HOVER,
        },
        ...linkStyle,
      }}
    >
      {title}
    </Link>
  );
};

export default memo(NavLink);
