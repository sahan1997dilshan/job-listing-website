import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; 

const CardDetails = (props) => {
const {jobs}=props;
  return (
    <div>
      <Grid container spacing={4}>
        {jobs.map((row) => (
          <Grid item xs={12} sm={6} md={3} key={row.title}>
            <Card sx={{ width: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Title: {row.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: {row.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Salary: {row.salary}
                </Typography>
                {/* Add more job details */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
    </div>
  );
};

export default CardDetails;
