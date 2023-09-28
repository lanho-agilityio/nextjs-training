'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthContext } from '@/hooks/useAuthContext';
import Loading from '@/components/Loading';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user } = useAuthContext();
  const pathName = usePathname();
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    if (!user) {
      router.push('/user/login');
    }
    if (user && pathName.includes('user/')) {
      router.push('/');
    }
    setLoading(false)
  }, [user, router, pathName]);

  if (loading) return <Loading />;
  return <div>{children}</div>;
}
