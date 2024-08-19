import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/favicon.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [reg_username, setRegUsername] = useState("");
  const [reg_email_id, setRegEmailId] = useState("");
  const [reg_password, setRegPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {

    // This function first retrieves any existing users from local storage. It then adds the new user's details to this list and saves it back to local storage. Finally, it shows a success message and redirects the user to the login page.
    
    // localStorage.getItem("users") retrieves the users item from local storage, which is stored as a JSON string.
    // JSON.parse(...) converts the JSON string back into a JavaScript array of user objects.
    // If there are no users stored in local storage, localStorage.getItem("users") returns null, so the fallback (|| []) ensures users is initialized as an empty array.
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Adds a new user object to the users array, containing the values reg_username, reg_email_id, and reg_password. These variables hold the registration information entered by the user.
    users.push({ reg_username, reg_email_id, reg_password });

    // JSON.stringify(users) converts the updated users array back into a JSON string.
    // localStorage.setItem("users", ...) stores this JSON string in local storage under the key users, overwriting any previous value.
    localStorage.setItem("users", JSON.stringify(users));

    // toast.success(...) displays a success message to the user, notifying them that the registration was successful.
    // The onClose callback inside the toast is executed when the toast is closed, which triggers navigate("/login") to redirect the user to the login page.
    toast.success("Registration successful", {
      onClose: () => navigate("/login"),
    });
  };

  return (
    <>
      {/* <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button> */}

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="container w-75">
          <Link
            to={"/"}
            className="text-warning"
            style={{ textDecoration: "none" }}
            onClick={() => localStorage.removeItem("currentUser")}
          >
            <h4 className="text-light">
              <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
              Back Home
            </h4>
          </Link>
          <div className="bg-dark p-3 border border-light">
            <Row>
              <Col
                md={6}
                className="p-4 d-flex justify-content-center align-items-center"
              >
                <img src={loginImage} alt="" width={"80%"} />
              </Col>
              <Col
                md={6}
                className="p-5 d-flex justify-content-center text-light"
              >
                <form className="w-100">
                  <h3 className="text-center text-light mb-4">ProChauffeurs</h3>
                  <h5 className="text-center my-3">Sign In to Your Account</h5>

                  <div className="mt-4 mb-3">
                    {/* <input
                      type="text"
                      placeholder="Email ID"
                      className="form-control rounded-0"
                    /> */}
                    <TextField
                      name="register_username"
                      // value={loginState.email || ""}
                      onChange={(e) => setRegUsername(e.target.value)}
                      className="w-100"
                      id="outlined-basic-3"
                      label="USERNAME"
                      variant="outlined"
                      sx={{
                        // Root class for the input field
                        "& .MuiOutlinedInput-root": {
                          color: "#ffffff",
                          fontFamily: "Arial",
                          fontWeight: "bold",
                          height: "60px",
                          alignItems: "center",
                          paddingLeft: "5px",
                          // Class for the border around the input field
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#000000",
                            borderWidth: "1px",
                          },
                          // Change border color when focused
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ffffff",
                          },
                        },
                        // Class for the label of the input field
                        "& .MuiInputLabel-outlined": {
                          color: "white",
                          fontSize: "16px",
                        },
                        // Change label color when focused
                        "& .MuiInputLabel-outlined.Mui-focused": {
                          color: "white",
                        },
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    {/* <input
                      type="text"
                      placeholder="Email ID"
                      className="form-control rounded-0"
                    /> */}
                    <TextField
                      name="login_email"
                      // value={loginState.email || ""}
                      onChange={(e) => setRegEmailId(e.target.value)}
                      className="w-100"
                      id="outlined-basic-1"
                      label="EMAIL ID"
                      variant="outlined"
                      sx={{
                        // Root class for the input field
                        "& .MuiOutlinedInput-root": {
                          color: "#ffffff",
                          fontFamily: "Arial",
                          fontWeight: "bold",
                          height: "60px",
                          alignItems: "center",
                          paddingLeft: "5px",
                          // Class for the border around the input field
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#000000",
                            borderWidth: "1px",
                          },
                          // Change border color when focused
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ffffff",
                          },
                        },
                        // Class for the label of the input field
                        "& .MuiInputLabel-outlined": {
                          color: "white",
                          fontSize: "16px",
                        },
                        // Change label color when focused
                        "& .MuiInputLabel-outlined.Mui-focused": {
                          color: "white",
                        },
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    {/* <input
                      type="text"
                      placeholder="Password"
                      className="form-control rounded-0"
                    /> */}
                    <TextField
                      name="login_pswd"
                      // value={loginState.pswd || ""}
                      onChange={(e) => setRegPassword(e.target.value)}
                      className="w-100"
                      type="password"
                      id="outlined-basic-2"
                      label="PASSWORD"
                      variant="outlined"
                      sx={{
                        // Root class for the input field
                        "& .MuiOutlinedInput-root": {
                          color: "#ffffff",
                          fontFamily: "Arial",
                          fontWeight: "bold",
                          height: "60px",
                          alignItems: "center",
                          paddingLeft: "5px",
                          // Class for the border around the input field
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#000000",
                            borderWidth: "1px",
                          },
                          // Change border color when focused
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ffffff",
                          },
                        },
                        // Class for the label of the input field
                        "& .MuiInputLabel-outlined": {
                          color: "white",
                          fontSize: "16px",
                        },
                        // Change label color when focused
                        "& .MuiInputLabel-outlined.Mui-focused": {
                          color: "white",
                        },
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <div>
                      {/* <button className="btn btn-warning w-100 rounded-0">
                        Login
                      </button> */}
                      <Button
                        variant="light"
                        size="lg"
                        onClick={handleRegister}
                        className="mb-3 w-100 rounded-0"
                        style={{ width: "150px" }}
                      >
                        Register
                      </Button>
                      <p>
                        Already a User? Click Here to{" "}
                        <Link to={"/login"} className="text-warning">
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored" autoclose={1000} />
    </>
  );
};

export default Register;
