/* eslint-disable react/prop-types */
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import BasicListItem from './BasicListItem'

export default function SimpleAccordion({ links }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      />
      <AccordionDetails>
        <List disablePadding>
          {links.map(({ href, label }, index) => (
            <BasicListItem href={href} label={label} key={index}/>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
