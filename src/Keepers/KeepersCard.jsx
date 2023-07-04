import keepersImage from "./keepers.jpeg";
import MediaCard from "../components/MediaCard";
import links from "./linksKeepers";

const KeepersCard = () => {
  return (
    <MediaCard
      image={keepersImage}
      imageTitle="Keepers file in clipboard"
      heading="Keepers"
      text="Keeper eligibility overview"
      links={links}
    />
  );
};

export default KeepersCard;
