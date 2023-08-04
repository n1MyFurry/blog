import React from 'react';
import AuthSlider from '@/components/ui/AuthSlider';
import LoginForm from '@/components/ui/LoginForm';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

const Login = async () => {

   const session = await getCurrentUser();
   if(session?.user) redirect('/');

  return (
    <div className="w-full h-full flex">
      <div className="bg-auth-slider w-1/2 h-full rounded-r-lg">
        <AuthSlider />
      </div>
      <LoginForm />
    </div>
  )
}

export default Login