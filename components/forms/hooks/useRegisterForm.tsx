import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../lib/slices/auth';
 
export interface RegisterFormFields {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  passwordConfirm: string;
}
 
function useRegisterForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const handleSubmit = async (registerFormFields: RegisterFormFields) => {
    await dispatch(register(registerFormFields));
    router.push('/auth/login')
  }

  const initialValues: RegisterFormFields = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    passwordConfirm: '',
  };
  return {
    handleSubmit,
    initialValues,
  };
}
 
export default useRegisterForm;