import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import ClientRating from "./components/ClientRating";
import DriverCard from "./components/DriverCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reasons from "./components/Reasons";
import Services from "./components/Services";
import BookRide from "./pages/BookRide";
import DriverList from "./pages/DriverList";
import HirerDetails from "./pages/HirerDetails";
import Home from "./pages/Home";
import Login from "./admin/Login";
import Register from "./admin/Register";
import Admin from "./admin/Admin";
import DriverSelected from "./components/DriverSelected";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reasons" element={<Reasons />} />
        <Route path="/clientrating" element={<ClientRating />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/bookride" element={<BookRide />} />
        <Route path="/driverlist" element={<DriverList />} />
        <Route path="/drivercard" element={<DriverCard />} />
        <Route path="/driverselected" element={<DriverSelected />} />
        <Route path="/hirerdetails" element={<HirerDetails />} />
      </Routes>
    </>
  );
}

export default App;
