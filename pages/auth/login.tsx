import { Container, CssBaseline, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
import { Box } from '@mui/system';
import LoginForm from '../../components/forms/loginForm';

const Login: NextPage = () => {
  return (
    <Box sx={{ height: '100vh'}}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper sx={{ padding: 4 }}>
          <Typography variant="h6" component="h1" sx={{ mb: 2, textAlign: 'center' }}>Login</Typography>
          <LoginForm />
        </Paper>
      </Container>
    </Box>
  )
}

export default Login;