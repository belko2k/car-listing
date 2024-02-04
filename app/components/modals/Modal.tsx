'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';

type ModalProps = {
  onSubmit?: () => void;
  title?: string;
  description?: React.ReactElement;
  body: React.ReactElement;
  footer?: React.ReactElement;
};

const Modal = ({ title, description, body, footer }: ModalProps) => {
  //   const [showModal, setShowModal] = useState(false);

  return (
    <Dialog>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {body}
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
