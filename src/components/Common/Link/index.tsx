import { AnchorHTMLAttributes, ReactNode, memo } from 'react';
import Link, { LinkProps } from 'next/link';
import { Box, SxProps, Theme } from '@mui/material';

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, LinkProps {
  href: string;
  children: ReactNode;
  linkStyle?: SxProps<Theme> | undefined;
}

const CustomLink = ({ href, children, linkStyle, ...rest }: CustomLinkProps): JSX.Element => {
  return (
    <Link href={href} style={{ textDecoration: 'none' }} {...rest}>
      <Box sx={{ ...linkStyle }}>{children}</Box>
    </Link>
  );
};

export default memo(CustomLink);
