import { Container } from "@mui/material";
import AppAppBar from "./components/AppAppBar";
import Routing from "./routing";
import "./App.css";

function App() {
  return (
    <>
      <AppAppBar />
      <Container sx={{ mt: 3 }}>
        <Routing />
      </Container>
    </>
  );
}

export default App;
