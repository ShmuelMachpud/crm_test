import TextField from '@mui/material/TextField';
import {isValidEmail, isValidPassword} from '../../../utils/validate'
import { useState } from 'react';
import { Button } from '@mui/material';

export default function LoginField() {
  const [firstBlock, setFirstBlock] = useState(false);
  const [isEmailError, setEmailError] = useState(false);
  const [isPasswordError, setPasswordError] = useState(false);

  const handleEmailBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!isValidEmail(event.target.value)) {
      setEmailError(true);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isValidEmail(event.target.value)) {
      setEmailError(false);
    }
  }
  const handlePasswordBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!isValidPassword(event.target.value)) {
      setPasswordError(true);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isValidPassword(event.target.value)) {
      setPasswordError(false);
      setFirstBlock(true);
    }
  }
  
  return (
    <>
      <TextField
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
        name="email"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        autoComplete="email"
        autoFocus
        error={isEmailError}
        helperText={isEmailError ? 'Email must be a valid email address' : ''}
      />
      <TextField
        onBlur={handlePasswordBlur}
        onChange={handlePasswordChange}
        name="password"
        margin="normal"
        required
        fullWidth
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        error={isPasswordError}
        helperText={isPasswordError ? 'Password must be at least 7 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character' : ''}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={firstBlock=== false || (isEmailError === true || isPasswordError === true)}
      >
        Sign In
      </Button>
    </>
  )
}