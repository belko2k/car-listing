'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import LoginModal from '../modals/LoginModal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import MenuItem from './MenuItem';
import RegisterModal from '../modals/RegisterModal';
import { useState } from 'react';
import { Session } from '@supabase/supabase-js';
import LogoutBtn from './LogoutBtn';

type UserMenuProps = {
  session: Session | null;
};

const UserMenu = ({ session }: UserMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="focus:outline-none">
        <div
          className="
          flex
          items-center
          gap-4
          px-3
          py-2
          border-[1px]
          border-neutral-200
          cursor-pointer
          rounded-full
          hover:shadow-md
          transition
          "
        >
          <AiOutlineMenu />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {session ? (
          <LogoutBtn />
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
