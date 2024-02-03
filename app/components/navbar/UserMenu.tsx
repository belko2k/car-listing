'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import LoginModal from '../modals/LoginModal';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div
        onClick={toggleOpen}
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
      {isOpen && (
        <div
          className="
          absolute
          rounded-xl
          shadow-md
          w-[10rem]
          bg-white
          overflow-hidden
          right-0
          top-12
          text-sm
        "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <LoginModal asChild>
                <MenuItem label="Login" />
              </LoginModal>
              <MenuItem onClick={() => {}} label="Sign Up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
