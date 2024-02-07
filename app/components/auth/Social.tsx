'use client';

import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';

const Social = () => {
  return (
    <div className="flex items-center w-full">
      <Button
        size="lg"
        variant="outline"
        className="flex gap-2 w-full"
        onClick={() => {}}
      >
        <FcGoogle className="w-6 h-6" /> <p>Continue with Google</p>
      </Button>
    </div>
  );
};

export default Social;
