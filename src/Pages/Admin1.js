import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../component/Admin/adminHeader";
import UserComplaints from "../component/Admin/Usercomplain";
import WitnessComplaints from "../component/Admin/WitnessComplain";
import DashBoard from "../component/Admin/Dashboard";
import SOS from "../component/Admin/adminsos";



function Profile() {
  const [clicked1, setClicked1] = React.useState(true);
  const [clicked2, setClicked2] = React.useState(false);
  const [clicked3, setClicked3] = React.useState(false);
  const [clicked4, setClicked4] = React.useState(false);
  const handleChange1 = () => {
    setClicked1(true);
    setClicked3(false);
    setClicked2(false);
    setClicked4(false);
  };
  const handleChange2 = () => {
    setClicked1(false);
    setClicked3(false);
    setClicked2(true);
    setClicked4(false);
  };
  const handleChange3 = () => {
    setClicked1(false);
    setClicked3(true);
    setClicked2(false);
    setClicked4(false);
  };
  const handleChange4 = () => {
    setClicked1(false);
    setClicked3(false);
    setClicked2(false);
    setClicked4(true);
  };

  return (
    






    <Box>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{position:'fixed'}}>
            <Box
              sx={{
                cursor: "pointer",
                m: "20px 0 20px 0",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "Column",
                justifyContent: "flex-start",
                background: clicked1
                  ? "linear-gradient(45deg, rgb(251, 87, 141, 0.3), rgb(248, 109, 105, 0.3))"
                  : "white",
              }}
              onClick={handleChange1}
            >
              <Box
                sx={{
                  borderLeft: 3,
                  borderColor: "#800080",
                  display: "flex",
                  justifyContent: "flex-start",
                  m: "10px 20px 10px 20px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    margin: "0px 0 0 10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  color="#800080"
                >
                  <strong>Dashboard</strong>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                m: "20px 0 20px 0",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "Column",
                justifyContent: "flex-start",
                background: clicked2
                  ? "linear-gradient(45deg, rgb(251, 87, 141, 0.3), rgb(248, 109, 105, 0.3))"
                  : "white",
              }}
              onClick={handleChange2}
            >
              <Box
                sx={{
                  borderLeft: 3,
                  borderColor: "#800080",
                  display: "flex",
                  justifyContent: "flex-start",
                  m: "10px 20px 10px 20px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    margin: "0px 50px 0 10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  color="#800080"
                >
                  <strong>User Complaints</strong>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                m: "20px 0 20px 0",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "Column",
                justifyContent: "flex-start",
                background: clicked3
                  ? "linear-gradient(45deg, rgb(251, 87, 141, 0.3), rgb(248, 109, 105, 0.3))"
                  : "white",
              }}
              onClick={handleChange3}
            >
              <Box
                sx={{
                  borderLeft: 3,
                  borderColor: "#800080",
                  display: "flex",
                  justifyContent: "flex-start",
                  m: "10px 20px 10px 20px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    margin: "0px 0 0 10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  color="#800080"
                >
                  <strong>Witness Complaints</strong>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                m: "20px 0 20px 0",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "Column",
                justifyContent: "flex-start",
                background: clicked4
                  ? "linear-gradient(45deg, rgb(251, 87, 141, 0.3), rgb(248, 109, 105, 0.3))"
                  : "white",
              }}
              onClick={handleChange4}
            >
              <Box
                sx={{
                  borderLeft: 3,
                  borderColor: "#800080",
                  display: "flex",
                  justifyContent: "flex-start",
                  m: "10px 20px 10px 20px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    margin: "0px 0 0 10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  color="#800080"
                >
                  <strong>SOS</strong>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 6 }}>
          {clicked1 && <DashBoard />}
          {clicked2 && <UserComplaints />}
          {clicked3 && <WitnessComplaints />}
          {clicked4 && <SOS />}
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
