import { AlertTriangle } from 'lucide-react';

type FormErrorProps = {
  message?: string;
};

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <AlertTriangle className="h-5 w-5 shrink-0" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
