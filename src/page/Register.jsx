import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const defaultTheme = createTheme();

export default function Register() {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [firstnameError, setFirstNameError] = useState(false);
  const [lastnameError, setLastNameError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstname || !lastname || !country || !email || !password) {
      if (!firstname)
        setFirstNameError(true);
      if (!lastname)
        setLastNameError(true);
      if (!country)
        setCountryError(true);
      if (!password)
        setPasswordError(true);
      if (!email)
        setEmailError(true);
      return;
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
  }


    const formData = {
      firstname,
      lastname,
      country,
      city,
      email,
      password,
    };


    fetch('https://ceylonscrown.com/trep/Register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Faild Registration');
        }
      })
      .then((data) => {
        console.log('Registered successfully:', data);
        
        navigate('/login'); 
      })
      .catch((error) => {
        console.error('Error occurred during job publication:', error);
        
      });
  };



  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  value={firstname}
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  helperText={firstnameError ?(<span style={{color:'red'}}>Complete First name</span>):''}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={lastname}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => setLastName(e.target.value)}
                  helperText={lastnameError ?(<span style={{color:'red'}}>Complete Last name</span>):''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  autoComplete="country"
                  onChange={(e) => setCountry(e.target.value)}
                  helperText={countryError ?(<span style={{color:'red'}}>Complete Country name</span>):''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  optional
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                  onChange={(e) => setCity(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  helperText={emailError ?(<span style={{color:'red'}}>Complete Email or Inavalid email format</span>):''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                  helperText={passwordError ?(<span style={{color:'red'}}>Complete password</span>):''}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}