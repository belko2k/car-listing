'use client';

import { links } from '@/lib/constants';
import Link from 'next/link';
import Wrapper from '../Wrapper';
import UserMenu from './UserMenu';
import UserMenu2 from './UserMenu2';
import Image from 'next/image';
import logoLight from '@/public/images/logo-light.png';

const Navbar = () => {
  return (
    <header className="shadow-md">
      <Wrapper>
        <div className="py-4 flex justify-between items-center">
          <div>
            <Image
              src={logoLight}
              width="0"
              height="0"
              priority={true}
              alt="Infinite Drive logo"
              className="w-[7rem]"
            />
          </div>
          <div className="flex items-center gap-8">
            <nav>
              <ul className="flex gap-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="md:text-lg">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <UserMenu2 />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
