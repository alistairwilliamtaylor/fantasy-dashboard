import AGMCard from "./AGM/AGMCard";
import KeepersCard from "./Keepers/KeepersCard";
// import DraftBoardsCard from "./DraftsCard";
import ConstitutionCard from "./Constitution/ConstitutionCard";
import "./App.css";

function App() {
  return (
    <>
      <AGMCard />
      <KeepersCard />
      <ConstitutionCard />
      {/* <DraftBoardsCard /> */}
    </>
  );
}

export default App;
