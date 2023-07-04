/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({
  image,
  imageTitle,
  heading,
  text,
  accordion,
}) {
  return (
    <Box sx={{ mb: 2 }}>
      <Card sx={{ width: 300 }}>
        <CardMedia sx={{ height: 140 }} image={image} title={imageTitle} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        {accordion}
      </Card>
    </Box>
  );
}
