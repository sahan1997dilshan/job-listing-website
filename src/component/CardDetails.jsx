import React from 'react';
import { Avatar, Button, Card, Grid, LinearProgress, Typography } from '@mui/material';
import { UserOutlined, FavoriteOutlined } from '@mui/icons-material';
import AvatarGroup from '@mui/material/AvatarGroup';
import './CardDetails.css';


const CardDetails = (props) => {

    const { jobs } = props;

    return (
        <div>
            <Grid container spacing={4}  >
                {jobs.map((row) => (
                    <Grid item xs={12} sm={6} md={3} key={row.title} >
                        <Card
                            sx={{
                                width: '100%',
                                border: '1px solid #d9d9d9',
                                padding: '10px',

                            }}
                        >
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={3}>
                                            <Avatar sx={{ width: 50, height: 50 }} variant="square" alt="User Avatar" src="avatar.jpg" />
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Typography variant="h6" fontWeight="bold">{row.name}</Typography>
                                            <Typography variant="body2" fontWeight="bold" color="pink">{row.salary}</Typography>
                                            <Typography variant="body2" color="textSecondary">Not Negotiable</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={3}>
                                            <Typography variant="body2" fontWeight="bold" color="textSecondary">8.7 Ratings</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <LinearProgress variant="determinate" value={87} sx={{ height: 8 }} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Avatar><FavoriteOutlined /></Avatar>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="h6" fontWeight="bold">Role</Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Button
                                        variant="outlined"
                                        disabled={row.title !== 'DevOps'}
                                    >DevOps
                                    </Button>
                                </Grid>

                                <Grid item xs={6}>
                                    <Button
                                        variant="outlined"
                                        disabled={row.title !== 'Developer'}
                                    >Developer
                                    </Button>
                                </Grid>

                                <Grid item xs={6}>
                                    <Button
                                        variant="outlined"
                                        disabled={row.title !== 'Engineer'}
                                    >Engineer
                                    </Button>
                                </Grid>

                                <Grid item xs={6}>
                                    <Button
                                        variant="outlined"
                                        disabled={row.title !== 'CEO'}
                                    >CEO</Button>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="h6" fontWeight="bold">Ask People</Typography>
                                </Grid>

                                <Grid item xs={7}>
                                    <Typography variant="body2" color="blue">5 clients in the list</Typography>
                                </Grid>

                                <Grid item xs={5}>
                                    <AvatarGroup max={3}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                                    </AvatarGroup>
                                </Grid>

                                <Grid item xs={6}>
                                    <Button variant="contained" color="success" href="/jobpostform" fullWidth>BOOK NOW</Button>
                                </Grid>

                                <Grid item xs={6}>
                                    <Button variant="contained" color="error" fullWidth>PENCIL</Button>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button variant="outlined" fullWidth style={{ fontWeight: 'bold', color: 'purple' }}>Check Availability</Button>
                                </Grid>
                            </Grid>

                        </Card>
                    </Grid>
                ))}

            </Grid>
        </div>
    );
};
export default CardDetails;
