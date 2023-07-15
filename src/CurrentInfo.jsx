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
        <AlertTitle>Online voting is open!</AlertTitle>
        <Typography gutterBottom variant="body2" color="text.secondary">
          Do note vote online if you plan to vote in-person at AGM
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          One vote per team - most recent vote will count if multiple owners vote
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          You can only vote once, and cannot edit your vote once submitted
        </Typography>
      </Alert>
      <CardContent>
        <Typography gutterBottom variant="body2" color="text.secondary">
          Please vote{" "}
          <Link href="https://forms.gle/bgPrVfdh8EXiFNnXA">here</Link>
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>Saturday 22nd July</strong> - Online voting closes
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>Sunday 23rd July 12:00</strong> - AGM at the Courthouse
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default CurrentInfo;
