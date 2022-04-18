import { Container, CssBaseline, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
import { Box } from '@mui/system';
import RegisterForm from '../../components/forms/registerForm';

const Register: NextPage = () => {
  return (
    <Box sx={{ height: '100vh'}}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper sx={{ padding: 4 }}>
          <Typography variant="h6" component="h1" sx={{ mb: 2, textAlign: 'center' }}>Register</Typography>
          <RegisterForm />
        </Paper>
      </Container>
    </Box>
  )
}

export default Register;