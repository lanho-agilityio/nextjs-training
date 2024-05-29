import { AnchorHTMLAttributes, ReactNode, memo } from 'react';
import Link from 'next/link';
import { Box, SxProps, Theme } from '@mui/material';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  _style?: SxProps<Theme> | undefined;
}

const CustomLink = ({ href, children, _style, ...rest }: LinkProps): JSX.Element => {
  return (
    <Link href={href} style={{ textDecoration: 'none' }} {...rest}>
      <Box sx={{ ..._style }}>{children}</Box>
    </Link>
  );
};

export default memo(CustomLink);
