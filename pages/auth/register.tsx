import * as React from 'react';
import { Button, Container, Paper, Stack, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import axios from "axios";
import { NextPage } from "next";
import { Box } from '@mui/system';
import { Form, Formik, FormikValues, ErrorMessage } from 'formik';
import { registerSchema } from '../../schemas/authSchema';

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
}));

const Register: NextPage = () => {
  const onSubmitHandler = (values: FormikValues) => {
    axios.post('/api/auth/register', values)
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  }

  return (
    <Container>
      <Box sx={{maxWidth: '550px'}}>
        <Paper style={{padding: '15px'}}>
          <Typography variant="h3">Register</Typography>
          <Formik
            initialValues={{
              email: '',
              password: '',
              passwordConfirm: '',
            }}
            validationSchema={registerSchema}
            onSubmit={onSubmitHandler}
          >
            <Form>
              <Stack>
                <Item>
                  <TextField
                    fullWidth
                    required
                    id="email"
                    label="E-mail"
                  />
                  <ErrorMessage name="email" />
                </Item>
                <Item>
                  <TextField
                    fullWidth
                    required
                    id="password"
                    label="Password"
                    type="password"
                  />
                  <ErrorMessage name="password" />
                </Item>
                <Item>
                  <TextField
                    fullWidth
                    required
                    id="confirmPassword"
                    label="Confirmm password"
                    type="password"
                  />
                  <ErrorMessage name="confirmPassword" />
                </Item>
                <Item>
                  <Button fullWidth variant="contained">register</Button>
                </Item>
              </Stack>
            </Form>
          </Formik>
        </Paper>
      </Box>
    </Container>
  )
}

export default Register;