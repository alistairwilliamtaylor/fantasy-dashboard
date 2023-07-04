import courthouseImage from "./courthouse.png";
import MediaCard from "./MediaCard";
import AGMList from "./AGMList";
import SimpleAccordion from "./SimpleAccordion";

const AGMCard = () => {
  return (
    <MediaCard
      image={courthouseImage}
      imageTitle="The courthouse hotel, Marrickville"
      heading="AGM"
      text="AGM Agendas and Minutes"
      accordion={<SimpleAccordion details={<AGMList />} />}
    />
  );
};

export default AGMCard;
