import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../lib/slices/auth';
 
export interface LoginFormFields {
  email: string;
  password: string;
}
 
function useLoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (loginFormFields: LoginFormFields) => {
    await dispatch(login(loginFormFields));
    router.push('/users');
  }
  
  const initialValues: LoginFormFields = {
    email: '',
    password: '',
  };
  
  return {
    handleSubmit,
    initialValues,
  };
}
 
export default useLoginForm;