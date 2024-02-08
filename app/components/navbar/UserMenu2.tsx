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

const UserMenu2 = () => {
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
        <DropdownMenuItem asChild>
          <LoginModal
            onClose={() => {
              setOpen(false);
            }}
          />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <RegisterModal
            onClose={() => {
              setOpen(false);
            }}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu2;
