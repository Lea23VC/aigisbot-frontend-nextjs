import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#39b5dd',
    },
  },
  // typography: {
  //   fontFamily: roboto.style.fontFamily,
  // },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#39bcdd',
          }),
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          input: {
            '&:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px rgba(255, 0, 0, 0) inset',
              WebkitTextFillColor: '#39b5dd',
            },
          },
        },
      },
    },
  },
});

export default theme;
