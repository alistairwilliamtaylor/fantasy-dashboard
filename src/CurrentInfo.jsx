import {
  Alert,
  AlertTitle,
  Box,
  Card,
  CardContent,
  Link,
  Typography,
} from "@mui/material";

const CurrentInfo = () => (
  <Box sx={{ mb: 5 }}>
    <Card sx={{ width: 360 }}>
      <Alert severity="warning">
        <AlertTitle>AGM minutes are available!</AlertTitle>
      </Alert>
      <CardContent>
        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>
            Check out the minutes{" "}
            <Link href="https://docs.google.com/document/d/1GE61wBqXeEGwYGtLNrAILpO1ZVfz_ynpP1dXufO4yKo/edit?usp=sharing">here</Link>
          </strong>  
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>
            Womens World Cup Results for draft order {" "}
            <Link href="https://docs.google.com/spreadsheets/d/17PiF7QvpEOw8xaTWCN4GYLJM0-AB4Lx5qrbcmLySZUE/edit?usp=drive_web&ouid=116300514392742136833">here</Link>
          </strong>
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default CurrentInfo;
