'use client';

import { links } from '@/lib/constants';
import Link from 'next/link';
import Wrapper from '../Wrapper';
import UserMenu from './UserMenu';
import Image from 'next/image';
import logoLight from '@/public/images/logo-light.png';
import AddListingBtn from './AddListingBtn';
import ListingModal from '../modals/ListingModal';
import MenuSidebar from './MenuSidebar';
import { Session } from '@supabase/supabase-js';

type NavbarProps = {
  session: Session | null;
  user: string | null;
};

const Navbar = ({ session, user }: NavbarProps) => {
  return (
    <header className="shadow-md bg-white">
      <Wrapper>
        <div className="py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="sm:hidden">
              <MenuSidebar session={session} />
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
                {session ? <ListingModal /> : <AddListingBtn />}
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
            <UserMenu session={session} user={user} />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
