import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';

function UserInfo() {

	const [active, setActive] = useState(false)
	const [active1, setActive1] = useState(false)

	const obj = JSON.parse(window.localStorage.getItem("user"));

	const [user, setUser] = useState({
		name: "",
		phone:"",
		email: "",
		city:"",
		contact1:"",
		contact2:"",
		contact3:"",
		contact4:"",
		contact5:"",
	});
	console.log(obj);

	const handleChange = (e) => {
		e.preventDefault();
		const { value, name } = e.target;
		console.log(value,name);
		setUser(() => {
			return {
				...user,
				[name]: value,
			};
		});
	};

  return (
	<Box sx={{display:'flex', justifyContent:'center'}}>
	<Box sx={{width:'100%', display:'flex',background:'', justifyContent:'flex-start', flexDirection:'column' }}>
	<Box sx={{display:'flex', justifyContent:'center', width:'100%'}}>
		<Box
          sx={{
            background:
              "linear-gradient(45deg, rgb(251, 87, 141, 0.3), rgb(248, 109, 105, 0.3))",
            width: "30%",
            borderRadius: " 40px 0 40px 0",
            m:'10px 0 30px 0',
			display:'flex', justifyContent:'center', alignItems:'center'
          }}
        >
          <Typography
            variant="h6"
            sx={{ margin: "5px", display: "flex", justifyContent: "center" }}
            color="#800080"
          >
            <strong> Profile Details </strong>
          </Typography>
        </Box>
	</Box>
	<Box sx={{display:'flex',justifyContent:'flex-end', alignItems:'center'}}>
		<Box onClick={()=>setActive(!active)} sx={{ cursor:'pointer',display:'flex',justifyContent:'center', borderRadius:'10px'}}>
		  <Typography color='#800080' margin='0 0 0 4px '>EDIT </Typography><EditIcon sx={{width:'15px', height:'15px', margin:'3px' }}/>
		  </Box>
	</Box>
		<Box>
		<Box sx={{ margin:'10px', display:'flex','& > :not(style)': {m: 2},justifyContent:'space-evenly', alignItems:'center', flexDirection:'row'}}>
			<Typography>Name:     </Typography>
          <TextField name="name" onChange={handleChange} disabled={!active} placeholder= {`${obj.name}`} variant="outlined" color='secondary' size="small"sx={{ "& fieldset": { border: active?1:'none'}, width:'30%',input:{"&::placeholder": {opacity: 1}} }}/>
		</Box>
		  <Box sx={{ margin:'10px', display:'flex','& > :not(style)': {m: 2},justifyContent:'space-evenly', alignItems:'center', flexDirection:'row'}}>
			<Typography>Phone:</Typography>
			<TextField name="phone" onChange={handleChange} disabled={!active} placeholder= {`${obj.contactno}`} variant="outlined" color='secondary' size="small"sx={{ "& fieldset": { border: active?1:'none' },width:'30%',input:{"&::placeholder": {opacity: 1}}}}/>
		</Box>
		<Box sx={{ margin:'10px', display:'flex','& > :not(style)': {m: 2},justifyContent:'space-evenly', alignItems:'center', flexDirection:'row'}}>
			<Typography>Email:</Typography>
			<TextField name="email" onChange={handleChange} disabled={!active} placeholder= {`${obj.email}`} variant="outlined" color='secondary' size="small"sx={{ "& fieldset": { border: active?1:'none' },width:'30%',input:{"&::placeholder": {opacity: 1}}}}/>
		</Box>
		<Box sx={{ margin:'10px', display:'flex','& > :not(style)': {m: 2},justifyContent:'space-evenly', alignItems:'center', flexDirection:'row'}}>
			<Typography>City:</Typography>
			<TextField name="designation" onChange={handleChange} disabled={!active} placeholder= {`${user.city}`} variant="outlined" color='secondary' size="small"sx={{ "& fieldset": { border: active?1:'none' },width:'30%',input:{"&::placeholder": {opacity: 1}}}}/>
		</Box>
		<Box sx={{width:'100%', display:"flex", justifyContent:'center', m:'20px'}}>
			{active && <Button variant='contained' color="secondary" onClick={()=>setActive(!active)}> Submit</Button>}
		</Box>
	</Box>
	<Box sx={{display:'flex', justifyContent:'center', width:'100%'}}>
	<Box
          sx={{
            background:
              "linear-gradient(45deg, rgb(251, 87, 141, 0.3), rgb(248, 109, 105, 0.3))",
            width: "30%",
            borderRadius: " 40px 0 40px 0",
            m:'10px 0 30px 0',
			display:'flex', justifyContent:'center', alignItems:'center'
          }}
        >
          <Typography
            variant="h6"
            sx={{ margin: "5px", display: "flex", justifyContent: "center" }}
            color="#800080"
          >
            <strong> Emergency Contacts </strong>
          </Typography>
        </Box>
		</Box>
        <Box sx={{display:'flex',justifyContent:'flex-end', alignItems:'center'}}>
		<Box onClick={()=>setActive1(!active1)} sx={{ cursor:'pointer',display:'flex',justifyContent:'center', borderRadius:'10px'}}>
		  <Typography color='#800080' margin='0 0 0 4px '>EDIT </Typography><EditIcon sx={{width:'15px', height:'15px', margin:'3px' }}/>
		  </Box>
	</Box>
		<Box>
		<Box sx={{ margin:'10px', display:'flex','& > :not(style)': {m: 2},justifyContent:'space-evenly', alignItems:'center', flexDirection:'row'}}>
			<Typography>1. Contact No:     </Typography>
          <TextField name="contact1" onChange={handleChange} disabled={!active1} placeholder= {`${user.contact1}`} variant="outlined" color='secondary' size="small"sx={{ "& fieldset": { border: active1?1:'none'}, width:'30%',input:{"&::placeholder": {opacity: 1}} }}/>
		</Box>
        <Box sx={{ margin:'10px', display:'flex','& > :not(style)': {m: 2},justifyContent:'space-evenly', alignItems:'center', flexDirection:'row'}}>
			<Typography>2. Contact No:     </Typography>
          <TextField name="contact2" onChange={handleChange} disabled={!active1} placeholder= {`${user.contact2}`} variant="outlined" color='secondary' size="small"sx={{ "& fieldset": { border: active1?1:'none'}, width:'30%',input:{"&::placeholder": {opacity: 1}} }}/>
		</Box>
        <Box sx={{ margin:'10px', display:'flex','& > :not(style)': {m: 2},justifyContent:'space-evenly', alignItems:'center', flexDirection:'row'}}>
			<Typography>3. Contact No:     </Typography>
          <TextField name="contact3" onChange={handleChange} disabled={!active1} placeholder= {`${user.contact3}`} variant="outlined" color='secondary' size="small"sx={{ "& fieldset": { border: active1?1:'none'}, width:'30%',input:{"&::placeholder": {opacity: 1}} }}/>
		</Box>
        <Box sx={{ margin:'10px', display:'flex','& > :not(style)': {m: 2},justifyContent:'space-evenly', alignItems:'center', flexDirection:'row'}}>
			<Typography>4. Contact No:     </Typography>
          <TextField name="contact4" onChange={handleChange} disabled={!active1} placeholder= {`${user.contact4}`} variant="outlined" color='secondary' size="small"sx={{ "& fieldset": { border: active1?1:'none'}, width:'30%',input:{"&::placeholder": {opacity: 1}} }}/>
		</Box>
        <Box sx={{ margin:'10px', display:'flex','& > :not(style)': {m: 2},justifyContent:'space-evenly', alignItems:'center', flexDirection:'row'}}>
			<Typography>5. Contact No:     </Typography>
          <TextField name="contact5" onChange={handleChange} disabled={!active1} placeholder= {`${user.contact5}`} variant="outlined" color='secondary' size="small"sx={{ "& fieldset": { border: active1?1:'none'}, width:'30%',input:{"&::placeholder": {opacity: 1}} }}/>
		</Box>
        <Box sx={{width:'100%', display:"flex", justifyContent:'center', m:'20px'}}>
			{active1 && <Button variant='contained' color="secondary" onClick={()=>setActive1(!active1)}> Submit</Button>}
		</Box>
        </Box>
	</Box>
	</Box>
  )
}

export default UserInfo