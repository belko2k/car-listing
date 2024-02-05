'use client';

type MenuItemProps = {
  label: string;
};

const MenuItem = ({ label }: MenuItemProps) => {
  return (
    <div className="text-base font-semi-bold py-2.5 hover:bg-neutral-100">
      {label}
    </div>
  );
};

export default MenuItem;
