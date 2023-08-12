'use client';

import Box from '@mui/material/Box';

import AuthLayout from '@/components/layouts/authLayout';

export default function Home() {
  return (
    <AuthLayout>
      <Box>Logged in</Box>
    </AuthLayout>
  );
}
