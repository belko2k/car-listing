import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { FaCheck } from 'react-icons/fa';

import { cn } from '@/lib/utils';

interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  colorName: string;
}

const RadioGroupColor = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroupColor.displayName = RadioGroupPrimitive.Root.displayName;

function iconFill(colorName: string) {
  switch (colorName.toLowerCase()) {
    case 'black':
    case 'purple':
    case 'blue':
    case 'green':
    case 'brown':
    case 'grey':
      return 'white';
    default:
      return 'black';
  }
}

const RadioGroupItemColor = React.forwardRef<
  HTMLButtonElement,
  RadioGroupItemProps
>(({ className, colorName, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square h-8 w-8 rounded-sm border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <FaCheck className="h-5 w-5 text-current" fill={iconFill(colorName)} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItemColor.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroupColor, RadioGroupItemColor };
