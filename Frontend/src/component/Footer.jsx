import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
	return (
		<div className="md:mx-10">
			<div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
				{/* ------ LEFT SIDE ------- */}
				<div>
					<img className="mb-5 w-40" src={assets.logo} alt="" />
					<p className="w-full md:w-2/3 text-gray-600 leading-6">
						Connecting you with trusted local technicians for all your home, computer, and vehicle repair needs.
       
					</p>
				</div>

				{/* -----Center------ */}
				<div>
					<p className="font-medium text-xl mb-5">COMPANY</p>
					<ul className="flex flex-col gap-2 text-gray-600">
						<li>Home</li>
						<li>Contact Us</li>
						<li>About us</li>
						<li>Privacy Policy</li>
					</ul>
				</div>

				{/* ------ RIGHT SIDE------- */}
				<div>
					<p className="font-medium text-xl mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-2 text-gray-600">

					<li> +123456789</li>
					<li> info@company.com</li>
                    </ul>
				</div>
			</div>
			<div>
				<hr />
				<p className="py-5 text-sm text-center "> © 2025 TechnoFinder. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
