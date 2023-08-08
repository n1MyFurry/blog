import React from 'react';
import Image from 'next/image';
import { getCurrentUser } from '@/lib/session';

const AdminAvatar = async () => {

    const session = await getCurrentUser();

  return (
    <div className="item">
        <Image 
            src={session?.user?.avatarUrl}
            width={40}
            height={40}
            alt="avatar"
            className="rounded-full"
        />
    </div>
  )
}

export default AdminAvatar