import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../lib/slices/auth';
 
export interface ContentFormFields {
  title: string;
  thumbnail: string;
}
 
function useContentForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (contentFormFields: ContentFormFields) => {
    console.log({ contentFormFields })
  }
  
  const initialValues: ContentFormFields = {
    title: '',
    thumbnail: '',
  };
  
  return {
    handleSubmit,
    initialValues,
  };
}
 
export default useContentForm;