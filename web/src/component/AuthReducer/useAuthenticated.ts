import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';

export function useAuthenticated(role?: string, redirect: string = '/auth/login') {
  const router = useRouter();
  const token = Cookies.get('token');
  //@TODO : check for role;

  useLayoutEffect(() => {
    if (token === 'undefined' ) {
      router.replace(redirect);
    }
  }, [redirect, token, router]);
}
