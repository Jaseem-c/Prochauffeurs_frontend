import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { updateHirerFormState, updateHirerFormMobileNumberState } from "../redux/slices/hirerDetailsSlice";
import "./HirerDetails.css";

function HirerDetails() {
  // State Initialization
  const [hireFormState, setHireFormState] = useState({
    is_passenger_name: true,
    is_car_make: true,
    is_car_model: true,
    is_mobile_number: true,
    is_reg_number: true,
    is_email: true,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hirerFormState = useSelector(
    (state) => state.hirerDetails.hirerFormState
  );

  const handleBackClick = () => {
    navigate("/");
  };

  // handleChange Function: This function updates the state based on the name and value parameters. The name parameter is the key in the hireFormState that we want to update, and the value is what we want to set it to.

  /* const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }; */

  /*  setHireFormState((prevState) => ({
    // Copy all the existing state properties
    ...prevState,

    // Update the specific property
    is_passenger_name: false,
  })); */

  // When you use ...prevState in the context of updating state in React, it is typically used to preserve the existing state values while updating or adding new values.
  // ...prevState ensures that all previous state properties are included in the new state object.
  // [name]: value updates or adds the property corresponding to name with the new value.
  const handleChange = (name, value) => {
    setHireFormState((prevState) => ({
      // Copy all the existing state properties
      ...prevState,

      // Update the specific property
      // The name parameter is used as a dynamic key to update the corresponding property in the state. This is possible due to the square bracket notation [name], which allows you to dynamically update the state key based on the value of name.
      [name]: value,
    }));
  };

  const validateData = (e) => {
    const { name, value } = e.target;

    if (name === "car_make" || name === "car_model" || name === "reg_number") {

      // Convert the value to uppercase
      const upperCaseValue = value.toUpperCase();
      dispatch(updateHirerFormState({ [name]: upperCaseValue }));
    } 
    else {
      dispatch(updateHirerFormState({ [name]: value }));
    }

    if (name === "passenger_name") {
      if (value === "") {
        // If the input is empty, reset the validation to true
        handleChange("is_passenger_name", true);
      } else if (!/^[A-Za-z]+$/.test(value)) {
        // If the input contains invalid characters, set validation to false
        handleChange("is_passenger_name", false);
      } else {
        // If the input is valid, set validation to true
        handleChange("is_passenger_name", true);
      }
    } else if (name === "car_make") {
      if (value === "") {
        // If the input is empty, reset the validation to true
        handleChange("is_car_make", true);
      } else if (!/^[A-Za-z]+$/.test(value)) {
        // If the input contains invalid characters, set validation to false
        handleChange("is_car_make", false);
      } else {
        // If the input is valid, set validation to true
        handleChange("is_car_make", true);
      }
    } else if (name === "car_model") {
      if (value === "") {
        // If the input is empty, reset the validation to true
        handleChange("is_car_model", true);
      } else if (!/^[A-Za-z]+$/.test(value)) {
        // If the input contains invalid characters, set validation to false
        handleChange("is_car_model", false);
      } else {
        // If the input is valid, set validation to true
        handleChange("is_car_model", true);
      }
    } else if (name === "mobile_number") {
      // Regular Expression: /^[0-9]*$/
      // ^: Asserts the position at the start of the string.
      // [0-9]*: Matches zero or more (*) digits (0-9). This means the value can be any combination of digits or an empty string.
      // $: Asserts the position at the end of the string.
      // test(): A method of the Regular Expression (RegExp) object that tests if a string (value) matches the regular expression. If the value contains only digits (or is empty), .test(value) returns true. If there are any non-numeric characters, it returns false.
      //isValid = /^[0-9]*$/.test(value);
      // *: Quantifier that matches zero or more occurrences of the preceding element.
      // +: Quantifier that matches one or more occurrences of the preceding element.
      // /^[0-9]*$/: Matches any string that consists entirely of digits or is empty.
      // /^\d+$/: Matches any string that consists entirely of one or more digits and does not allow an empty string.
      if (value === "") {
        // If the input is empty, reset the validation to true
        handleChange("is_mobile_number", true);
      } else if (!/^\d+$/.test(value)) {
        // If the input contains invalid characters, set validation to false
        handleChange("is_mobile_number", false);
      } else {
        // If the input is valid, set validation to true
        handleChange("is_mobile_number", true);
      }
    } else if (name === "reg_number") {
      if (value === "") {
        // If the input is empty, reset the validation to true
        handleChange("is_reg_number", true);
      } else if (!/^[A-Za-z0-9]+$/.test(value)) {
        // If the input contains invalid characters, set validation to false
        handleChange("is_reg_number", false);
      } else {
        // If the input is valid, set validation to true
        handleChange("is_reg_number", true);
      }
    } else if (name === "email") {
      // Regular expression to check for a valid email format
      // john@gmail.com
      // ^: This asserts the start of the string. Ensures that the match begins right from the start of the input, with no preceding characters.
      // [^\s@]+
      // [ and ]: Defines a character class, which matches any one of the characters contained within it.
      // \s: Matches any whitespace character (like spaces, tabs, etc.).
      // @: Matches the "@" character specifically.
      // ^ inside [ and ]: When used inside a character class, it negates the class, meaning it matches any character except those specified.
      // [^\s@]]+: It matches a sequence of one or more characters that are not whitespace and not the "@" symbol.
      // + symbol: It is a quantifier that specifies that the preceding element must appear one or more times. This means that the pattern before the + must occur at least once but can repeat any number of times, including indefinitely.
      // E.g., john
      // @: Matches the "@" character specifically.
      // [^\s@]+ (again): Matches one or more characters after the "@" symbol that are not whitespace and not "@".
      // E.g., gmail
      // \.: Matches a literal period '.' Ensures that there's a period in the domain part of the email, which is standard in most email formats (like example.com).
      // [^\s@]+ (again): Matches one or more characters after the period, which typically represents the top-level domain (like com, org, etc.).
      // E.g., com
      // $: Asserts the end of the string. Ensures that the match extends to the end of the input, with no trailing characters.
      // This pattern is designed to catch most common email formats, ensuring that the input looks like a valid email address (e.g., user@example.com). However, it may not catch every edge case or allow every valid email according to the full specification.
      // When a user types just a single letter or number, it fails the emailPattern.test(value) check because it's not yet a valid email address. So, proper validation happens only after typing the entire email address.
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (value === "") {
        // If the input is empty, reset the validation to true
        handleChange("is_email", true);
      } else if (!emailPattern.test(value)) {
        // If the input is not a valid email, set validation to false
        handleChange("is_email", false);
      } else {
        // If the input is a valid email, set validation to true
        handleChange("is_email", true);
      }
    }
  };

  /*  const handleChange = (e) => {
    // const { name, value } = e.target;
    validate(e);
    // dispatch(updateHirerFormState({ [name]: value }));
  }; */

  // The handleSubmit function is used to handle form submission.
  // It prevents the default form submission behavior.
  // It validates that all required fields are filled.
  // It navigates to a different route if the form is valid, passing form data as state.
  // It handles and displays errors if anything goes wrong during the submission process.
  // handleSubmit takes an event object e as its argument.
  const handleSubmit = (e) => {
    // Prevents the default behavior of the form submission event. Normally, submitting a form would cause a page reload, but this method prevents that from happening.
    e.preventDefault();
    if (
      !hirerFormState.passenger_name ||
      !hirerFormState.email ||
      !hirerFormState.mobile_number ||
      !hirerFormState.car_make ||
      !hirerFormState.car_model ||
      !hirerFormState.reg_number
    ) {
      toast.info("Please fill the form completely.");
    } else {
      try {
        // try { ... } catch (error) { ... }

        dispatch(updateHirerFormMobileNumberState(hirerFormState.mobile_number));
        
        // The try block attempts to navigate to the /driverlist route, passing the hirerFormState as state. If navigation fails, the catch block catches the error and handles it.
        // Uses the navigate function to redirect the user to the /driverlist page. The hirerFormState is passed as state, which allows the DriverList component to receive the form data.
        navigate("/driverlist", { state: { hirerFormState } });
      } catch (error) {
        // Logs an error message to the console if something goes wrong. This is useful for debugging.
        console.error("Failed to save booking details:", error);

        // Displays an error message to the user if something goes wrong during the process. toast.error is used for error notifications.
        toast.error("Failed to save booking details. Please try again.");
      }
    }
  };

  return (
    <>
      <div id="hirer_details" className="container-fluid w-100">
        <Header />
        <div className="row">
          <div className="col-sm-0 col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
          <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10 d-flex flex-column justify-content-start align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center border border-light cp">
              <h4 className="text-center my-5">Hirer Details</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group my-4">
                  <TextField
                    name="passenger_name"
                    value={hirerFormState.passenger_name || ""}
                    onChange={(e) => validateData(e)}
                    className="w-100"
                    id="outlined-basic-1"
                    label="PASSENGER NAME"
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
                        // Apply text-transform to the input element
                        "& input": {
                          textTransform: "uppercase",
                        },
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
                  {hireFormState.is_passenger_name == false && (
                    <p className="text-danger fw-bold fs-5 me-auto">
                      *Invalid Input
                    </p>
                  )}
                </div>
                <div className="form-group my-4">
                  <TextField
                    name="email"
                    value={hirerFormState.email || ""}
                    onChange={(e) => validateData(e)}
                    className="w-100"
                    id="outlined-basic-2"
                    label="EMAIL"
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
                  {hireFormState.is_email == false && (
                    <p className="text-danger fw-bold fs-5 me-auto">
                      *Invalid Input
                    </p>
                  )}
                </div>
                <div className="form-group my-4">
                  <TextField
                    name="mobile_number"
                    value={hirerFormState.mobile_number || ""}
                    onChange={(e) => validateData(e)}
                    className="w-100"
                    id="outlined-basic-3"
                    label="MOBILE NUMBER"
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
                  {hireFormState.is_mobile_number == false && (
                    <p className="text-danger fw-bold fs-5 me-auto">
                      *Invalid Input
                    </p>
                  )}
                </div>
                <div className="form-group my-4">
                  <TextField
                    name="car_make"
                    value={hirerFormState.car_make || ""}
                    onChange={(e) => validateData(e)}
                    className="w-100"
                    id="outlined-basic-4"
                    label="CAR'S MAKE"
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
                        // Apply text-transform to the input element
                        "& input": {
                          textTransform: "uppercase",
                        },
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
                  {hireFormState.is_car_make == false && (
                    <p className="text-danger fw-bold fs-5 me-auto">
                      *Invalid Input
                    </p>
                  )}
                </div>
                <div className="form-group my-4">
                  <TextField
                    name="car_model"
                    value={hirerFormState.car_model || ""}
                    onChange={(e) => validateData(e)}
                    className="w-100"
                    id="outlined-basic-5"
                    label="CAR'S MODEL"
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
                        // Apply text-transform to the input element
                        "& input": {
                          textTransform: "uppercase",
                        },
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
                  {hireFormState.is_car_model == false && (
                    <p className="text-danger fw-bold fs-5 me-auto">
                      *Invalid Input
                    </p>
                  )}
                </div>
                <div className="form-group my-4">
                  <TextField
                    name="reg_number"
                    value={hirerFormState.reg_number || ""}
                    onChange={(e) => validateData(e)}
                    className="w-100"
                    id="outlined-basic-6"
                    label="CAR'S REGISTRATION NUMBER"
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
                        // Apply text-transform to the input element
                        "& input": {
                          textTransform: "uppercase",
                        },
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
                  {hireFormState.is_reg_number == false && (
                    <p className="text-danger fw-bold fs-5 me-auto">
                      *Invalid Input
                    </p>
                  )}
                </div>
                {/* <div className="form-group ps-2 pe-2 my-4 d-flex justify-content-center align-items-center">
                  <div className="me-2">
                    <Form.Select
                      name="car_type"
                      value={hirerFormState.car_type || ""}
                      onChange={handleChange}
                      aria-label="Select car type"
                      className="custom-form-select"
                    >
                      <option>CAR TYPE</option>
                      <option value="convertible">CONVERTIBLE</option>
                      <option value="hatchback">HATCHBACK</option>
                      <option value="sedan">SEDAN</option>
                      <option value="suv">SUV</option>
                      <option value="truck">TRUCK</option>
                    </Form.Select>
                  </div>
                  <div className="ms-2">
                  </div>
                </div> */}
                <div className="form-group ps-2 pe-2 my-5 d-flex flex-wrap justify-content-center align-items-center">
                  <Button
                    onClick={handleBackClick}
                    variant="light"
                    size="lg"
                    className="mb-5 back"
                  >
                    Back
                  </Button>
                  <Button
                    variant="light"
                    size="lg"
                    className="mb-5 book"
                    type="submit"
                  >
                    Next
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-0 col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
        </div>
        <Footer />
      </div>
      <ToastContainer position="top-center" theme="colored" autoclose={1000} />
    </>
  );
}

export default HirerDetails;
