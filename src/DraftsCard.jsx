import draftBoardImage from "./prettydraftboard.jpeg";
import SimpleAccordion from "./SimpleAccordion";
import MediaCard from "./MediaCard";

const DraftBoardsCard = () => {
  return (
    <MediaCard
      image={draftBoardImage}
      imageTitle="Fantasy football draft board"
      heading="Draft Boards"
      text="Historical Draft Boards"
      accordion={<SimpleAccordion />}
    />
  );
};

export default DraftBoardsCard;
