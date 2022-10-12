import React from 'react';
import Link from 'next/link'
import { NavButton } from './styled-mui';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}
function NavLink({ href, children }: NavLinkProps) {
    return(
        <Link href={href}>
            <a>
                <NavButton className=''>
                    <span className=''>{children}</span>
                </NavButton>
            </a>
        </Link>
    )
}

export {
    NavLink,
};
