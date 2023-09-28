'use client'
import {  useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useRouter } from 'next/navigation';

export default function RouteGuard({ children }: {
    children: React.ReactNode;
  }) {
    const router = useRouter();
    const {user} = useAuthContext();

    useEffect(() => {
        if(!user){
            router.push('/user/login')
        }
    }, [user, router]);

    return (
        <div>
          {children}
        </div>
      );
}