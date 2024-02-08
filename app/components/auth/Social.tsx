'use client';

import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';

type SocialProps = {
  google: string;
};

const Social = ({ google }: SocialProps) => {
  return (
    <div className="flex items-center w-full">
      <Button
        size="lg"
        variant="outline"
        className="flex gap-2 w-full"
        onClick={() => {}}
      >
        <FcGoogle className="w-6 h-6" /> <p className="text-base">{google}</p>
      </Button>
    </div>
  );
};

export default Social;
