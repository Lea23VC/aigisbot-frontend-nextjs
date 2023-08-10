import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingSection() {
  return (
    <Box className="h-screen flex items-center justify-center">
      <CircularProgress />
    </Box>
  );
}
