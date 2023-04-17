import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Header from "../component/Home/Header";
import {useParams} from "react-router-dom"
import axios from "axios";
import { useState } from "react";

export default function ViewComplain() {

const {id}=useParams()
console.log(id)
const obj={
  "userId":`${id}`
}
const[user, setUser]=useState({});
const handleChang= async ()=>{

  await axios.post("https://hershield-backend-production.up.railway.app/api/complaint/complaint/one",obj).then((res) => {
    setUser(res.data.complaint)
    console.log(res.data.complaint)
})}

handleChang()
console.log("hbha",user)

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
            width: "20%",
            borderRadius: " 30px 0 30px 0",
            m:'30px 0 30px 0'
          }}
        >
          <Typography
            variant="h6"
            sx={{ margin: "16px", display: "flex", justifyContent: "center" }}
            color="#800080"
          >
            <strong>Your Complain</strong>
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
              <strong>Complainant Details:</strong>
            </Typography>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField disabled placeholder={`Name: ${user.name}`}  variant="outlined" color='secondary' size="small" sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
          <TextField disabled placeholder={`Phone: ${user.phone}`}  variant="outlined" color='secondary' size= "small" sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
          <TextField disabled placeholder={`Email: ${user.email}`} variant="outlined" color='secondary' size= "small" sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField disabled placeholder={`Designation: ${user.designation}`}  variant="outlined" color='secondary' size="small" sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
          <TextField disabled placeholder={`Adhaar Phone: ${user.contactno}`} variant="outlined" color='secondary' size= "small" sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
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
          <TextField disabled placeholder={`Name: ${user.organisationname}`}  variant="outlined" color='secondary' size="small" sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
          <TextField disabled placeholder={`Phone: ${user.organisationphone}`}  variant="outlined" color='secondary' size= "small" sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
          <TextField disabled placeholder={`Email: ${user.organisationemail}`} id="fullwidth"  variant="outlined" color='secondary' size="small" sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField disabled placeholder={`Head: ${user.organisationhead}`}  variant="outlined" color='secondary' size= "small"sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
          <TextField disabled placeholder={`State: ${user.organisationstate}`}  variant="outlined" color='secondary' size= "small"sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
          <TextField disabled placeholder={`District: ${user.organisationdistrict}`}  variant="outlined" color='secondary' size= "small"sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField disabled placeholder={` Address: ${user.organisationaddress}`} multiline rows={3}  variant="outlined" color='secondary' size= "small" sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
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
          <TextField disabled placeholder={`Name: ${user.offendersname}`}variant="outlined" color='secondary' size="small" sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
          <TextField disabled placeholder={`Designation: ${user.offendersdesignation}`} variant="outlined" color='secondary' size= "small" sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
          <TextField disabled placeholder={`Working Relationship: ${user.offendersworkingrelationship}`}  variant="outlined" color='secondary' size="small" sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
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
          <TextField disabled placeholder={`Name: ${user.name}`} multiline rows={3} variant="outlined" color='secondary' size= "small" sx={{ "& fieldset": { border:'none'},input:{"&::placeholder": {opacity: 1}}}}/>
          </Box>
          <Box sx={{display:'flex', justifyContent:'center', width:'40%', alignItems:'center'}}>
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
