import React, { useState } from 'react'
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, InputBase, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import axios from "axios";

async function Bot(promp){
    const options = {
      method: "POST",
	url: "https://openai80.p.rapidapi.com/chat/completions",
	headers: {
		"content-type": "application/json",
		"X-RapidAPI-Key": "6dbc83ebc3msh5413e151fb92f3bp114e8fjsnc8a3d1c5484a",
		"X-RapidAPI-Host": "openai80.p.rapidapi.com",
	},
	data: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${promp}"}]}`,
};

    const ans= await axios.request(options).then(function (response) {
       
         return(response.data.choices[0].message.content);
    }).catch(function (error) {
        console.error(error);
    });
    return ans;
}

async function updatepl(message, pl){
    pl.push(message);
}

async function create_prompt(message, pl){
    let p_mess='Human:'+message;
    await updatepl(p_mess, pl);
    let promp= pl.join(' ')
    return promp
}

async function get_bot_response(message, pl){
    let promp = await create_prompt(message, pl);
    let botresponse= await Bot(promp);
    return botresponse;

}

async function main(message)
{
    let pl=['You are a female bot name Sakhi and from now on you will act as a legal advisor only in short']
    while(true)
    {
        let userinput = message
        if(userinput === 'exit')
        break;
        let response = await get_bot_response(userinput, pl)
        // console.log(response);
        return(response);
    }
}


function ChatBot(props) {

  const [userinput, setUserInput] = useState("");
  const[m,setm]=useState({user:true,message:""})
  const [usermessages, setUserMessages] = useState([]);
  const [botinput, setBotInput] = useState("");
  const [botmessages, setBotMessages] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();
    setUserMessages([...usermessages, userinput]);
   const res=await  main(userinput)
    console.log(res)
    setBotMessages([...botmessages, res]);
  }


  return (
    <Paper sx={{ width: '100%', minHeight:'100%', borderRadius:'20px'}} elevation={5}>
    <Box sx={{ width: '100%'}}>
      <Box sx={{boxShadow:'0', display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems:'center' }}>
        <Avatar style={{width: "50px", height: "50px" , margin:'5px'}}
					component={Paper}
					elevation={2} 
          src="/images/bot.png"/>
          <Box sx={{
            display:'flex',
            flexDirection:'column',
            m:'5px'
          }}>
        <Typography variant='h6'>Sakhi</Typography>
        </Box>
        </Box>
        <CloseIcon sx={{margin:'10px', cursor: "pointer"}}
        title="Close"
        onClick={(e) => props.onClick(e.target.value)}
        />
      </Box>
          <Divider/>
      <Box sx={{overflowY:'scroll', maxHeight:'350px', scrollBehavior:'smooth', scrollbarWidth:'none', minHeight:'35vh' 
    }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', m:'5px'}}>
          <Paper sx={{width:'80%', background:'linear-gradient(45deg, #FB578D, #F86D69)', borderRadius:'20px 20px 20px 0px'}}>
              <Typography variant='body2' sx={{margin:'5px 5px 5px 10px', color:'white'}}>
              Hello! As a legal advisor, how may I assist you today?
              </Typography>
          </Paper>
        </Box>
        {usermessages.map((item,index)=>{return(
        <Box  key={index} sx={{ display: 'flex', justifyContent: 'flex-end', m:'10px 5px 10px 5px'}}>
          <Paper sx={{width:'80%', background: '#e1e4e4', borderRadius:'20px 20px 0px 20px'}}>
              <Typography variant='body2' sx={{margin:'5px 10px 5px 10px'}}>
                {item}
              </Typography>
          </Paper>
        </Box>
        )})}
        {botmessages.map((item,index)=>{return(
        <Box key={index} sx={{ display: 'flex', justifyContent: 'flex-start', m:'5px'}}>
          <Paper sx={{width:'80%', background:'linear-gradient(45deg, #FB578D, #F86D69)', borderRadius:'20px 20px 20px 0px'}}>
              <Typography variant='body2' sx={{margin:'5px 5px 5px 10px', color:'white'}}>
               {item}
              </Typography>
          </Paper>
        </Box>)})}
      </Box>

      <Box>
      <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Paper
          component="form"
          fullWidth
          sx={{ display: "flex", alignItems: "center", width: "100%" }}
          elevation={0}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            name="userinput"
            placeholder="Send a message..."
            inputProps={{ "aria-label": "Send a message..." }}
            onChange={(event) => {setUserInput(event.target.value) 
            console.log(event.target.value)}}
          />
          <IconButton
            type="button"
            color="white"
            size="small"
            sx={{ background:"linear-gradient(45deg, #FB578D, #F86D69)", color: "#fff",borderRadius: 1 }}
            aria-label="send"
            onClick={handleClick}
          >
            <SendIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="white" sx={{ p: "10px" }} aria-label="Add image">
            <KeyboardVoiceIcon/>
          </IconButton>
        </Paper>
      </Box>
    </Box>
      </Box>
    </Box>
    </Paper>
  )
}

export default ChatBot