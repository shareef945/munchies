import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import createClient from './supabase';

export function withAuth<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>
) {
  return function WithAuth(props: T) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const session = await createClient.auth.getSession();

          if (session?.user) {
            setIsAuthenticated(true);
          } else {
            router.push('/login'); 
          }
        } catch (error) {
          console.error('Error checking authentication:', error);
          router.push('/login'); 
        } finally {
          setIsLoading(false);
        }
      };

      checkAuth();
    }, []);

    if (isLoading) {
     
      return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
      
      return null; 
    }

    return <WrappedComponent {...props} />;
  };
}
