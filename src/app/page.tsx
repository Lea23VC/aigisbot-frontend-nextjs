'use client';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import LoginForm from '@/components/forms/loginForm';
import { useContext, useEffect } from 'react';
import { MainContext } from '@/context/MainContext';

import { useMutation } from '@apollo/client/react/hooks';
import VERIFY_MUTATION from '@/graphql/mutations/verify.mutation.graphql';
import { AuthUser } from '@/ts/auth/authUser.type';
import { GraphQLErrorResponse } from '@/ts/response/error.types';

export default function Home() {
  const { authUser, setAuthUser } = useContext(MainContext);
  const [verify, { data, loading, error }] = useMutation<{ verify: AuthUser }>(
    VERIFY_MUTATION,
  );

  useEffect(() => {
    verify()
      .then(({ data }) => {
        setAuthUser(data?.verify as AuthUser);
      })
      .catch((error) => {});
  }, []);

  return !authUser ? (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography
        component="h1"
        variant="h5"
        className="text-light-blue !font-minerva-modern"
      >
        Sign in
      </Typography>
      <LoginForm />
    </Box>
  ) : (
    <div>Logged in</div>
  );
}
