import * as React from 'react';
import { Button, Container, Paper, Stack, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import axios from "axios";
import { NextPage } from "next";
import { Box } from '@mui/system';
import { Form, Formik, FormikValues } from 'formik';
import { loginSchema } from '../../schemas/authSchema';

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
}));

const Login: NextPage = () => {
  const onSubmitHandler = (values: FormikValues) => {
    axios.post('/api/auth/signin', values)
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  }

  return (
    <Container>
      <Box sx={{maxWidth: '550px'}}>
        <Paper style={{padding: '15px'}}>
          <Typography variant="h3">Login</Typography>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginSchema}
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
                </Item>
                <Item>
                  <TextField
                    fullWidth
                    required
                    id="password"
                    label="Password"
                    type="password"
                  />
                </Item>
                <Item>
                  <Button fullWidth variant="contained" type="submit">Login</Button>
                </Item>
              </Stack>
            </Form>
          </Formik>
        </Paper>
      </Box>
    </Container>
  )
}

export default Login;