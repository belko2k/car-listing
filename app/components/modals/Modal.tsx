'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';

export type ModalProps = {
  label: string;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  onClose: () => void;
};

const Modal = ({ label, title, body, footer, onClose }: ModalProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog
      open={open}
      onOpenChange={(newOpenState) => {
        setOpen(newOpenState);
        if (!newOpenState) {
          onClose();
        }
      }}
    >
      <DialogTrigger>
        <div className="text-base font-semi-bold py-2.5 hover:bg-neutral-100">
          {label}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        {body}
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
