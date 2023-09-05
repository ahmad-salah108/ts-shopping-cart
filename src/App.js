import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./pages/home/components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Outlet/>
      </Container>
    </div>
  );
}

export default App;
