'use client';

import React from 'react';
import LoginForm from '../forms/LoginForm';
import MenuItem from '../navbar/MenuItem';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

const LoginModal = React.forwardRef(() => {
  return (
    <Dialog>
      <DialogTrigger>
        <MenuItem label="Login" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Login</DialogTitle>
        <DialogDescription>Welcome back</DialogDescription>
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
});

LoginModal.displayName = 'LoginModal';

export default LoginModal;
