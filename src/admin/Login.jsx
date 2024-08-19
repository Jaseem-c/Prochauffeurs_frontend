import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginImage from "../assets/favicon.jpeg";
import { resetLoginFormState, updateLoginButtonState, updateLoginFormState } from "../redux/slices/hirerDetailsSlice";
import { ADMIN_USER } from "./constants";

const Login = () => {
  // const [log_email_id, setLogUsername] = useState("");
  // const [log_password, setLogPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // The useSelector hook allows you to access the Redux store's state in a React component.
  // It takes a function as an argument, often referred to as a "selector" function, which defines which part of the state you want to extract.
  // (state) => state.hirerDetails.loginFormState - Selector Function
  // The loginFormState variable will hold the value of state.hirerDetails.loginFormState from the Redux store. This value can now be used within the component.
  const loginFormState = useSelector(

    // state refers to the entire Redux store state.
    // state.hirerDetails accesses the part of the state tree managed by the hirerDetails reducer.
    // state.hirerDetails.loginFormState further drills down to the loginFormState property within hirerDetails.
    (state) => state.hirerDetails.loginFormState
  );

  // The handleChange function handles form input changes.
  // handleChange is a function that gets triggered whenever an input field changes in a form (e.g., when a user types something in a text field).
  // handleChange handles changes in form input fields.
  // It extracts the name and value from the input field that triggered the change.
  // It dispatches an action to update the Redux store with the new input value, keeping the form state in sync with user interactions.
  
  const handleChange = (e) => {

    // e is the event object passed to the function when an input field changes.
    // e.target refers to the DOM element that triggered the event (the input field/TextField).
    // { name, value } uses object destructuring to extract the name and value properties from e.target.
    // name corresponds to the name attribute of the input element.
    // value corresponds to the current value of the input field.
    const { name, value } = e.target;

    // dispatch is a function provided by the Redux useDispatch hook, which allows you to send actions to the Redux store.
    // updateLoginFormState is an action creator function that creates an action to update the login form state in the Redux store.
    // { [name]: value } creates an object where the key is the value of "name" (e.g., username, password, etc.) and the "value" is the current value of that input field.
    // The square brackets [] around "name" are used to dynamically set the object key to the value of the "name" variable.
    // This ensures that the Redux store is always in sync with the form inputs, making it easier to manage form state across the application.
    dispatch(updateLoginFormState({ [name]: value }));
  };

  const handleLogin = () => {

    // The handleLogin function handles user login by validating credentials against stored users in localStorage.
    // It provides feedback through toast notifications and redirects users based on their role (admin or regular user).
    // The logged-in user's email is stored in localStorage for later use, and the Redux store is updated accordingly.

    // Retrieves a list of registered users from the browser's localStorage.
    // localStorage.getItem("users") fetches the stored users (if any) as a JSON string.
    // JSON.parse() converts this string back into a JavaScript array.
    // If there are no users in localStorage, it defaults to an empty array [].
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the matching user.
    // The find method is used to search through the users array for a user whose email and password match the values provided in the loginFormState.
    // loginFormState is an object in the Redux store that holds the current values of the login form inputs (e.g., login_email and login_pswd).
    const user = users.find(
      (user) =>
        // user.reg_email_id === log_email_id && user.reg_password === log_password
        user.reg_email_id === loginFormState.login_email &&
        user.reg_password === loginFormState.login_pswd
    );

    // Check for empty input fields.
    // This condition checks whether the email or password fields are empty.
    // If either field is empty, an informational toast notification is shown, reminding the user to complete the form.
    if (!loginFormState.login_email || !loginFormState.login_pswd) {
      toast.info("Please fill the form completely");
    } else {

      // If a matching user is found (user is truthy), or if the login credentials match a predefined admin user's credentials (ADMIN_USER), the following actions are taken:
        // The ADMIN_USER object contains hardcoded (embedding data directly into the source code of a program or other executable object.) admin credentials (email_id and password).
      if (
        user ||
        (loginFormState.login_email === ADMIN_USER.email_id &&
          loginFormState.login_pswd === ADMIN_USER.password)
      ) {

        // Store the logged-in user in Local Storage
        // const log_email_id = String(loginFormState.login_email); - It is converting the value of loginFormState.login_email to a string and storing it in the log_email_id constant.
        // loginFormState.login_email: This is the value extracted from the Redux store's loginFormState, specifically the email that the user has entered in the login form.
        // The String() function converts the value of loginFormState.login_email to a string type explicitly.
        // This ensures that the value stored in log_email_id is of type string, even if the original value was something else (e.g., null, undefined, or a number).
        // If login_email were null, undefined, or any other type, using it directly might cause unexpected behavior. Converting it to a string ensures consistent behavior.
        const log_email_id = String(loginFormState.login_email);

        // localStorage.setItem("currentUser", JSON.stringify({ log_email_id }));
        // The logged-in user's email is stored in localStorage under the key "currentUser".
        localStorage.setItem("currentUser", log_email_id);

        // The email is also logged to the console to confirm the current user.
        const show_currentUser = localStorage.getItem("currentUser");
        console.log("Current User: ", show_currentUser);

        // Handle Admin login.
        // If the logged-in user is the admin, a success toast notification is shown.
        // The navigate("/admin") function is used to redirect the user to the admin dashboard.
        if (log_email_id === ADMIN_USER.email_id) {
          toast.success("Administrator Login successful", {
            onClose: () => navigate("/admin"),
          });

          // resetLoginFormState() resets the login form state in the Redux store.
          dispatch(resetLoginFormState());

          // updateLoginButtonState(false) updates the state of the login button.
          dispatch(updateLoginButtonState(false));
        } else {

          // document.getElementById("outlined-basic-1").value = "";
          // Handle Regular user login
          // updateLoginButtonState(false) updates the state of the login button.
          dispatch(updateLoginButtonState(false));
          toast.success("Login successful", {

            // The user is redirected to the home page.
            // The login form state is passed along with the navigation, allowing the home page to access this state if needed.
            onClose: () => navigate("/", { state: { loginFormState } }),
          });
        }
      } else {

        // If no user is found with the provided credentials, an error toast notification is displayed.
        toast.error("Invalid credentials");
      }
    }
  };

  return (
    <>
      {/* <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={email_id}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button> */}

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
                      name="login_email"
                      value={loginFormState.login_email || ""}
                      // onChange={(e) => setLogUsername(e.target.value)}
                      onChange={handleChange}
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
                      value={loginFormState.login_pswd || ""}
                      // onChange={(e) => setLogPassword(e.target.value)}
                      onChange={handleChange}
                      className="w-100"
                      id="outlined-basic-2"
                      label="PASSWORD"
                      type="password"
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
                        onClick={handleLogin}
                        className="mb-3 w-100 rounded-0"
                        style={{ width: "150px" }}
                      >
                        Log In
                      </Button>
                      <p>
                        New User? Click Here to{" "}
                        <Link to={"/register"} className="text-warning">
                          Register
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

export default Login;
