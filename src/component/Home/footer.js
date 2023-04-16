import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Input } from '@mui/material';
function footer() {
  return (
    <Box
        sx={{
          width: "100%",
          height: "40vh",
          background: "#c56fb2",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection:'column',
          alignItems:'center',
          margin: "10px 0 0 0",
        }}
      >
        <Typography variant="h6" margin="10px" color="white">
          <strong>Connect With Us:</strong>
        </Typography>
        <Box sx={{display:'flex', justifyContent:'space-evenly',background:'',width:'80%',height:'25vh', flexDirection:'row', alignItems:'center'}}>
            <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                <Box sx={{display:'flex', justifyContent:'', flexDirection:'row'}}>
                    <FacebookIcon style={{ color: 'white', fontSize:'60px', margin:'10px' }}/>
                    <TwitterIcon sx={{ color: 'white',fontSize:'60px', margin:'10px' }}/>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
                    
                    <InstagramIcon style={{ color: 'white' ,fontSize:'60px', margin:'10px'}}/>
                    <WhatsAppIcon style={{ color: 'white',fontSize:'60px', margin:'10px' }}/>
                </Box>
            </Box>
        <Box sx={{width:'600px', background:'rgb(255,255,255,0.9)', height:'25vh',boxShadow: 3, borderRadius:'50px', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <Box sx={{'& > :not(style)': {m: 2, width:'60%', height:"40px"}, display:'flex', justifyContent:'space-evenly', flexDirection:'row',}}>
            <TextField label="Name" variant="outlined"color='secondary' size="small"/>
            <TextField label="Phone" variant="outlined"color='secondary' size="small"/>
            </Box>
            <Box sx={{ '& > :not(style)': {mx: 2},display:'flex', justifyContent:'flex-start', flexDirection:'row', width:'85%', margin:'0px'}}>
            <TextField fullWidth label="Email" variant="outlined"color='secondary' size="small" margin=""/>
            <Button variant="contained" color="secondary" size="small"> Submit </Button>
            </Box>
            
        </Box>
        </Box>
      </Box>
  )
}

export default footer