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
import { Session } from '@supabase/supabase-js';
import { supabaseBrowser } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { CheckCircle2 } from 'lucide-react';
import { Avatar, AvatarImage } from '../ui/avatar';
import avatar from '@/public/images/avatar.png';

type UserMenuProps = {
  session: Session | null;
  user: string | null;
};

const UserMenu = ({ session, user }: UserMenuProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    setOpen(false);
    toast('Logged out', {
      icon: <CheckCircle2 className="mr-4" />,
    });
    router.refresh();
  };

  const handleProfileRoute = () => {
    router.push('/profile');
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={avatar.src} alt="user avatar" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {session ? (
          <>
            <DropdownMenuLabel className="text-center">
              Welcome
              <span className="block mt-1 font-normal">{user}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <MenuItem label="Profile" onClick={handleProfileRoute} />

            <button aria-label="Log out" onClick={handleLogout}>
              <MenuItem label="Log out" />
            </button>
          </>
        ) : (
          <>
            <LoginModal
              onClose={() => {
                setOpen(false);
              }}
            >
              <MenuItem label="Login" />
            </LoginModal>

            <RegisterModal
              onClose={() => {
                setOpen(false);
              }}
            >
              <MenuItem label="Sign up" />
            </RegisterModal>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
