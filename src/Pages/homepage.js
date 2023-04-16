import { Box, createTheme, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Recents from "../component/Home/Recents";
import RightBar from "../component/Home/RightBar/RightBar";
import Feed from "../component/Home/Feeds/Home";
import Header from "../component/Home/Header";
import Share from "../component/Home/share";
import SOS from "../component/Home/SOS"

const Homepage = ({ setLoginUser }) => {
	
	const loggedIn = window.localStorage.getItem("isLoggedIn");
	const [mode, setMode] = useState("light");

	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 900,
				lg: 1200,
				big: 1400,
				xl: 1536,
			},
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<div className="homepage">
				<Box bgcolor={"background.default"} color={"text.primary"} height={"100%"}>
					<Header setLoginUser={setLoginUser} setMode={setMode} mode={mode} />
					<Feed/>
					<div style={{display:'flex', justifyContent:'space-between'}}>
					<div style={{ display: "flex", }}>

							<RightBar sx={{width: '25%'}}/>
					</div>
					<div style={{ display: "flex" }}>

						{loggedIn&&<SOS sx={{width: '100px'}}/>}
					</div>
					</div>
				</Box>
			</div>
		</ThemeProvider>
	);
};

export default Homepage;
