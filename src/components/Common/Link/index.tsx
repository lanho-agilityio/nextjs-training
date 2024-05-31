import { AnchorHTMLAttributes, ReactNode, memo } from 'react';
import Link from 'next/link';
import { Box, SxProps, Theme } from '@mui/material';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  linkStyle?: SxProps<Theme> | undefined;
}

const CustomLink = ({ href, children, linkStyle, ...rest }: LinkProps): JSX.Element => {
  return (
    <Link href={href} style={{ textDecoration: 'none' }} {...rest}>
      <Box sx={{ ...linkStyle }}>{children}</Box>
    </Link>
  );
};

export default memo(CustomLink);
