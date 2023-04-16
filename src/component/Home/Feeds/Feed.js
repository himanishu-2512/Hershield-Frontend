import {
	Avatar,
	CardContent,
	CardHeader,
	CardMedia,
	Collapse,
	IconButton,
	Typography,
	Paper,
	Divider,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { Favorite, KeyboardArrowDown, MoreVert } from "@mui/icons-material";
import { Box } from "@mui/system";
import CommentIcon from "@mui/icons-material/Comment";
import Button from "@mui/material/Button";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import styled from "styled-components";
import AddComments from'../Comments/AddComments'
import Header from '../Header'
import {
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    TextField,
    Tooltip,
  } from "@mui/material";
  import {
    Add as AddIcon,
    
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
  } from "@mui/icons-material";

function Feed() {

    const SytledModal = styled(Modal)({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      });
      
      const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      });
      const [openn, setOpenn] = useState(false);      




	//Like
	const [color, setColor] = useState(false);
	const handleLike = () => {
		setColor(!color);
	};

	//Comment
	const [open, setOpen] = useState(false);
	const handleChange = () => {
		setOpen(!open);
	};

	//Save
	const [save, setSave] = useState(false);
	const handleSave = () => {
		setSave(!save);
	};

	const [expand, setExpand] = useState(false);
	const handleExpand = () => {
		setExpand(true);
	};




    // post details
    // useEffect(()=>{setUser()},[])
    const [user, setUser] =useState({
        name:"kunal",
        description:"",
        time:"4h",
        like:'10',
        comment:"9"
      });
      


    const [arr,setArr]=useState([{
        name:"kunal",
        description:"what is this?",
        time:"4h",
        like:'10',
        comment:"9"
      },
      {
        name:"kunal",
        description:"what this?",
        time:"4h",
        like:'10',
        comment:"9"
      },
      {
        name:"kunal",
        description:"what is ?",
        time:"4h",
        like:'10',
        comment:"9"
      }])

	return (
        <Overlay>
            {/* share */}
            <Tooltip
        onClick={(e) => setOpenn(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={openn}
        onClose={(e) => setOpenn(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          sx={{background:'white'}}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="backgorund.default" textAlign="center">
            Create post
          </Typography>
          <UserBox>.
            <Avatar
              src=""
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Kunal Chaurasia
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%", margin:'0 0 40px 0' }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
            onChange={(e)=>{setUser({...user,description:e.target.value})
             console.log(e.target.value)}}
          />
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={()=>setArr([...arr,user])}>Post</Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
      <Header/>
{/* post */}


{arr.map((item,index)=>{return( 
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				flexWrap: "wrap",
				width: "35%",
                margin:'10px'
			}}
		>
            
			<Paper
				sx={{
					minWidth: "100%",
                    maxWidth: "100%",
					variant: "outlined",
					maxHeight: "100%",
					borderRadius: {
						xs: "0px",
						sm: "10px",
					},

				}}
				elevation={3}
			>
				<CardHeader
					action={
						<IconButton aria-label="settings">
							<MoreVert />
						</IconButton>
					}
                    titleTypographyProps={{
                        fontSize: 18,
                      }}
                      subheaderTypographyProps={{
                        fontSize: 12,
                      }}
					title={item.name}
					subheader={item.time}
				/>
				<CardContent sx={{}}>
					<Typography variant="body2" sx={{ marginTop: "0px", textDecoration: "none", textAlign: "left" }}>
						{item.description}
					</Typography>
				</CardContent>
				
				<Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
					<Typography variant="body2" sx={{ marginLeft: "2%" }}>
						
						{item.like}{" "} likes
					</Typography>
					<Typography variant="body2" sx={{ marginRight: "2%" }}>
						{item.comment} {" "}comments
					</Typography>
				</Box>
				<Divider />
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-evenly",
					}}
				>
					<Button
						startIcon={<Favorite />}
						onClick={() => handleLike()}
						style={{ color: color ? "red" : "#800080" }}
					>
						Like
					</Button>
					<Button
						startIcon={<CommentIcon />}
						sx={{ color: "#800080" }}
						expand={`${open}`}
						onClick={() => handleChange()}
						aria-expanded={true}
						aria-label="show more"
					>
						Comment
					</Button>

				</Box>
				{open && <Divider maxWidth="90%" />}
				<Collapse in={open} timeout="auto" unmountOnExit>
					<CardContent>
						<AddComments/>
					</CardContent>
				</Collapse>
			</Paper>
		</Box>
        </Box>)})
    }  
        </Overlay>
	);
}

const Overlay = styled.div`
	background: #fff url(images/back.png) repeat center center;
	background-size: 50%;
`;

export default Feed;
