import { Box, Button, Typography } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { Form, Formik } from "formik";
import { loginSchema } from "../../schemas/authSchema";
import PasswordInput from "../form/passwordInput";
import TextInput from "../form/textInput";
import useLoginForm from "./hooks/useLoginForm"
import Link from "next/link";

const LoginForm = () => {
  const { initialValues, handleSubmit } = useLoginForm();

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={loginSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box component="div" sx={{ pb: 1 }}>
              <TextInput 
                name='email'
                type='email'
                label='E-mail'
              />
            </Box>
            <Box component="div" sx={{ pb: 1 }}>
              <PasswordInput 
                name='password'
                label='Password'
              />
            </Box>
            <Box component="div" sx={{ pb: 1 }}>
              {
                isSubmitting ? (
                  <LoadingButton loading variant="outlined">
                    Login in...
                  </LoadingButton>
                ) : (
                  <Button type='submit' variant="outlined">
                    <Typography variant="button" display="block">Login</Typography>
                  </Button>
                )
              }
            </Box>
            <Box component="div" sx={{ pb: 1 }}>
              <Typography variant="caption" display="block">
                Don&apos;t have an account yet? <Link href='/auth/register'>Signup here</Link>.
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm;
