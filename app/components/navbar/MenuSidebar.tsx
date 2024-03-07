import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../ui/sheet';
import { links } from '@/lib/constants';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import ListingModal from '../modals/ListingModal';
import AddListingBtn from './AddListingBtn';
import { usePathname } from 'next/navigation';
import { User } from '@supabase/supabase-js';

type MenuSidebarProps = {
  user: User | null;
};

const MenuSidebar = ({ user }: MenuSidebarProps) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
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
      <SheetContent side="left" className="w-[18rem]">
        <nav className="mt-10">
          <ul className="grid gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <SheetClose asChild className="flex justify-center">
                  <Link
                    href={link.href}
                    className={
                      isActive(link.href)
                        ? 'bg-neutral-100 block text-2xl rounded-lg p-2 font-semibold'
                        : 'text-2xl rounded-lg p-2 hover:bg-neutral-100'
                    }
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              </li>
            ))}
            {user ? <ListingModal /> : <AddListingBtn />}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSidebar;
