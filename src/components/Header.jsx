import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/ProChauffeursTransparent.png";
import "../components/Header.css";
function Header() {
  return (
    <>
      <div className="header pb-5">
        <Navbar collapseOnSelect expand="lg" className="bg-transparent">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>
              <img src={logo} alt="Logo" className="logo" width={120} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="navlink" as={Link} to={"/about"}>
                  About
                </Nav.Link>
                <Nav.Link className="navlink" as={Link} to={"/services"}>
                  Services
                </Nav.Link>
                <Nav.Link className="navlink" as={Link} to={"/footer"}>
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1 className="text-light text-center mt-2 ">Book Your Ride</h1>
      </div>
    </>
  );
}

export default Header;
