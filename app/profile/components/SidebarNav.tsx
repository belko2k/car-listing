'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarNavProps = {
  items: {
    href: string;
    title: string;
  }[];
};

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <nav className="flex gap-2 lg:flex-col">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            ' md:text-lg font-medium rounded-md px-5 py-3 transition-colors',
            isActive(item.href)
              ? 'font-medium bg-foreground text-background'
              : 'text-foreground hover:bg-neutral-200'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
