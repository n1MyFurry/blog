import React from 'react';
import AuthSlider from '@/components/ui/AuthSlider';
import RegisterForm from '@/components/ui/RegisterForm';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

const Register = async () => {

  const session = await getCurrentUser();
  if(session?.user) redirect('/');

  return (
    <div className="w-full h-full flex">
      <div className="bg-[#071325] w-1/2 h-full rounded-r-lg">
        <AuthSlider />
      </div>
      <RegisterForm />
    </div>
  )
}

export default Register