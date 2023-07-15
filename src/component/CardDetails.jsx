import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardDetails = ({ jobs }) => {
  return (
    <div>
      <Card sx={{ width: '350px' }} >
          <CardContent>
            <Typography variant="h6" component="div">
              Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Location:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Salary:
            </Typography>
            {/* Add more job details */}
          </CardContent>
        </Card>
    </div>
  );
};

export default CardDetails;
