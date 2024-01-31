'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';

const UserMenu = () => {
  return (
    <div
      onClick={() => {}}
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
      <Avatar src={null} />
    </div>
  );
};

export default UserMenu;
