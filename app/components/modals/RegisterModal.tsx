'use client';

import React from 'react';
import MenuItem from '../navbar/MenuItem';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

const RegisterModal = React.forwardRef(() => {
  return (
    <Dialog>
      <DialogTrigger>
        <MenuItem label="Register" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Register</DialogTitle>
        <DialogDescription>Welcome back</DialogDescription>
        {/* <RegisterForm /> */}
      </DialogContent>
    </Dialog>
  );
});

RegisterModal.displayName = 'RegisterModal';

export default RegisterModal;
