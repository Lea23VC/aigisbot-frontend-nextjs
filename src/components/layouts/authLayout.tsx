'use client';

import { useContext, useEffect } from 'react';
import { MainContext } from '@/context/MainContext';

import { useMutation } from '@apollo/client/react/hooks';
import VERIFY_MUTATION from '@/graphql/mutations/verify.mutation.graphql';
import { AuthUser } from '@/ts/auth/authUser.type';
import LoginSection from '@/components/sections/auth/loginSection';
import LoadingSection from '@/components/sections/feedback/loadingSection';
import Box from '@mui/material/Box';
import Header from '../header';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { authUser, setAuthUser } = useContext(MainContext);
  const [verify, { loading, error, called }] = useMutation<{
    verify: AuthUser;
  }>(VERIFY_MUTATION);

  useEffect(() => {
    verify()
      .then(({ data }) => {
        setAuthUser(data?.verify as AuthUser);
      })
      .catch((error) => {});
  }, []);

  return loading || !called ? (
    <LoadingSection />
  ) : authUser ? (
    <Box>
      <Header /> {children}
    </Box>
  ) : (
    <LoginSection />
  );
}
