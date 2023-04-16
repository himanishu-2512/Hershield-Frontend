import React from "react";
import Avatar from "@mui/material/Avatar";
import { Paper, Collapse, CardContent } from "@mui/material";

import styled from "styled-components";
import { Link } from "react-router-dom";


function RightBar() {
	const [checked, setChecked] = React.useState(false);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};
    
    const avatarStyle = {
        boxShadow: 5,cursor: "pointer",width: "70px", height: "70px" 
      };

	return (
		<StyledBoxOuter>
			<StyledBox>
				{!checked && <Avatar
					sx={avatarStyle}
					component={Link}
                    to="../SOS"
					src="/images/sos.png"
				/>}
			</StyledBox>
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
	width: 5%;
    margin: 1px;
	bottom: 30px;
	right: 30px;
	position: fixed;    

    @keyframes pulse {
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.25);
        }
        100%{
            transform: scale(1);
        }
    }
    animation: pulse 5s infinite;
`;

export default RightBar;
