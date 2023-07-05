/* eslint-disable react/prop-types */
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import BasicListItem from "./BasicListItem";
import { Box } from "@mui/material";

export default function SimpleAccordion({ links }) {
  return (
    <Accordion>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        />
      </Box>
      <AccordionDetails>
        <List disablePadding>
          {links.map(({ href, label }, index) => (
            <BasicListItem href={href} label={label} key={index} />
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
