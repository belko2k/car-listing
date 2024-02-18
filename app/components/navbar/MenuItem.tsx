type MenuItemProps = {
  label: string;
  onClick?: () => void;
};

const MenuItem = ({ label, onClick }: MenuItemProps) => {
  return (
    <div
      onClick={onClick}
      className="text-base text-center font-semi-bold py-2.5 cursor-pointer hover:bg-neutral-100"
    >
      {label}
    </div>
  );
};

export default MenuItem;
