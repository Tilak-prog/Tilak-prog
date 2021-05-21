import { useRouter } from 'next/router';
import { FormEvent, useCallback, useState } from 'react';
import useFormData from '../../utils/use-form-data';
import { loginSuccess } from '../AuthReducer/actions';
import { useAuthValue } from '../AuthReducer/context';
import { signIn } from '../AuthReducer/FirebaseAuthMethod';

interface LoginPayload {
  email: string;            
  password: string;
}

async function loginHook({ email, password }: LoginPayload) {
  const response = await signIn({ email, password });
  return response;
}

export default function useLogin() {
  const { data, patchData } = useFormData({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const { dispatch } = useAuthValue();
  const router = useRouter();
  const isValid = useCallback(() => {
    const currentErrors = [];
    if (!data?.email) {
      currentErrors.push('Please provide email');
    }
    if (!data?.password) {
      currentErrors.push('Please provide password');
    }
    setErrors(currentErrors);
    return !currentErrors.length;
  }, [data, setErrors]);

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault();
      if (!isValid()) return;

      const payload: Extract<LoginPayload, any> = { ...data };
      setLoading(true);
      const result = await loginHook(payload);
      if (result?.code) {
        errors.push(result?.message);
        setLoading(false);
        patchData({ email: '', password: '' });
      } else {
        const token = await result?.getIdToken();
        dispatch(
          loginSuccess({
            id: result?.uid || '',
            name: result?.displayName || '',
            token,
            profilePicture: result?.photoURL,
            email: data?.email,
          }),
        );
        router.push('/');
      }
      setLoading(false);
    },
    [data, isValid, errors, dispatch, patchData, router],
  );

  return {
    data,
    loading,
    errors,
    onChange: patchData,
    onSubmit,
  };
}
