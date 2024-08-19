import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

// This defines the initial state of the hirerDetails slice.
// Within the hirerDetails slice, there are multiple parts (or sub-states) representing different aspects of hirer-related data. These parts are loginFormState, bookingFormState, driverFormState, and hirerFormState.
// hirerDetails slice's state: This is the portion of the Redux store that is managed by the hirerDetails slice. It contains the loginFormState, bookingFormState, driverFormState, and hirerFormState as sub-states.
// loginFormState, bookingFormState, driverFormState, and hirerFormState:
  // These are individual pieces of state within the hirerDetails slice. Each of them represents a distinct part of the state that is managed within the hirerDetails slice.
  // These are specific states that are part of the overall state managed by the hirerDetails slice. They represent different aspects of the hirer-related data.
  // They are parts of the overall hirerDetails slice, which itself is a part of the global Redux state.
  // They are pieces of the application state managed by Redux. They represent different parts of the form data used across our application.
  // They are states that are part of the hirerDetails slice. They are states managed within the hirerDetails slice.
  // They are parts (or sub-states) of the overall hirerDetails slice. Each of these sub-states holds specific data relevant to different parts of our application
  // These states are nested within the hirerDetails slice's state and are managed by the reducers defined within the hirerDetails slice.
// initialState is an object containing four nested objects: loginFormState, bookingFormState, driverFormState, and hirerFormState.
// The state, driverFormState has a single property.
const initialState = {
  // Manages the state associated with the login form.
  loginFormState: {
    login_email: "",
    login_pswd: "",
    login_button: true,
  },

  // Manages the state associated with booking details.
  bookingFormState: {
    service_type: "",

    // Initialize pickup_date with Day.js object
    pickup_date: dayjs(),
    pickup_location: "",
    dropoff_location: "",
  },

  // Manages the state associated with driver information.
  driverFormState: {
    driver_name: "",
  },

  // Manages the state associated with hirer's details.
  hirerFormState: {
    passenger_name: "",
    email: "",
    mobile_number: "",
    car_make: "",
    car_model: "",
    reg_number: "",
  },
};

// This creates a Redux slice named "hirerDetails" with the specified initial state and reducers.
// name: The name of the slice, which is "hirerDetails".
// initialState: The initial state defined above.
// reducers: An object containing reducer functions that handle state updates.
// updateBookingFormState: Updates bookingFormState with the payload from the action, merging it with the existing state.
// resetBookingFormState: Resets bookingFormState to its initial state.
const hirerDetailsSlice = createSlice({

  // Name of the slice.
  // The name: "hirerDetails" in our Redux slice defines the name of the slice of the Redux state. The name property gives a unique identifier to this slice's state in the global Redux store. It ensures that actions are scoped correctly, preventing conflicts with other slices.
  //For example, by setting name: "hirerDetails", all the states managed within this slice (loginFormState, bookingFormState, etc.) are grouped under the hirerDetails key in the global state object.
  // In Redux, a slice is a portion of the Redux store that manages a specific part of the application's state.
  // A slice typically contains Initial State, Reducers, and Actions.
  // We have a slice called hirerDetails (managed in hirerDetailsSlice.js) which includes several states like loginFormState, bookingFormState, driverFormState, and hirerFormState.
  name: "hirerDetails",

  // Initial State: The default values for the part of the state that this slice manages.
  initialState,

  // Reducers: Functions that define how the state should be updated in response to actions.
  // A reducer is a function that takes the current state and an action as arguments and returns a new state. They define how state transitions happen in response to actions.
  // Reducers specify how the application's state changes in response to actions sent to the store.
  // In hirerDetailsSlice.js, the slice hirerDetailsSlice contains multiple reducers.
  reducers: {

    // updateLoginButtonState and updateLoginFormState: These reducers modify parts of the loginFormState state of the state.

    // This reducer is designed to update the login_button property in the loginFormState slice of our state.
    // state: Represents the current state of the hirerDetails slice, specifically the loginFormState part of that state. This represents the current state of the entire hirerDetails slice. When you define a reducer like updateLoginFormState, the state parameter inside that function represents the current state of the hirerDetails slice at the time the action is dispatched.
    // action: An object that contains the type of action and any additional data (called the payload). It contains the type of action and the payload, which is an object with one or more properties to update.
    updateLoginButtonState(state, action) {

      // state.loginFormState.login_button is directly modified by setting it equal to action.payload.
      // action.payload is the new value that we want to assign to login_button. This value is passed when the action is dispatched.
      state.loginFormState.login_button = action.payload;
    },

    // If login_button was initially true and you dispatch an action like this:
      // dispatch(updateLoginButtonState(false));
      // Then, action.payload would be false, and after the reducer runs, login_button would be updated to false in the state.

    // This reducer is responsible for updating multiple properties within the loginFormState state of the hirerDetails slice, depending on what is provided in action.payload.
    // updateLoginFormState: Updates one or more properties within loginFormState based on the object provided in the action's payload.
    updateLoginFormState(state, action) {

      // state.loginFormState is spread into a new object { ...state.loginFormState }, which copies all existing properties.
      // ...action.payload spreads the properties of the payload object into this new state, overriding any existing properties with the same name.
      state.loginFormState = { ...state.loginFormState, ...action.payload };
    },

    // Suppose loginFormState initially looks like this:
      /* {
        login_email: "user@example.com",
        login_pswd: "password123",
        login_button: true
      } */
    // And you dispatch an action like this:
      //dispatch(updateLoginFormState({ login_email: "newuser@example.com", login_pswd: "newpassword" }));
      // action.payload would be { login_email: "newuser@example.com", login_pswd: "newpassword" }.
    // The reducer would update login_email and login_pswd, while login_button would remain unchanged. After the reducer runs, loginFormState would look like this:
      /* {
        login_email: "newuser@example.com",
        login_pswd: "newpassword",
        login_button: true
      } */

    // The pickup_date field in the bookingFormState contains a date object that cannot be serialized by Redux. Redux expects all state values to be serializable for purposes like time-travel debugging and persistence. Date objects are inherently non-serializable because they include methods and internal properties that cannot be represented as plain JSON. When we attempt to store a date object directly in our Redux state, we encounter this issue.
    // We can address this issue by converting the date object to a serializable format before storing it in the Redux state, and converting it back to a date object when needed.

    // If it is a dayjs object, convert it to an ISO string representation
    /* if (dayjs.isDayjs(newState.pickup_date)) {
        newState.pickup_date = newState.pickup_date.toISOString();
      } */

    // This reducer function updates the bookingFormState in our Redux store with new values from action.payload, ensuring that any dayjs objects in the payload are converted to ISO strings before being stored. This approach maintains consistent data types and avoids potential issues with non-serializable values in Redux state.
    // updateBookingFormState: This reducer updates the bookingFormState, specifically ensuring that if pickup_date is provided and is a Day.js object, it is converted to an ISO string.
    updateBookingFormState(state, action) {

      // const newState = { ...state.bookingFormState, ...action.payload }; - Create a new state object for the bookingFormState by merging the current state with the new values from action.payload
      // The spread operator (...) is used to copy all properties from state.bookingFormState and action.payload into a new object. If there are properties with the same name in both objects, the values from action.payload will overwrite those from state.bookingFormState. This effectively combines the existing state with any updates from the action payload.
      const newState = { ...state.bookingFormState, ...action.payload };

      // Check if the 'pickup_date' in newState, exists in the payload and if it is a valid dayjs object (i.e., an instance of dayjs).
      if (
        action.payload.pickup_date &&
        dayjs.isDayjs(action.payload.pickup_date)
      ) {
        // Convert the dayjs object to an ISO string (i.e., a standardized ISO 8601 string format, which is a common format for storing date and time in strings.) and assigns it to the 'pickup_date' field in the newState object.
        newState.pickup_date = action.payload.pickup_date.toISOString();
      }

      // Update the bookingFormState property in the Redux state with the new state object. 'state.bookingFormState' is assigned the value of newState, effectively applying all the changes made in the newState to the Redux state. This replaces the previous bookingFormState with the updated state, including any changes from action.payload and the converted pickup_date.
      state.bookingFormState = newState;
    },
    updateDriverFormState(state, action) {
      state.driverFormState = { ...state.driverFormState, ...action.payload };
    },
    updateHirerFormState(state, action) {
      state.hirerFormState = { ...state.hirerFormState, ...action.payload };
    },
    updateHirerFormMobileNumberState(state, action) {

      // Extract the value from the action payload
      const value = action.payload;

      // Prepend "+91 " to the mobile number
      const processedValue = `+91 ${value}`;

      // Update the state with the processed value
      state.hirerFormState.mobile_number = processedValue;
    },
    resetLoginFormState(state) {
      state.loginFormState = initialState.loginFormState;
    },
    resetBookingFormState(state) {
      state.bookingFormState = initialState.bookingFormState;
    },
    resetDriverFormState(state) {
      state.driverFormState = initialState.driverFormState;
    },
    resetHirerFormState(state) {
      state.hirerFormState = initialState.hirerFormState;
    },
  },
});

// Actions: Payloads of information that send data from our application to the Redux store.
// This exports the action creators generated by createSlice().
// The createSlice function automatically generates action creators for each reducer function. Here, the action creators for updateBookingFormState, updateDriverFormState, updateHirerFormState,resetBookingFormState, resetDriverFormState and resetHirerFormState are exported.
// An action is a plain JavaScript object that has a type property. Actions are plain objects that describe an intention to change the state. Each action has a type and may include additional data (payload).
// Actions are dispatched to the store, and reducers listen for actions to determine how the state should change.
// An action creator is a function that returns an action. In Redux Toolkit, these are automatically generated by the createSlice function.
// Here, actions are generated by the createSlice function from Redux Toolkit:
export const {
  updateLoginButtonState,
  updateLoginFormState,
  updateBookingFormState,
  updateDriverFormState,
  updateHirerFormState,
  updateHirerFormMobileNumberState,
  resetLoginFormState,
  resetBookingFormState,
  resetDriverFormState,
  resetHirerFormState,
} = hirerDetailsSlice.actions;

// Each action corresponds to one of the reducers. For example:
// updateLoginFormState: An action created to update the loginFormState.
// resetBookingFormState: An action created to reset bookingFormState to its initial state.

// Action Creator
// Action creators are functions that return action objects. They are used to simplify the creation and dispatching of actions.
// This exports the reducer function generated by createSlice as the default export.
// The createSlice function returns an object containing the reducer, which is needed to configure the Redux store. The reducer handles the state transitions based on the actions dispatched.
export default hirerDetailsSlice.reducer;

// updateLoginButtonState is both an action and a reducer in the context of Redux Toolkit.
// As a reducer: It is a function defined within the reducers object inside the slice. This function specifies how the state should be updated when the corresponding action is dispatched.

/* updateLoginButtonState(state, action) {
    state.loginFormState.login_button = action.payload;
  } */

// As an action: When you define a reducer like updateLoginButtonState, Redux Toolkit automatically creates an action creator with the same name. This action creator, when called, returns an action object that can be dispatched to the store.

//export const { updateLoginButtonState } = hirerDetailsSlice.actions;

// When you call updateLoginButtonState(payload), it returns an action like:

/* {
    type: 'hirerDetails/updateLoginButtonState',
    payload: ... // The payload you pass in
  } */

// So, updateLoginButtonState refers to both the reducer function that updates the state and the action creator that generates the action object to trigger that state update.
