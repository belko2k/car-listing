'use client';

import { links } from '@/lib/constants';
import Link from 'next/link';
import Wrapper from '../Wrapper';
import UserMenu from './UserMenu';

const Navbar = () => {
  return (
    <header className="shadow-md">
      <Wrapper>
        <div className="py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">Car Listing</h1>
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
            <UserMenu />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
