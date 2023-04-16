import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import GifIcon from "@mui/icons-material/Gif";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";

import { useEffect } from "react";
import { useState,useRef } from "react";

function Comments() {
const input=useRef()
  const [user, setUser] =useState({
    name:"kunal",
    time:"7h",
    comment:""
  });
  
 useEffect(()=>{setUser()},[])

 

const [arr,setArr]=useState([{
  name:"kunal",
  comment:"what is this?",
  time:"4h"
},
{
  name:"himansu",
  comment:"what is this?",
  time:"4h"
},
{
  name:"kunal kemu",
  comment:"what the fuck?",
  time:"7h"
}])
// if(!num){
//   setNum(true)
// setArr([...arr,user])}


  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Avatar />
        <Paper
          component="form"
          fullWidth
          sx={{ display: "flex", alignItems: "center", width: "87%" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Write a comment..."
            inputProps={{ "aria-label": "write a comment..." }}
            ref={input}
            onChange={(e)=>{ {setUser({...user,comment:e.target.value}, console.log(e.target.value))}}}
          />
          <IconButton
            type="button"
            color="secondary"
            sx={{ p: "10px" }}
            aria-label="send"
          >
            <SendIcon onClick={()=>setArr([...arr,user]
              )} />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="secondary" sx={{ p: "10px" }} aria-label="Add image">
            <CameraAltIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="secondary" sx={{ p: "10px" }} aria-label="Add GIF">
            <GifIcon />
          </IconButton>
        </Paper>
      </Box>
      <Box
        sx={{
          mt: "20px",
        }}
      >
        
{
  arr.map((item,index)=>{return(<Box>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        mt: "10px",
        mb: "2px",
      }}
    >
      <Avatar />
      <Paper
        component="form"
        fullWidth
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          width: "87%",
        }}
      >
        <Box
          sx={{
            ml: "10px",
            mt: "10px",
            mb: "5px",
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "550" }}>
            {item.name}
          </Typography>
        </Box>
        <Box
          sx={{
            ml: "10px",
            mb: "5px",
          }}
        >
          <Typography variant="body2" sx={{}}>
          {item.comment}
          </Typography>
        </Box>
      </Paper>
    </Box>
    <Box
      sx={{
        ml: "50px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Button color ="secondary" sx={{ margin: "0" }} size="small">
        Like
      </Button>
      <Button color ="secondary" size="small">reply</Button>
      <Typography variant="body2" sx={{ fontWeight: "light", ml: "10px" }}>
      {item.time}
      </Typography>
    </Box>
  </Box>)})
}  
    </Box>
      </Box>
    
  );
}

export default Comments;
