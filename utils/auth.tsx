// import React, { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import supabase from './supabase';
// import { ComponentType } from 'react';


// function withAuth<T>(WrappedComponent: ComponentType<T>) {
//   const WithAuthComponent = (props: T) => {
//     const router = useRouter();
//     const session = supabase.auth.getSession();

//     useEffect(() => {
//       if (!session) {
//         router.push("/login");
//       }
//     }, [session]);

//     if (session) {
//       return <WrappedComponent {...props} />;
//     } else {
//       return null; 
//     }
//   };

//   const wrappedComponentName =
//     WrappedComponent.displayName || WrappedComponent.name || "Component";
//   WithAuthComponent.displayName = `withAuth(${wrappedComponentName})`;

//   return WithAuthComponent;
// }