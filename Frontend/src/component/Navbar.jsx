import React, {useState} from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {

	const navigate = useNavigate();

	const [showMenu, setShowMenu] = useState(true);
	const [token, setToken] = useState(true);
	console.log(token);
	

	return (
		<div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
			<img onClick={() => navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="" />
			<ul className="hidden md:flex items-center gap-8 font-semibold">
			<NavLink to="/">
					<li className="py-1">HOME</li>
					<hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto  hidden" />
				</NavLink>
				<NavLink to="/technician">
					<li className="py-1">TECHNICIAN</li>
					<hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto  hidden" />
				</NavLink>
				<NavLink to="/about">
					<li className="py-1">ABOUT</li>
					<hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto  hidden" />
				</NavLink>
				<NavLink to="/contact">
					<li className="py-1">CONTACT</li>
					<hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto  hidden" />
				</NavLink>
			</ul>
			<div className="flex items-center gap-4">
				{
					token 
				? (<div className="flex items-center gap-2 cursor-pointer group relative ">
					<img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
					<img className="w-2.5" src={assets.dropdown_icon} alt="" />
					<div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block ">
						<div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
							<p className="hover:text-black cursor-pointer " onClick={()=> navigate('my-profile')}>My Profile</p>
							<p className="hover:text-black cursor-pointer " onClick={()=> navigate('my-appointment')}>My Appointment</p>
							<p className="hover:text-black cursor-pointer " onClick={()=> setToken(false)}>Logout</p>
						</div>
					</div>
				</div>)
				:(<button onClick={() => navigate('/login')} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">Create Account</button>)
				}
				
			<img onClick={()=> setShowMenu(true)} className="w-6 md:hidden " src={assets.menu_icon} alt="" />

			{/* Mobile Menu */}

			<div className={`md:hidden top-0 right-0 bottom-0 z-20 overflow-hidden bg-white transition-all ${showMenu ? "fixed w-full " : "h-0 w-0"}`}>
				<div className="flex items-center justify-between px-5 py-6 ">
					<img className="w-36" src={assets.logo} alt="" />
					<img className="w-7" onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
				</div>
				<ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium ">
					<NavLink onClick={()=> setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>HOME</p></NavLink>
					<NavLink onClick={()=> setShowMenu(false)} to='/technician'><p className='px-4 py-2 rounded full inline-block'>Technician</p></NavLink>
					<NavLink onClick={()=> setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded full inline-block'>About </p></NavLink>
					<NavLink onClick={()=> setShowMenu(false)} to='/contact'>Contact</NavLink>
				</ul>
			</div>
				
			</div>
		</div>
	);
};

export default Navbar;
