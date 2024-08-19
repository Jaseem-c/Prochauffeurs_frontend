import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DriverCard from "../components/DriverCard";
import "../pages/DriverList.css";
import { getDetailsOfAllDriversApi } from "../services/pro_allApi";

function DriverList() {
  const navigate = useNavigate();

  const [allDrivers, setAllDrivers] = useState([]);
  const getAllDrivers = async () => {
    const result = await getDetailsOfAllDriversApi();
    // console.log(result);
    setAllDrivers(result.data);
  };
  console.log(allDrivers);

  useEffect(() => {
    getAllDrivers();
  }, []);

  const handleDriverClick = (driver) => {
    // Log the selected driver data.
    console.log("selectedDriver in DriverList.jsx: ", driver);

    // Navigate with the selected driver's data.
    // When a driver card is clicked, the navigate function passes the selectedDriver data as part of the state. This state will contain the details of the driver.
    // { state: { selectedDriver: driver } }: This is an object where the state key contains another object with a key selectedDriver that holds the value of the driver passed to the function. This effectively passes the driver data to the new route (/driverselected).
    navigate("/driverselected", { state: { selectedDriver: driver } });
  };

  const handleBackClick = () => {
    navigate("/hirerdetails");
  };
  return (
    <>
      <div className="driverlist px-3 px-md-5 py-5">
        <div className="container">
          <h1 className="text-light text-center  ">List Of Drivers</h1>
          <div className="row ">
            {allDrivers ? (
              allDrivers?.map((item) => (
                <div
                  key={item.id}
                  className="col-md-4 mt-5"
                  onClick={() => handleDriverClick(item)}
                >
                  {/* The onClick event handler is triggered when the div containing the DriverCard is clicked.
                The handleDriverClick function is called, with the item (the current driver object) passed as an argument. This allows the function to know which driver was clicked.
                When the user clicks on a DriverCard, the handleDriverClick function is executed, passing the specific item (driver) to it.
                When you call <DriverCard selected_driver={item} />, React internally creates an object props with a property "selected_driver" that contains the value "item".
                The DriverCard component is being rendered, with the item (the current driver object) passed as a prop called selected_driver.
                The DriverCard component can then use selected_driver to display the specific details of the driver (such as name, rating, etc.).
                The DriverCard component uses the selected_driver prop to render details specific to that driver.
                This setup allows us to render a grid of driver cards, where each card can be clicked to trigger further actions, such as navigating to a detailed driver page. */}
                  <DriverCard selected_driver={item} />
                </div>
              ))
            ) : (
              <p className="text-danger fs-5 mt-5">Nothing to display.</p>
            )}
          </div>
          <div className="mt-5 d-flex justify-content-center  ">
            <Button
              variant="light"
              onClick={handleBackClick}
              className="px-4 mb-5"
              style={{ backgroundColor: "white", width: "150px" }}
            >
              Back
            </Button>
            {/* <Button variant="light" className='px-4' style={{ backgroundColor: "white" }}>Next</Button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverList;
