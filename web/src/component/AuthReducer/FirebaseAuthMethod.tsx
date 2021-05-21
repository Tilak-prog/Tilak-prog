import { firebase } from '../../../firebase';

interface SignInProps {
  email: string;
  password: string;
}

interface IPassword {
  password: string;
}

export const signIn = async ({ email, password }: SignInProps) => {
  try {
    const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user;
  } catch (err) {
    return err;
  }
};

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    localStorage.clear();
  } catch (err) {
    return err;
  }
};

export const updatePassword = async ({ password }: IPassword) => {
  try {
    return firebase.auth().currentUser?.updatePassword(password);
  } catch (err) {
    return err;
  }
};

export const forgotPassword = async (email: string) => {
  try {
    return firebase.auth().sendPasswordResetEmail(email);
  } catch (err) {
    return err;
  }
};