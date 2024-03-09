import { FaCar, FaHome } from 'react-icons/fa';

export const links = [
  {
    name: 'Home',
    href: '/',
    Icon: FaHome,
  },
  {
    name: 'Cars',
    href: '/cars',
    Icon: FaCar,
  },
] as const;
