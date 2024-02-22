import { links } from '@/lib/constants';
import Link from 'next/link';
import Wrapper from '../Wrapper';
import UserMenu from './UserMenu';
import Image from 'next/image';
import logoLight from '@/public/images/logo-light.png';
import { supabaseServer } from '@/lib/supabase/server';
import AddListingBtn from './AddListingBtn';
import ListingModal from '../modals/ListingModal';

const Navbar = async () => {
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user.user_metadata.username;

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
              className="w-[5rem] sm:w-[7rem]"
            />
          </div>
          <div className="flex items-center gap-6">
            {session ? (
              <ListingModal session={session} />
            ) : (
              <AddListingBtn session={session} />
            )}

            <nav>
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
            <UserMenu session={session} user={user} />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
