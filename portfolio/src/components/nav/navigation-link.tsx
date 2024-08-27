'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import type { pathnames } from '@/config';
import { Link } from '@/navigation';

export default function NavigationLink<Pathname extends keyof typeof pathnames>({ href, ...rest }: ComponentProps<typeof Link<Pathname>>) {

    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const isActive = pathname === href;

    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            className={
                `inline-block px-2 py-3 transition-colors ease-in-out uppercase'
                ${isActive ? 'text-main-color' : 'hover:text-main-color'}`
            }
            href={href}
            {...rest}
        />
    );
}