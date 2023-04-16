import React, { useState } from 'react'
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, InputBase, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';


function ChatBot(props) {

  const [userinput, setUserInput] = useState("");
  const [usermessages, setUserMessages] = useState([]);
  function message(){
    usermessages.map((message)=>{

    })
  }

  const handleClick = (e) => {
    e.preventDefault();
    setUserMessages([...usermessages, userinput]);
    setUserInput("");
  }


  return (
    <Paper sx={{ width: '100%', maxHeight:'100%', borderRadius:'20px'}} elevation={5}>
    <Box sx={{ width: '100%'}}>
      <Box sx={{boxShadow:'0', display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
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
      <Box sx={{overflowY:'scroll', maxHeight:'350px', scrollBehavior:'smooth', scrollbarWidth:'none'
    }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', m:'5px'}}>
          <Paper sx={{width:'80%', background:'linear-gradient(45deg, #FB578D, #F86D69)', borderRadius:'20px 20px 20px 0px'}}>
              <Typography variant='body2' sx={{margin:'5px 5px 5px 10px', color:'white'}}>
                Hi, How are you?
              </Typography>
          </Paper>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', m:'5px'}}>
          <Paper sx={{width:'80%', background: '#e1e4e4', borderRadius:'20px 20px 0px 20px'}}>
              <Typography variant='body2' sx={{margin:'5px 10px 5px 10px'}}>
                I am fine.
              </Typography>
          </Paper>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', m:'5px'}}>
          <Paper sx={{width:'80%', background:'linear-gradient(45deg, #FB578D, #F86D69)', borderRadius:'20px 20px 20px 0px'}}>
              <Typography variant='body2' sx={{margin:'5px 5px 5px 10px', color:'white'}}>
                Okay, Tell me about yourself!
              </Typography>
          </Paper>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', m:'5px'}}>
          <Paper sx={{width:'80%', background: '#e1e4e4', borderRadius:'20px 20px 0px 20px'}}>
              <Typography variant='body2' sx={{margin:'5px 10px 5px 10px'}}>
                My name is Khan.  iscaubuuu bcsubibca acsbc iusacbcusai biusc sc sisucbaiucsbu saucsbuba ubcsbscau bcsuab csabc 9acs9bu bcsucb s9ubsac9u cubcs9 ubc9asb cs
              </Typography>
          </Paper>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', m:'5px'}}>
          <Paper sx={{width:'80%', background: '#e1e4e4', borderRadius:'20px 20px 0px 20px'}}>
              <Typography variant='body2' sx={{margin:'5px 10px 5px 10px'}}>
                My name is Khan.  iscaubuuu bcsubibca acsbc iusacbcusai biusc sc sisucbaiucsbu saucsbuba ubcsbscau bcsuab csabc 9acs9bu bcsucb s9ubsac9u cubcs9 ubc9asb cs
              </Typography>
          </Paper>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', m:'5px'}}>
          <Paper sx={{width:'80%', background: '#e1e4e4', borderRadius:'20px 20px 0px 20px'}}>
              <Typography variant='body2' sx={{margin:'5px 10px 5px 10px'}}>
                My name is Khan.  iscaubuuu bcsubibca acsbc iusacbcusai biusc sc sisucbaiucsbu saucsbuba ubcsbscau bcsuab csabc 9acs9bu bcsucb s9ubsac9u cubcs9 ubc9asb cs
              </Typography>
          </Paper>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', m:'5px'}}>
          <Paper sx={{width:'80%', background: '#e1e4e4', borderRadius:'20px 20px 0px 20px'}}>
              <Typography variant='body2' sx={{margin:'5px 10px 5px 10px'}}>
                My name is Khan.  iscaubuuu bcsubibca acsbc iusacbcusai biusc sc sisucbaiucsbu saucsbuba ubcsbscau bcsuab csabc 9acs9bu bcsucb s9ubsac9u cubcs9 ubc9asb cs
              </Typography>
          </Paper>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', m:'5px'}}>
          <Paper sx={{width:'80%', background: '#e1e4e4', borderRadius:'20px 20px 0px 20px'}}>
              <Typography variant='body2' sx={{margin:'5px 10px 5px 10px'}}>
                My name is Khan.  iscaubuuu bcsubibca acsbc iusacbcusai biusc sc sisucbaiucsbu saucsbuba ubcsbscau bcsuab csabc 9acs9bu bcsucb s9ubsac9u cubcs9 ubc9asb cs
              </Typography>
          </Paper>
        </Box>
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
            onChange={(event) => setUserInput(event.target.value)}
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