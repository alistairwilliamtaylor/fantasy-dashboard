import courthouseImage from "./courthouse.png";
import MediaCard from "./MediaCard";
import links from "./linksAGM";

const AGMCard = () => {
  return (
    <MediaCard
      image={courthouseImage}
      imageTitle="The courthouse hotel, Marrickville"
      heading="AGM"
      text="AGM Agendas and Minutes"
      links={links}
    />
  );
};

export default AGMCard;
