import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import LoginForm from "./Pages/LoginForm";
import ForgotPass from "./Pages/ForgotPass";
import Homepage from "./Pages/homepage";
import Profile from "./Pages/Profile";
import ChangePass from "./Pages/ChangePass";
import RegisterComplain from "./Pages/RegisterComplain";
import WitnessComplain from "./Pages/WitnessComplain";
import ViewRegisterComplain from "./Pages/ViewRegisterComplain";
import ViewWitnessComplain from "./Pages/ViewWitnessComplain";
import Resources from "./Pages/Resources";
import Helpline from "./Pages/Helpline";
import Community from "./Pages/Community";
import Admin1 from "./Pages/Admin1"
import Admin2 from "./Pages/Admin2"
import AdminLogin from "./Pages/AdminLogin"
import SOSData from './component/Admin/adminsos'
import Complains from './component/Admin/Usercomplain'
import SOS from './Pages/SOS'
import Adhaar from './Pages/Adhaar'
import EmailVerify from './Pages/EmailVerify'

function App() {
	//UserLogin
	const loggedIn = window.localStorage.getItem("isLoggedIn");
	const [user, setLoginUser] = useState({
		rNum: "",
		dob: "",
		pass: "",
	});
	console.log(user._id);

	return (
		<div className="App" sx={{ margin: 0 }}>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path="/"
						element={
							(user && user._id) || loggedIn ? (
								<Homepage setLoginUser={setLoginUser} />
							) : (
								<LoginForm setLoginUser={setLoginUser} />
							)
						}
					/>
					
					<Route path="/Home" element={<Homepage/>} />
					<Route path="/LoginForm" element={<LoginForm setLoginUser={setLoginUser} />} />
					<Route path="/Forgotpassword" element={<ForgotPass />} />
					<Route path="/Changepassword" element={<ChangePass />} />
					<Route path="/RegisterComplain" element={<RegisterComplain/>}/>
					<Route path="/WitnessComplain" element={<WitnessComplain/>}/>
					<Route path="/ViewRegisterComplain/:id" element={<ViewRegisterComplain/>}/>
					<Route path="/ViewWitnessComplain/:id" element={<ViewWitnessComplain/>}/>
					<Route path="/Resources" element={<Resources/>}/>
					<Route path="/Helpline" element={<Helpline/>}/>
					<Route path="/Community" element={<Community/>}/>
					<Route path="/Profile" element={<Profile />} />

					<Route path="/Complains" element={<Complains/>}/>
					<Route path="/AdminLogin" element={<AdminLogin/>} />
					<Route path="/Dashboard" element={<Admin1/>}/>

                    <Route path='/SOSData' element ={<SOSData/>}/>
					<Route path='/SOS' element ={<SOS/>}/>
					<Route path="/Adhaar" element={<Adhaar/>}/>
					<Route path='/verifyemail' element ={<EmailVerify/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
