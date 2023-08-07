'use client';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import LoginForm from '@/components/forms/loginForm';
import { useContext } from 'react';
import { MainContext } from '@/context/MainContext';
export default function Home() {
  const { authUser } = useContext(MainContext);
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
