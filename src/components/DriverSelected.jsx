import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "../components/DriverSelected.css";
import { updateDriverFormState } from "../redux/slices/hirerDetailsSlice";
import { getDetailsOfADriverApi } from "../services/pro_allApi";

function DriverSelected() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Using the useSelector hook from react-redux to access a specific piece of state from the Redux store.
  // The useSelector hook is a way to access specific pieces of state from the Redux store in a functional component, ensuring that your component has the data it needs and re-renders when that data changes.
  // It allows us to extract data from the Redux store state.
  // state Parameter: This is the entire Redux state object. It represents the complete state tree of the Redux store.
  const hirerFormState = useSelector(
    (state) => state.hirerDetails.hirerFormState
  );
  const driverFormState = useSelector(
    (state) => state.hirerDetails.driverFormState
  );

  // Use useLocation from react-router-dom to access the state passed through navigation.
  const location = useLocation();

  // Access driver details from navigation state
  // Using optional chaining to safely access a nested property within location.state
  // location.state holds the state object that was passed to the current route or page. It is often used to pass data between pages or routes in a React application.
  // Optional Chaining (?.): Optional chaining is used to safely access deeply nested properties without having to explicitly check for the existence of each level of the hierarchy.
  // If location.state is null or undefined, the expression location.state?.selectedDriver will evaluate to undefined without throwing an error.
  // We are trying to safely retrieve a property from the route state, without risking runtime errors if the state is not present. This is common in React Router when navigating between components and passing state through the location object.
  // It is a concise and safe way to access a potentially nested property within location.state. It prevents errors that would occur if location.state is null or undefined, making your code more robust and reliable.
  const selectedDriver = location.state?.selectedDriver;

  const [aDriver, setADriver] = useState([]);
  const getADriver = async (id) => {
    const result = await getDetailsOfADriverApi(id);
    console.log(result);
    setADriver(result.data);
  };
  console.log(aDriver);

  useEffect(() => {
    getADriver(selectedDriver?.id);
  }, []);

  // The renderStars function is designed to generate an array of star icons representing a rating, where some stars are filled and some are unfilled based on the given rating.
  // This function takes a rating parameter and returns an array of star icons (FontAwesomeIcon components) representing that rating.
  const renderStars = (rating) => {

    // Defines the total number of stars to display, typically used for a 5-star rating system.
    const totalStars = 5;

    // Array(rating): Creates an array with a length equal to the rating value. For instance, if rating is 5, it creates an array with 5 elements.
    // .fill(): Fills the array with undefined values, which are then used by .map() to generate the star components.
    // .map((_, i) => ...): Iterates over the array to create star components.
    // _: Represents the currentValue parameter, but it is not used in the function. It's a common convention to use _ for unused parameters.
    // i: Represents the index parameter, which is used in the function. It refers to the index of the current element in the array.
    // <FontAwesomeIcon key={filled-${i}} icon={faStar} style={{ color: "#FFD43B" }} />: Creates a FontAwesomeIcon component with the star icon (faStar) and a yellow color (#FFD43B) to represent filled stars.
    // key={filled-${i}}: Provides a unique key for each star element for efficient rendering by React.
    const filledStars = Array(rating)
      .fill()
      .map((_, i) => (
        <FontAwesomeIcon
          key={`filled-${i}`}
          icon={faStar}
          style={{ color: "#FFD43B" }}
        />
      ));
    console.log(`filledStars: ${filledStars.length}`);

    // Generating unfilled stars
    // Array(totalStars - rating): Creates an array with a length equal to the difference between the total number of stars and the rating. For example, if rating is 3 and totalStars is 5, it creates an array with 2 elements.
    const unfilledStars = Array(totalStars - rating)
      .fill()
      .map((_, i) => (
        <FontAwesomeIcon
          key={`unfilled-${i}`}
          icon={faStar}
          style={{ color: "white" }}
        />
      ));
    console.log(`unfilledStars: ${unfilledStars.length}`);

    //[...filledStars, ...unfilledStars]: Combines the arrays of filled and unfilled stars into a single array. The spread operator ... is used to concatenate the two arrays.
    return [...filledStars, ...unfilledStars];
  };

  const handleSelectDriverClick = () => {

    // dispatch is a method provided by the Redux useDispatch hook, which allows you to send actions to the Redux store.
    // updateDriverFormState is an action creator that is imported from your Redux slice, hirerDetailsSlice.js. It creates an action to update the state related to the driver form in the Redux store.
    // { selectedDriver } is the payload of the action. It includes the selectedDriver object, which  contains information about the driver that was selected. 
    dispatch(updateDriverFormState({ driver_name: selectedDriver?.DriverName }));

    // navigate is a function provided by the useNavigate hook from react-router-dom. It allows you to programmatically navigate to different routes in your application.
    // The state object passed to navigate contains hirerFormState and driverFormState, which will be available in the location.state of the "/bookride" route.
    // { state: { hirerFormState, driverFormState } } is an object containing the state that I want to pass to the new route. The state property will be available in the location object of the target route (/bookride).
    navigate("/bookride", { state: { hirerFormState, driverFormState } });
  };

  return (
    <>
      <Card
        style={{ width: "100%", backgroundColor: "black" }}
        className="mt-3  p-4 rounded-4 card"
      >
        <div className="d-flex  align-items-center">
          <img
            src={`${selectedDriver?.Profile}`}
            alt=""
            width={130}
            style={{ borderRadius: "50%" }}
          />
          <div className="ms-3">
            <h5 className="text-white">Name: {selectedDriver?.DriverName}</h5>
            <h6 className="text-white">
              License : {selectedDriver?.DriverLicense}
            </h6>
            <h6 className="text-white">
              Experience : {selectedDriver?.Experience}
            </h6>
            <div className="d-flex justify-content-between mt-3">
              {renderStars(selectedDriver?.DriverRating)}
              {/* <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "white" }} /> */}
            </div>
          </div>
        </div>
        <Card.Body>
          <Card.Text
            className="text-light mt-3"
            style={{ textAlign: "justify" }}
          >
            {selectedDriver?.About}
          </Card.Text>
          <div className="d-flex align-items-center justify-content-center mt-4 px-4">
            {/* <Button
              onClick={handleBackClick}
              variant="light"
              className="px-4 me-5"
              style={{ backgroundColor: "white", width: "150px" }}
            >
              Back
            </Button> */}
            <Button
              onClick={handleSelectDriverClick}
              variant="light"
              className="px-4"
              style={{ backgroundColor: "white", width: "150px" }}
            >
              Select Driver
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default DriverSelected;
