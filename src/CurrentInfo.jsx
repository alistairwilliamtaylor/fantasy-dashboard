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
  <Box sx={{ mb: 2 }}>
    <Card sx={{ width: 360 }}>
      <Alert severity="info">
        <AlertTitle>AGM proposals are open!</AlertTitle>
        Please contribute <Link href="https://docs.google.com/spreadsheets/d/1IyPR-2wBNFr-JoTLk2HOzV8UeoHqUE9XEXwD3BMBmSA">here</Link>
      </Alert>
      <CardContent>
        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>Friday 14th July</strong> - AGM proposals close
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>Sunday 16th July</strong> - Online voting opens
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>Saturday 22nd July</strong> - Online voting closes
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>Sunday 23rd July 12:00</strong> - AGM at the
          Courthouse
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default CurrentInfo;
