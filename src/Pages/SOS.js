import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { MuiOtpInput } from 'mui-one-time-password-input'
import axios from "axios";
function SOS() {

const user = JSON.parse(window.localStorage.getItem('user'))
    const [otp, setOtp] = React.useState('')

    const handleChange = (newValue) => {
      setOtp(newValue)
    }
    


    const handleChang= async ()=>{

        await axios.post("https://hershield-backend-production.up.railway.app/api/auth/sos", sos).then((res) => {
  })
}



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius:'10px',
        boxShadow: 24,
        p: 4,
      };

    const [hide, setHide] = useState('false');
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    const [lat, setLat]= useState('');
    const [lan, setLan] =useState('');
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) =>{
            setLat(position.coords.latitude);
            setLan(position.coords.longitude);
        })
        console.log(lat,lan);
    },[])
    const [sos, setsos] = useState({
		userId:`${user._id}`,
		latitude:`${lat}` ,
        longitude:`${lan}`
	});
    handleChang();
  return (
    <Box>
        {hide &&
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
        <Containers>
        
            <img src='images/notifications.svg' width='50vw' height="50vw"/>
        </Containers>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
            <Typography variant="h6" color="red" margin="10px" >
                <strong>SOS IS ACTIVATED</strong>
            </Typography>
            <Typography margin="10px" >
                Functioning under High SOS Mode
            </Typography>
            <Typography margin="0px 10px 30px 10px" >
                Your Circles are notified, Nearby help centers are coming to rescue you.
            </Typography>
            <Box margin="0px 10px 30px 10px">
            <Button onClick={handleOpen} variant="contained" size="medium" style={{ borderRadius: '20px' }} color="error">False SOS</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                <Typography  variant="h6" >
                    Enter Your SOS Pin:
                </Typography>

                <MuiOtpInput length={6} margin="40px" display="flex" value={otp} onChange={handleChange} />

                <Button> Done</Button>
                </Box>
                </Box>
            </Modal>
            </Box>
            <Box margin="0px 10px 30px 10px">
            <Button onClick={handleOpen} variant="contained" size="medium" style={{ borderRadius: '20px' }} color="success">I am Safe</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                <Typography  variant="h6" >
                    Enter Your SOS Pin:
                </Typography>

                <MuiOtpInput length={6} margin="40px" display="flex" value={otp} onChange={handleChange} />

                <Button> Done</Button>
                </Box>
                </Box>
            </Modal>
            </Box>
            <Button onClick={(hide)=>setHide(!hide)} variant="outlined" size="medium" style={{ borderRadius: '20px' }} color="secondary">HIDE SOS</Button>
            {/* <img src='images/shield1.svg' width='100%' height="100%"/> */}
        </Box>
        </Box>}
        {!hide && <CloseIcon sx={{margin:'10px', cursor: "pointer"}} onClick={()=>setHide(!hide)}/>}
        
    </Box>
  )
}
const Containers = styled.div`


	background: rgba(255, 0, 0, 0.8);
	border-radius: 50%;
	margin: 40px;
	height: 7vw;
	width: 7vw;
    display:flex;
    justify-content: center;
    align-items: center;
	box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	transform: scale(1);
	animation: pulse 2s infinite;

@keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 30px rgba(255, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
	}
}
`;
export default SOS