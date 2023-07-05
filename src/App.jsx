import AGMCard from "./AGM/AGMCard";
import KeepersCard from "./Keepers/KeepersCard";
// import DraftBoardsCard from "./DraftsCard";
import CurrentInfo from "./CurrentInfo";
import ConstitutionCard from "./Constitution/ConstitutionCard";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <CurrentInfo />
      <AGMCard />
      <KeepersCard />
      <ConstitutionCard />
      {/* <DraftBoardsCard /> */}
    </Box>
  );
}

export default App;
