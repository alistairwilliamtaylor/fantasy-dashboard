import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Launch } from "@mui/icons-material";

export default function AGMList() {
  return (
    <Grid container direction="column">
      <List disablePadding>
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="https://docs.google.com/spreadsheets/d/1IyPR-2wBNFr-JoTLk2HOzV8UeoHqUE9XEXwD3BMBmSA/edit"
          >
            <ListItemIcon>
              <Launch />
            </ListItemIcon>
            <ListItemText primary="AGM proposals" />
          </ListItemButton>
        </ListItem>
      </List>
    </Grid>
  );
}
