'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';

import { Button } from '../ui/button';

import MenuItem from './MenuItem';
import LoginModal from '../modals/LoginModal';
import RegisterModal from '../modals/RegisterModal';
import { User } from '@supabase/supabase-js';
import { supabaseBrowser } from '@/lib/supabase/client';
import { toast } from 'sonner';
import {
  LuUserX,
  LuUserCheck,
  LuUserPlus,
  LuUserCircle,
  LuLogIn,
} from 'react-icons/lu';
import { CiLogout } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';

type UserMenuProps = {
  user: User | null;
};

const UserMenu = ({ user }: UserMenuProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    setOpen(false);
    toast.info('Logged out');
    router.refresh();
  };

  const handleRoute = (route: string) => {
    router.push(`/${route}`);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {user ? <LuUserCheck size={20} /> : <LuUserX size={20} />}
          <span className="sr-only">User menu button</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {user ? (
          <>
            <DropdownMenuLabel className="text-center">
              Welcome
              <span className="block mt-1 font-normal">
                {user.user_metadata.username}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <MenuItem
              label="Profile"
              onClick={() => handleRoute('profile')}
              icon={LuUserCircle}
              iconSize={20}
            />
            <MenuItem
              label="Favorites"
              icon={FaHeart}
              iconSize={20}
              onClick={() => handleRoute('favorites')}
            />

            <AlertDialog>
              <AlertDialogTrigger>
                <MenuItem label="Log out" icon={CiLogout} iconSize={20} />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to log out?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. YOu will be logged out of your
                    account after.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleLogout}>
                    Log Out
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
        ) : (
          <>
            <LoginModal
              onClose={() => {
                setOpen(false);
              }}
            >
              <MenuItem label="Login" icon={LuLogIn} iconSize={20} />
            </LoginModal>

            <RegisterModal
              onClose={() => {
                setOpen(false);
              }}
            >
              <MenuItem label="Sign up" icon={LuUserPlus} iconSize={20} />
            </RegisterModal>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
