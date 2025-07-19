import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Technician from "./pages/Technician";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyAppointment from "./pages/MyAppointment";
import Appointment from "./pages/Appointment";
import MyProfile from "./pages/MyProfile";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const App = () => {
	return (
		<div className="mx-4 sm:mx-[10%]">
      <Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/technician" element={<Technician />} />
        <Route path="/technician/:speciality" element={<Technician />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/appointment/:techId" element={<Appointment />} />

			</Routes>
      <Footer />
		</div>
	);
}

export default App;
