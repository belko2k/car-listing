'use client';

import { links } from '@/lib/constants';
import Link from 'next/link';
import Wrapper from '../Wrapper';
import UserMenu from './UserMenu';
import Image from 'next/image';
import logoLight from '@/public/images/logo-light.png';
import MenuSidebar from './MenuSidebar';
import { User } from '@supabase/supabase-js';
import { useListingModal } from '@/store/use-listing-modal';
import { useRouter } from 'next/navigation';
import AddListingBtn from './AddListingBtn';

type NavbarProps = {
  user: User | null;
};

const Navbar = ({ user }: NavbarProps) => {
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
    <header className="shadow-md bg-white">
      <Wrapper>
        <div className="py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="sm:hidden">
              <MenuSidebar user={user} />
            </div>
            <div>
              <Link href="/">
                <Image
                  src={logoLight}
                  width="0"
                  height="0"
                  priority={true}
                  alt="Infinite Drive logo"
                  className="w-[5rem] sm:w-[7rem]"
                />
              </Link>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="hidden sm:block">
              <nav className="flex gap-6 items-center">
                <AddListingBtn onClick={toggleListingModal} />
                <ul className="flex gap-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="sm:text-xl hover:text-gray-500"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <UserMenu user={user} />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
