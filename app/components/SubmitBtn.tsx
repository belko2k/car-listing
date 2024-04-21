import { Button } from './ui/button';

type SubmitBtnProps = {
  type: 'submit' | 'reset' | 'button';
  label: string;
  isSubmitting: boolean;
  width?: string;
};

const SubmitBtn = ({
  type,
  label,
  isSubmitting,
  width = 'w-full',
}: SubmitBtnProps) => {
  return (
    <Button
      type={type}
      disabled={isSubmitting}
      className={`text-base ${width}`}
    >
      {isSubmitting ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        label
      )}
    </Button>
  );
};

export default SubmitBtn;
