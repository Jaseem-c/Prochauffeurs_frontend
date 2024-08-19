import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/ProChauffeursTransparent.png";
import ClientRating from "../components/ClientRating";
import Reasons from "../components/Reasons";
import Services from "../components/Services";
import "./Home.css";
import { resetBookingFormState, resetDriverFormState, resetHirerFormState, resetLoginFormState } from "../redux/slices/hirerDetailsSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginFormState = useSelector(
    (state) => state.hirerDetails.loginFormState
  );

  const handleLoginClick_1 = () => {
    navigate("/login");
  };

  const handleLoginClick_1_logOut = () => {
    dispatch(resetLoginFormState());
    dispatch(resetHirerFormState());
    dispatch(resetDriverFormState());
    dispatch(resetBookingFormState());
    localStorage.removeItem("currentUser");
    toast.success("Logout successful")
  };

  const handleBookNowClick = () => {
    if (localStorage.getItem("currentUser")) {
      navigate("/hirerdetails");
    } else {
      toast.info("You need to log in to use this feature");
    }
  };
  return (
    <>
      <div className="container-fluid">
        <Row className="backGrnd">
          <Navbar expand="lg" className="custom-navbar">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src={logo}
                  alt="ProChauffeurs Logo"
                  style={{ width: "160px" }}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text-white pb-4 text-sm-center">
                  <Nav.Link href="#about" className="text-white mx-3">
                    About
                  </Nav.Link>
                  <Nav.Link href="#services" className="text-white mx-3">
                    Services
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/footer"
                    className="text-white mx-3 me-4"
                  >
                    Contact Us
                  </Nav.Link>
                  {loginFormState.login_button ? (
                    <Button
                      className="bookbtn px-4 py-2"
                      onClick={handleLoginClick_1}
                    >
                      Log In
                    </Button>
                  ) : (
                    <Button
                      className="bookbtn px-4 py-2"
                      onClick={handleLoginClick_1_logOut}
                    >
                      Log Out
                    </Button>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Col className="d-flex justify-content-center align-items-center flex-column text-center mb-5 pb-5">
            <h1 className="Headtitle text-white">
              Your high-end <br />
              ProChauffeur service
            </h1>
            <p className="para fs-5 mt-3 text-white pb-3">
              Elevate your travel experience <br />
              with our transportation services
            </p>
            <Button
              className="bookbtn mt-3 px-5 py-3"
              onClick={handleBookNowClick}
            >
              BOOK NOW
            </Button>
          </Col>
        </Row>
      </div>

      <div className="container-fluid" id="about">
        <Row className="BkGrnd">
          <Col md={1}></Col>
          <Col md={10}>
            <Row>
              <h1 className="Htitle d-flex justify-content-center align-items-center mb-4">
                About
              </h1>
            </Row>
            <Row>
              <Col md={6} className="pb-5 mb-5 pe-5 smallscreen">
                <h2 className="Htitle">
                  Let us take the weight off your shoulders by planning your
                  ride—from start to end
                </h2>
              </Col>
              <Col md={6} className="ps-2 smallscreen">
                <Row className="fs-5 pb-4" style={{ fontWeight: "100" }}>
                  <p>
                    ProChauffeurs specializes in hassle-free, discrete, and
                    punctual transportation services to ensure that you arrive
                    prepared and rested.
                  </p>
                </Row>
                <Row>
                  <Col>
                    <h3 className="fs-4">Punctual</h3>
                    <p>
                      We are always on time. You can count on ProChauffeur when
                      it comes to your travel plans.
                    </p>
                  </Col>
                  <Col>
                    <h3 className="fs-4">Smooth</h3>
                    <p>
                      Our mission is to create peace of mind by doing what we do
                      best—organizing your travel.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="booktransfer d-flex justify-content-center align-items-center p-md-5">
              <Col md={6} className="text-center text-md-start ps-md-5">
                <p className="Htitle">
                  Book your elite transfer, <br /> in minutes
                </p>
              </Col>
              <Col md={6} className="text-center text-md-end pe-md-5">
                <Button
                  className="bookbtn px-5 py-3"
                  onClick={handleBookNowClick}
                >
                  BOOK NOW
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>

      <div className="container-fluid" id="services">
        <Services />
      </div>

      <div className="container-fluid">
        <Row className="BkGrnd3">
          <Col md={1}></Col>
          <Col md={10}>
            <Row>
              <h1 className="Htitle d-flex justify-content-center align-items-center mb-4">
                3 Reasons to book ProChauffeur for your ride
              </h1>
            </Row>
            <Row>
              <Reasons />
            </Row>
            <div className="d-flex justify-content-center align-items-center mt-5">
              <Button
                className="bookbtn mt-3 px-5 py-3"
                onClick={handleBookNowClick}
              >
                BOOK NOW
              </Button>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>

      <div className="container-fluid" id="contact">
        <Row className="BkGrnd2">
          <Col md={1}></Col>
          <Col md={10}>
            <Row>
              <h1 className="Htitle d-flex justify-content-center align-items-center mb-4 text-center">
                Don&apos;t believe us, <br />
                believe our clients
              </h1>
            </Row>
            <Row>
              <ClientRating />
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
      <ToastContainer position="top-center" theme="colored" autoclose={1000} />
    </>
  );
}

export default Home;
