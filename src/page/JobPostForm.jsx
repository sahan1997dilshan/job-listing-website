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
import axios from "axios";

const JobPostForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        location: "",
        salary: "",
        description: "",
        postalCode: "",
        deadline: "",
        token: sessionStorage.getItem('token')
    });

    const [errors, setErrors] = useState({});
    const [submiterror, setSubmiterror] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit =async (event) => {
        event.preventDefault();

        const requiredFields = ["title", "location","description","deadline", "token"];
        const newErrors = {};


        requiredFields.forEach((field) => {
            if (!formData[field]) {
                newErrors[field] = true;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }
        const token = sessionStorage.getItem('token');
        console.log(token);


        try {
            const response = await axios.post(
                "https://ceylonscrown.com/trep/JobPublish",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            if (response.status >= 200 && response.status < 300) {
                const data = response.data;
                console.log("data:", data);
                if (data.isSuccess === true) {
                    console.log("Job posted is successfully:", data.isSuccess);
                    navigate("/listingpage");
                } else {
                    throw new Error(
                        "faild: " + data.errorTitle + data.errorDescription
                    );
                }
            } else {
                throw new Error("Failed ");
            }
        } catch (error) {
            console.error("Error occurred during registration:", error);
            setSubmiterror("Job post fail");

        }

        
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
                                    value={formData.title}
                                    label="Title"
                                    name="title"
                                    autoComplete='title'
                                    onChange={handleChange}

                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    value={formData.location}
                                    label="Location"
                                    name="location"
                                    autoComplete="location"
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="salary"
                                    label="Salary"
                                    value={formData.salary}
                                    autoComplete="salary"
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    multiline
                                    name="description"
                                    label="Description"
                                    value={formData.description}
                                    autoComplete="description"
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="deadline"
                                    label="Recruitment Deadline"
                                    value={formData.deadline}
                                    autoComplete="deadline"
                                    onChange={handleChange}
                                />
                            </Grid>

                        </Grid>
                        {submiterror && <p style={{ color: 'red' }}>{submiterror}</p>}
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