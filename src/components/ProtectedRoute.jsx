import React from 'react';
import { RedirectToSignIn } from '@clerk/clerk-react'; // Clerk's built-in sign-in redirect
import { useAuth } from '@clerk/clerk-react';

const ProtectedRoute = ({ element }) => {
  const { isSignedIn } = useAuth();

  // If the user is not signed in, redirect to the sign-in page
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return element;
};

export default ProtectedRoute;
