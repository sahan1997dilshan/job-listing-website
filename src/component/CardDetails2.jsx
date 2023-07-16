import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const CardDetails2 = (props) => {
  const { jobs } = props;

  return (
    <div>
      <Grid container spacing={4}>
        {jobs.map((row) => (
          <Grid item xs={12} sm={6} md={3} key={row.title}>
            <Card sx={{ width: '100%' }}>
              <CardContent>
                <Avatar src='#' sx={{ width: 60, height: 60 }} />
                <Typography variant="h6" component="div">
                  Job: {row.title}
                </Typography>
                <Typography variant="body2" component="div">
                  Name: {row.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: {row.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Salary: {row.salary}
                </Typography>
                <Button href='/jobpostform' variant="contained" color="primary">
                  Book Job
                </Button>
                <Rating name="rating" value={row.rating} readOnly />
                <Stack direction="row" spacing={1} sx={{ marginTop: '10px' }}></Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardDetails2;
