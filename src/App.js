import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container>
        <Outlet/>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
