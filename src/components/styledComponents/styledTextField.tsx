import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiTextField-root': {
    borderColor: 'red',
  },
  ' & fieldset': {
    borderColor: `${theme.palette.primary.main} !important`,
  },
  '& input, & label': {
    color: `${theme.palette.primary.main} !important`,
  },
}));

export default StyledTextField;
