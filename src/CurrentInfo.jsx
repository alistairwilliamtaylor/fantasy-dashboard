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
            Keeper list for 2024 {" "}
            <Link href="https://docs.google.com/spreadsheets/d/1hVJketd8ZBypAq3phyB_GZnVv0AclgTdzR6tJMMeYWg/edit?gid=0#gid=0">here</Link>
          </strong>  
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>
            AGM proposals 2024 {" "}
            <Link href="https://docs.google.com/spreadsheets/d/1IyPR-2wBNFr-JoTLk2HOzV8UeoHqUE9XEXwD3BMBmSA/edit?gid=1092398144#gid=1092398144">here</Link>
          </strong>
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>
            Updated Constitution (with AGM 2023 tings!){" "}
            <Link href="https://docs.google.com/document/d/1WTv6wyyhCLDl3IZdLQZoemQmArVeP3whRqmrmD9foHI/edit">here</Link>
          </strong>  
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default CurrentInfo;
