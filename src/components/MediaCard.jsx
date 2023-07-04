/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinksAccordion from './LinksAccordion'

export default function MediaCard({
  image,
  imageTitle,
  heading,
  text,
  links,
}) {
  return (
    <Box sx={{ mb: 2 }}>
      <Card sx={{ width: 320 }}>
        <CardMedia sx={{ height: 140 }} image={image} title={imageTitle} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        <LinksAccordion links={links}/>
      </Card>
    </Box>
  );
}
