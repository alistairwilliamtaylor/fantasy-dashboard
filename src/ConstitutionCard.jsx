import constitutionImage from "./constitution.jpeg";
import SimpleAccordion from "./SimpleAccordion";
import MediaCard from "./MediaCard";

const ConstitutionCard = () => {
  return (
    <MediaCard
      image={constitutionImage}
      imageTitle="An image of the American constitution"
      heading="Constitution"
      text="The venerable document itself"
      accordion={<SimpleAccordion />}
    />
  );
};

export default ConstitutionCard;
