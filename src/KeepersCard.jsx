import keepersImage from "./keepers.jpeg";
import SimpleAccordion from "./LinksAccordion";
import MediaCard from "./MediaCard";

const KeepersCard = () => {
  return (
    <MediaCard
      image={keepersImage}
      imageTitle="Keepers file in clipboard"
      heading="Keepers"
      text="Keeper eligibility overview"
      accordion={<SimpleAccordion />}
    />
  );
};

export default KeepersCard;
