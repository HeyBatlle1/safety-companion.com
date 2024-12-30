import { User, signInWithPopup, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { auth, googleProvider } from '../services/firebase';

let isRedirectInProgress = false;

export const handleGoogleSignIn = async (): Promise<User> => {
  try {
    // If redirect is in progress, wait for result
    if (isRedirectInProgress) {
      const result = await getRedirectResult(auth);
      if (!result) {
        throw new Error('Authentication failed. Please try again.');
      }
      isRedirectInProgress = false;
      return result.user;
    }

    try {
      // Try popup first
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (popupError: any) {
      // If popup fails, try redirect
      if (popupError.code === 'auth/popup-blocked' || 
          popupError.code === 'auth/cancelled-popup-request') {
        isRedirectInProgress = true;
        await signInWithRedirect(auth, googleProvider);
        // The page will reload, so we don't need to return anything
        return {} as User;
      }
      throw popupError;
    }
  } catch (error: any) {
    const errorMessage = getAuthErrorMessage(error.code);
    throw new Error(errorMessage);
  }
};

export const handleSignOut = async (): Promise<void> => {
  try {
    await auth.signOut();
  } catch (error: any) {
    throw new Error('Failed to sign out. Please try again.');
  }
};

const getAuthErrorMessage = (errorCode: string): string => {
  const errorMessages: Record<string, string> = {
    'auth/popup-blocked': 'Popup was blocked. We will try another sign-in method.',
    'auth/unauthorized-domain': 'This domain is not authorized. Please try again later.',
    'auth/cancelled-popup-request': 'Sign-in was cancelled. Trying alternative method...',
    'auth/network-request-failed': 'Network error. Please check your connection.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/user-token-expired': 'Your session has expired. Please sign in again.',
    'default': 'Failed to sign in. Please try again.'
  };
  
  return errorMessages[errorCode] || errorMessages.default;
};