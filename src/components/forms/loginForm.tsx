'use client';

import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StyledTextField from '@/components/styledComponents/styledTextField';
import { useMutation } from '@apollo/client/react/hooks';
import LOGIN_MUTATION from '@/graphql/mutations/login.mutation.graphql';
import { useEffect, useContext } from 'react';
import { AuthUser } from '@/ts/auth/authUser.type';
import { MainContext } from '@/context/MainContext';

export default function LoginForm() {
  const [login, { data, loading, error }] = useMutation<{ login: AuthUser }>(
    LOGIN_MUTATION,
  );
  const { setAuthUser, authUser } = useContext(MainContext);

  useEffect(() => {}, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      variables: {
        email: data.get('email'),
        password: data.get('password'),
      },
    })
      .then(({ data }) => {
        localStorage.setItem('token', data?.login?.token as string);
        setAuthUser(data?.login as AuthUser);
      })
      .catch((error) => {});
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <StyledTextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        className="border border-light-blue"
        color="primary"
        InputLabelProps={{ className: '!font-minerva-modern text-light-blue' }}
      />
      <StyledTextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        InputLabelProps={{ className: '!font-minerva-modern text-light-blue' }}
      />
      <FormControlLabel
        control={
          <Checkbox
            value="remember"
            color="primary"
            className="!text-light-blue"
          />
        }
        label="Remember me"
        className="text-light-blue"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        <Typography
          variant="button"
          className="text-white !font-minerva-modern"
        >
          Sign In
        </Typography>
      </Button>
      <Grid container>
        <Grid item xs>
          <Link
            href="#"
            variant="body2"
            className="text-light-blue !font-minerva-modern"
          >
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="#"
            variant="body2"
            className="text-light-blue !font-minerva-modern"
          >
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
