/* eslint-disable react/prop-types */
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Launch } from "@mui/icons-material";

const BasicListItem = ({ href, label }) => (
    <ListItem disablePadding>
        <ListItemButton
        component="a"
        href={href}
        >
            <ListItemIcon>
                <Launch />
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    </ListItem>
)

export default BasicListItem