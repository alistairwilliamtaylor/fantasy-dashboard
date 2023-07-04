import constitutionImage from "./constitution.jpeg";
import MediaCard from "../components/MediaCard";
import links from "./linksConstitution";


const ConstitutionCard = () => {
  return (
    <MediaCard
      image={constitutionImage}
      imageTitle="An image of the American constitution"
      heading="Constitution"
      text="The venerable document itself"
      links={links}
    />
  );
};

export default ConstitutionCard;