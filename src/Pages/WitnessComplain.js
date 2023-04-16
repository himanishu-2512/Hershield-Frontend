import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../component/Home/Header";

function WitnessComplain() {

  const[complain, setComplain] =useState({
    name:"",
    phone:"",
    email:'',
    designation:"",
    contactno:'',
    adhaar:'',
    victimname:'',
    victimphone:"",
    victimemail:'',
    victimdesignation:'',
    victimworkingrelationship:'',
    orgnisationname:'',
    organisationphone:'',
    organisationemail:'',
    oraginsationhead:'',
    oragnisationstate:'',
    organisationdistrict:'',
    organisationaddress:'',
    offendersname:"",
    offendersdesignation:'',
    offendersworkingrelationship:'',
    description:''
  })

  const handleChange = (e) => {
		e.preventDefault();
		const { value, name } = e.target;
    console.log(value,name);
		setComplain(() => {
			return {
				...complain,
				[name]: value,
			};
		});
	};

  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(45deg, rgb(251, 87, 141, 0.3), rgb(248, 109, 105, 0.3))",
            width: "30%",
            borderRadius: " 30px 0 30px 0",
            m:'30px 0 30px 0'
          }}
        >
          <Typography
            variant="h6"
            sx={{ margin: "16px", display: "flex", justifyContent: "center" }}
            color="#800080"
          >
            <strong> Register Your Complain as a Witness</strong>
          </Typography>
        </Box>
        <Box sx={{width:'70%'}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "10px",
              borderLeft:3,
              borderColor:'#800080'
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>Witness Details:</strong>
            </Typography>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField onChange={handleChange} name="name" label="Name" variant="outlined" color='secondary' size="small" />
          <TextField onChange={handleChange} name="phone" label="Mobile Number" variant="outlined" color='secondary' size= "small"/>
          <TextField onChange={handleChange} name="designation" label="Designation" variant="outlined" color='secondary' size= "small"/>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField onChange={handleChange} name="email" label="Email" variant="outlined" color='secondary' size="small" />
          <TextField onChange={handleChange} name="contactno" label="Adhaar Mobile Number" variant="outlined" color='secondary' size= "small"/>
          <TextField onChange={handleChange} name="adhaar" label="Adhaar Number" variant="outlined" color='secondary' size= "small"/>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "10px",
              borderLeft:3,
              borderColor:'#800080'
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>Victim's Details:</strong>
            </Typography>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField onChange={handleChange} name="victimname" label="Name" variant="outlined" color='secondary' size="small" />
          <TextField onChange={handleChange} name="victimphone" label="Mobile Number" variant="outlined" color='secondary' size= "small"/>
          <TextField onChange={handleChange} name="victimdesignation" label="Designation" variant="outlined" color='secondary' size= "small"/>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField onChange={handleChange} name="victimemail" label="Email" variant="outlined" color='secondary' size="small" />
          <TextField onChange={handleChange} name="victimworkingrelationship" label="Working Relationship" variant="outlined" color='secondary' size= "small"/>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "10px",
              borderLeft:3,
              borderColor:'#800080'
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>Organization Details:</strong>
            </Typography>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField onChange={handleChange} name="organisationname" label="Name" variant="outlined" color='secondary' size="small" />
          <TextField onChange={handleChange} name="organisationphone" label="Mobile Number" variant="outlined" color='secondary' size= "small"/>
          <TextField onChange={handleChange} name="organisationemail" id="fullwidth" label="Email" variant="outlined" color='secondary' size="small" />
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField onChange={handleChange} name="organisationhead" label="Head Of The Organization" variant="outlined" color='secondary' size= "small"/>
          <TextField onChange={handleChange} name="organisationstate" label="State" variant="outlined" color='secondary' size= "small"/>
          <TextField onChange={handleChange} name="organisationdistrict" label="District" variant="outlined" color='secondary' size= "small"/>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField onChange={handleChange} name="organisationaddress" multiline rows={3} label="Full Address" variant="outlined" color='secondary' size= "small"/>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "10px",
              borderLeft:3,
              borderColor:'#800080'
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>Offender's Details:</strong>
            </Typography>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField onChange={handleChange} name="offendersname" label="Name" variant="outlined" color='secondary' size="small" />
          <TextField onChange={handleChange} name="offendersdesignation" label="Designation" variant="outlined" color='secondary' size= "small"/>
          <TextField onChange={handleChange} name="offendersworkingrelationship" label="Working Relatioship" variant="outlined" color='secondary' size="small"/>
          </Box>
          
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "10px",
              borderLeft:3,
              borderColor:'#800080'
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>Event Details:</strong>
            </Typography>
          </Box>
          <Box sx={{display:'flex', width:'100%', }}>
          <Box sx={{ margin:'20px',width:'60%', display:'flex','& > :not(style)': {m: 2, width:'100%'},}}>
          <TextField onChange={handleChange} name="description" multiline rows={3} label="Description About The Event" variant="outlined" color='secondary' size= "small"/>
          </Box>
          </Box>
          <Box sx={{display:'flex', justifyContent:'center', m:'40px'}}>
            <Button variant="contained" color="secondary">Submit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
 export default WitnessComplain