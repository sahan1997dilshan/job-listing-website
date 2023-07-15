import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const JobPostForm = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        
        const formData = {
            title,
            location,
            salary,
            description,
            deadline,
            token: localStorage.getItem('sessionToken'), 
        };

        
        fetch('https://ceylonscrown.com/trep/JobPublish', {
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
                    throw new Error('Failed to publish job');
                }
            })
            .then((data) => {
                console.log('Job published successfully:', data);
                navigate('/listingpage'); 
            })
            .catch((error) => {
                console.error('Error occurred during job publication:', error);
                
            });
    };

    const defaultTheme = createTheme();




    return (

        <ThemeProvider theme={defaultTheme} >
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
                        Job Post Form
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    value={title}
                                    label="Title"
                                    name="title"
                                    autoComplete='title'
                                    onChange={(e) => setTitle(e.target.value)}

                                />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    value={location}
                                    label="Location"
                                    name="location"
                                    autoComplete="location"
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="salary"
                                    label="Salary"
                                    value={salary}
                                    autoComplete="salary"
                                    onChange={(e) => setSalary(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    multiline
                                    name="description"
                                    label="Description"
                                    value={description}
                                    autoComplete="description"
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="deadline"
                                    label="Recruitment Deadline"
                                    value={deadline}
                                    autoComplete="deadline"
                                    onChange={(e) => setDeadline(e.target.value)}
                                />
                            </Grid>
                           
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                           Publish Job
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/listingpage" variant="body2">
                                    Skip Page
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>

        
    );
};

export default JobPostForm;