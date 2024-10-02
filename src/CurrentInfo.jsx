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
        <AlertTitle>Get Ready for the 2024 Season!</AlertTitle>
      </Alert>
      <CardContent>

        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>
            AGM proposals 2025 {" "}
            <Link href="https://docs.google.com/spreadsheets/d/1IyPR-2wBNFr-JoTLk2HOzV8UeoHqUE9XEXwD3BMBmSA/edit?gid=904701143#gid=904701143">here</Link>
          </strong>
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>
            Secret Link to league history{" "}
            <Link href="https://fantasy.nfl.com/league/1078038/history/">here</Link>
          </strong>  
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default CurrentInfo;
