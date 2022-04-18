import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { Form, Formik } from "formik";
import TextInput from "../form/textInput";
import useRegisterForm from "./hooks/useRegisterForm"
import { registerSchema } from "../../schemas/authSchema";
import PasswordInput from "../form/passwordInput";
import Link from "next/link";

const RegisterForm = () => {
  const { initialValues, handleSubmit } = useRegisterForm();

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={registerSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box component="div" sx={{ pb: 1 }}>
              <TextInput 
                name='email'
                type='email'
                label='E-mail'
                helperText='Used for login in'
              />
            </Box>
            <Grid container spacing={2} sx={{ pb: 1 }}>
              <Grid item xs={6}>
                <TextInput 
                  name='firstname'
                  type='text'
                  label='Firstname'
                />
              </Grid>
              <Grid item xs={6}>
                <TextInput 
                  name='lastname'
                  type='text'
                  label='Lastname'
                />
              </Grid>
            </Grid>
            <Divider sx={{ mb: 2 }} />
            <Box component="div" sx={{ pb: 1 }}>
              <PasswordInput 
                name='password'
                label='Password'
              />
            </Box>
            <Box component="div" sx={{ pb: 1 }}>
              <PasswordInput 
                name='passwordConfirm'
                label='Confirm Password'
              />
            </Box>
            
            <Box component="div" sx={{ pb: 1 }}>
              {
                isSubmitting ? (
                  <LoadingButton loading variant="outlined">
                    Registering...
                  </LoadingButton>
                ) : (
                  <Button type='submit' variant="outlined">
                    <Typography variant="button" display="block">Register</Typography>
                  </Button>
                )
              }
            </Box>
            <Box component="div" sx={{ pb: 1 }}>
              <Typography variant="caption" display="block">
                Have an account? <Link href='/auth/login'>Signin here</Link>.
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterForm;
