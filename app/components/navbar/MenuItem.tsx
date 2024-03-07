type MenuItemProps = {
  label: string;
  onClick?: () => void;
  icon?: React.ElementType;
  iconSize?: number;
};

const MenuItem = ({ label, onClick, icon: Icon, iconSize }: MenuItemProps) => {
  return (
    <div
      onClick={onClick}
      className="text-base font-semi-bold py-2.5 cursor-pointer hover:bg-neutral-100 flex gap-3 justify-center items-center"
    >
      <span className="sr-only">{label}</span>
      {Icon && <Icon size={iconSize} />} {label}
    </div>
  );
};

export default MenuItem;
