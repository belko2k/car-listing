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
import MenuItem from './MenuItem';
import LoginModal from '../modals/LoginModal';
import RegisterModal from '../modals/RegisterModal';
import { User } from '@supabase/supabase-js';
import { supabaseBrowser } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { LuUserX, LuUserCheck, LuUserPlus, LuUserCircle } from 'react-icons/lu';
import { CiLogin, CiLogout } from 'react-icons/ci';

import { Button } from '../ui/button';

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

  const handleProfileRoute = () => {
    router.push('/profile');
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
              onClick={handleProfileRoute}
              icon={LuUserCircle}
              iconSize={20}
            />

            <MenuItem
              label="Log out"
              icon={CiLogout}
              iconSize={20}
              onClick={handleLogout}
            />
          </>
        ) : (
          <>
            <LoginModal
              onClose={() => {
                setOpen(false);
              }}
            >
              <MenuItem label="Login" icon={CiLogin} iconSize={20} />
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
