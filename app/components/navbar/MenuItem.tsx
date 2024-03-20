import { Button } from '../ui/button';

type MenuItemProps = {
  label: string;
  onClick?: () => void;
  icon?: React.ElementType;
  iconSize?: number;
};

const MenuItem = ({ label, onClick, icon: Icon, iconSize }: MenuItemProps) => {
  return (
    <Button onClick={onClick} variant="menu" size="lg">
      <span className="sr-only">{label}</span>
      {Icon && <Icon size={iconSize} />} {label}
    </Button>
  );
};

export default MenuItem;
