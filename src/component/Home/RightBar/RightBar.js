import React from "react";
import Avatar from "@mui/material/Avatar";
import { Paper, Collapse, CardContent, Box } from "@mui/material";
import ChatBot from "./ChatBot";
import styled from "styled-components";


function RightBar() {
	const [checked, setChecked] = React.useState(false);
	const loggedIn = window.localStorage.getItem("isLoggedIn");
	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	return (
		<StyledBoxOuter>
			<Box sx={{display: "flex",
	justifyContent: "flex-end",
	width: "100%",
	bottom: loggedIn ? "130px" : "30px",
	right: "30px",
	position: "fixed"}}>
				{!checked && <Avatar
					style={{ cursor: "pointer",width: "70px", height: "70px" }}
					component={Paper}
					elevation={5}
					onClick={handleChange}
					src="/images/bot.png"
				/>}
				<Collapse in={checked} timeout={100} unmountOnExit sx={{maxWidth:"25%", maxHeight:"100vh"}}>
					<CardContent sx={{ paddingTop: "0" }}>
						<ChatBot onClick={value => setChecked(value)}/>
					</CardContent>
				</Collapse>
			</Box>
		</StyledBoxOuter>
	);
}

const StyledBoxOuter = styled.div`
	position: fixed;
	display: flex;
	align-items: left;
`;

const StyledBox = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	bottom: 130px;
	right: 30px;
	position: fixed;

`;

export default RightBar;
