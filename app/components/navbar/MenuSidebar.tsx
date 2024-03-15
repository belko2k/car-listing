'use client';

import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../ui/sheet';
import { links } from '@/lib/constants';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import AddListingBtn from './AddListingBtn';
import { usePathname, useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';
import { twMerge } from 'tailwind-merge';
import { useListingModal } from '@/store/use-listing-modal';

type MenuSidebarProps = {
  user: User | null;
};

const MenuSidebar = ({ user }: MenuSidebarProps) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const { open } = useListingModal();
  const router = useRouter();

  const toggleListingModal = () => {
    if (user) {
      open();
    } else {
      router.push('/login');
    }
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          aria-label="menu"
          className="
                flex
                items-center
                gap-4
                px-3
                py-2
                border-[1px]
                cursor-pointer
                rounded-full
                hover:shadow-md
                transition
                "
        >
          <AiOutlineMenu />
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="mt-10">
          <ul className="grid gap-4">
            {links.map((link) => {
              const { name, href, Icon } = link;
              return (
                <li key={name}>
                  <SheetClose asChild className="block">
                    <Link
                      href={href}
                      className={twMerge(
                        'text-2xl rounded-lg p-2 flex items-center gap-5',
                        isActive(link.href)
                          ? 'bg-neutral-100 font-semibold'
                          : 'hover:bg-neutral-100'
                      )}
                    >
                      <Icon />
                      {link.name}
                    </Link>
                  </SheetClose>
                </li>
              );
            })}

            <AddListingBtn onClick={toggleListingModal} />
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSidebar;
