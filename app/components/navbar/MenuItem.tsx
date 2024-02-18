type MenuItemProps = {
  label: string;
};

const MenuItem = ({ label }: MenuItemProps) => {
  return (
    <div className="text-base text-center font-semi-bold py-2.5 cursor-pointer hover:bg-neutral-100">
      {label}
    </div>
  );
};

export default MenuItem;
