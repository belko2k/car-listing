import { Button } from './ui/button';

type SubmitBtnProps = {
  type: 'submit' | 'reset' | 'button';
  label: string;
  isSubmitting: boolean;
};

const SubmitBtn = ({ type, label, isSubmitting }: SubmitBtnProps) => {
  return (
    <Button type={type} disabled={isSubmitting} className="w-full text-base">
      {isSubmitting ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        label
      )}
    </Button>
  );
};

export default SubmitBtn;
