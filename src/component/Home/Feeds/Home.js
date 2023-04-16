import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import Footer from "../footer"
import { useNavigate } from "react-router-dom";

function Feed() {
  const paperSX = {
    width: "35%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "white",
    borderRadius: "20px",
    margin: "20px",
    transition: "background-color",
    transitionDuration: "2s",
    borderTop: 5,
    borderColor: "#800080",
    "&:hover": {
      background:
        "linear-gradient(45deg, rgb(251, 87, 141, 0.2), rgb(248, 109, 105, 0.2))",
      transition: "background-color 1s ease-in-out 0.5s",
    },
  };
  const Navigate =useNavigate();

  return (
    <Box>
      <img
        src="images/girlbanner21.jpg"
        alt="banner"
        width="100%"
        height="100%"
      />
      <Box
        sx={{
          background:
            "linear-gradient(45deg, rgb(251, 87, 141, 0.2), rgb(248, 109, 105, 0.2))",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          margin: "-10px 0 60px 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <img
            src="images/phone.png"
            alt="Phone"
            width="50px"
            height="50px"
            margin="10px"
          />
          <Box
            sx={{
              m: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography>
              For any issue related to Violence against Women
            </Typography>
            <Typography color="#800080">
              <strong>Please Call on Helpline : 7827-170-170 </strong>
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <img
            src="images/phone.png"
            alt="Phone"
            width="50px"
            height="50px"
            margin="10px"
          />
          <Box
            sx={{
              m: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography>For any emergency assistance</Typography>
            <Typography color="#800080">
              <strong>Please call 112.</strong>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: "40px, 0",
          margin: "0 0 60px 0",
        }}
      >
        <Paper sx={paperSX} elevation={3}>
          <Typography
            variant="h6"
            sx={{ margin: "10px", display: "flex", justifyContent: "center" }}
            color="#800080"
          >
            <strong>Register Your Complain.</strong>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              margin: "0px 20px 20px 20px",
            }}
          >
            <p>
              If you have experienced sexual harassment, it's important to take
              action by registering your complaint. To help strengthen your
              case, document any evidence you have, such as emails, text
              messages, or witness statements.
            </p>
            Seeking support from a counselor or advocate can also be helpful.
            Remember, registering your complaint is an important step towards
            creating a safer and more respectful workplace.
          </Typography>
          <Button variant="text" color="secondary" onClick ={ ()=> Navigate("/registercomplain")}>
            Register Here
          </Button>
        </Paper>
        <Paper sx={paperSX} elevation={3}>
          <Typography
            variant="h6"
            sx={{ margin: "10px", display: "flex", justifyContent: "center" }}
            color="#800080"
          >
            <strong>Register a Complaint as a Witness.</strong>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              margin: "0px 20px 20px 20px",
            }}
          >
            <p>
              If you have witnessed sexual harassment of a woman in the
              workplace, it's important to speak up and report it. Documenting
              any evidence you have, such as notes or recordings of the
              incident, can help support your case.{" "}
            </p>
            It's important to remember that by reporting sexual harassment, you
            are standing up for what's right and helping to create a safer work
            environment for everyone.
          </Typography>
          <Button variant="text" color="secondary" onClick={ ()=>Navigate("/witnesscomplain")}>
            Register Here
          </Button>
        </Paper>
      </Box>
      <Box
        sx={{
          background: "#efefef",
          width: "100%",
          padding: "20px",
          margin: "0 0 60px 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ margin: "10px", display: "flex", justifyContent: "center" }}
            color="#800080"
          >
            <strong> Women Issues </strong>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="images/rape.svg"
              alt="rape"
              width="140px"
              height="140px"
            />
            <Typography
              variant="h6"
              sx={{ margin: "10px", display: "flex", justifyContent: "center" }}
              color="#800080"
            >
              Rape / Attempt to Rape
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="images/acid.svg"
              alt="acid"
              width="140px"
              height="140px"
            />
            <Typography
              variant="h6"
              sx={{ margin: "10px", display: "flex", justifyContent: "center" }}
              color="#800080"
            >
              Acid Attack
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="images/harassment.svg"
              alt="harassment"
              width="140px"
              height="140px"
            />
            <Typography
              variant="h6"
              sx={{ margin: "10px", display: "flex", justifyContent: "center" }}
              color="#800080"
            >
              Sexual Harassment
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="images/assault.svg"
              alt="assault"
              width="140px"
              height="140px"
            />
            <Typography
              variant="h6"
              sx={{ margin: "10px", display: "flex", justifyContent: "center" }}
              color="#800080"
            >
              Sexual Assault
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="images/moles.svg"
              alt="molestation"
              width="140px"
              height="140px"
            />
            <Typography
              variant="h6"
              sx={{ margin: "10px", display: "flex", justifyContent: "center" }}
              color="#800080"
            >
              Molestation
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="images/stress.svg"
              alt="stress"
              width="140px"
              height="140px"
            />
            <Typography
              variant="h6"
              sx={{ margin: "10px", display: "flex", justifyContent: "center" }}
              color="#800080"
            >
              Mental Stress
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ margin: "60px 0px" }}>
        <img
          src="images/girl banner1.jpg"
          alt="banner"
          width="100%"
          height="100%"
          margin="40px 0px"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 0 60px 0",
        }}
      >
        <Paper
          sx={{
            width: "60%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "white",
            borderRadius: "20px",
            transition: "background 1000ms linear",
            borderTop: 5,
            borderColor: "#800080",
            "&:hover": {
              background:
                "linear-gradient(45deg, rgb(251, 87, 141, 0.2), rgb(248, 109, 105, 0.2))",
            },
          }}
          elevation={3}
        >
          <Typography
            variant="h6"
            sx={{
              margin: "20px 20px 0 20px",
              display: "flex",
              justifyContent: "flex-start",
            }}
            color="#800080"
          >
            <strong>About:</strong>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              margin: "0px 20px 20px 20px",
            }}
          >
            <p>
              HERSHIELD is a web app designed to provide a secure and simplified
              process for registering complaints related to violence against
              women. It is linked with to appropriate authorities, such as the
              police or One Hospitals and to provide information about
              government programmes.
            </p>
            The app also offers support and legal resources to victims,
            including the assistance of a virtual chat assistant called Sakhi.
            In case of an emergency, the app offers an SOS feature for online
            and offline rescue. Additionally, HERSHIELD includes online
            community forums where users can provide support to each other and
            e-learning safety awareness resources.
          </Typography>
        </Paper>
      </Box>
      <Footer/>
    </Box>
  );
}

export default Feed;
