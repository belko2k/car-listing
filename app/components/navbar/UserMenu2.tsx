'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import LoginModal from '../modals/LoginModal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import MenuItem from './MenuItem';
import RegisterModal from '../modals/RegisterModal';

const UserMenu2 = () => {
  return (
    <DropdownMenu>
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
          <div className="hidden sm:block">
            <Avatar src={null} />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <LoginModal asChild>
          <MenuItem label="Login" />
        </LoginModal>
        <RegisterModal asChild>
          <MenuItem label="Sign Up" />
        </RegisterModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu2;
