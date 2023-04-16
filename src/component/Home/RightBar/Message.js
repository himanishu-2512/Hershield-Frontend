import { Avatar, Box } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import GifIcon from "@mui/icons-material/Gif";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

function Comments(props) {
  return (
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
            placeholder="Send a message..."
            inputProps={{ "aria-label": "Send a message..." }}
            onChange={(event) => props.onChange(event.target.value)}
          />
          <IconButton
            type="button"
            color="white"
            width='10px'
            sx={{ background:"linear-gradient(45deg, #FB578D, #F86D69)", color: "#fff" }}
            aria-label="send"
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
  );
}

export default Comments;
