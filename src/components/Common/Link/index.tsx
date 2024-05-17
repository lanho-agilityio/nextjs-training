import { AnchorHTMLAttributes, ReactNode } from "react";
import Link from 'next/link';

interface LinkProps  extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode
}

const CustomLink = ({href, children, ...rest}: LinkProps): JSX.Element => {
    return (
      <Link href={href} style={{textDecoration: 'none', color: '#2563eb', fontSize: '14px'}} {...rest}>
        {children}
      </Link>
    )
}

export default CustomLink