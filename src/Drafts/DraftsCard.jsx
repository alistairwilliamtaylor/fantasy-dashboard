import draftBoardImage from "./prettydraftboard.jpeg";
import MediaCard from "../components/MediaCard";
import links from "./linksDrafts";

const DraftBoardsCard = () => {
  return (
    <MediaCard
      image={draftBoardImage}
      imageTitle="Fantasy football draft board"
      heading="Draft Boards"
      text="Historical Draft Boards"
      links={links}
    />
  );
};

export default DraftBoardsCard