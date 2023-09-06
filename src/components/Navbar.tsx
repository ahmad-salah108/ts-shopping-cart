import React from "react";
import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to={"/"}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/store"}>
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/about"}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{
            width: "3rem",
            height: "3rem",
            display: "grid",
            placeItems: "center",
            position: "relative",
          }}
          variant="outline-primary"
          className="rounded-circle"
          onClick={openCart}
        >
          <img src="/images/cart.png" style={{ width: "1.3rem" }} />
          {cartQuantity > 0 && <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.3rem",
              height: "1.3rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
              fontSize: "0.9rem",
            }}
          >
            {cartQuantity}
          </div>}
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
