import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import Header from "../component/Home/Header";

function Helpline() {
  const paperSX = {
    width: "60%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "white",

    margin: "20px",
    transition: "background-color",
    transitionDuration: "2s",
    borderLeft: 3,
    borderColor: "#800080",
  };

  return (
    <Box>
      <Header />
      <Box
        sx={{
          background:
            "linear-gradient(45deg, rgb(251, 87, 141, 0.2), rgb(248, 109, 105, 0.2))",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          margin: "0px 0 40px 0",
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
          }}
        >
          <Typography
            variant="h6"
            sx={{ margin: "20px", display: "flex", justifyContent: "center" }}
            color="#800080"
          >
            <strong> Helplines For Women in Distress:</strong>
          </Typography>
        </Box>
        <Paper sx={paperSX} elevation={0}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
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
              <strong>National Commission for Women Helpline</strong>
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              7827170170
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
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
              <strong>Central Social Welfare Board -Police Helpline </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              1091/ 1291, (011) 23317004
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
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
              <strong>Shakti Shalini </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              10920
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
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
              <strong>Shakti Shalini - women's shelter </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              (011) 24373736/ 24373737
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
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
              <strong>SAARTHAK </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              (011) 26853846/ 26524061
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
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
              <strong>All India Women's Conference </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              10921/ (011) 23389680
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>JAGORI </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              (011) 26692700 +918800996640
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>Joint Women's Programme </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              (011) 24619821
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>Sakshi - violence intervention center </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              (0124) 2562336/ 5018873
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>Saheli - a womens organization </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              (011) 24616485
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>Nirmal Niketan </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              (011) 27859158
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>Nari Raksha Samiti </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              (011) 23973949
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>RAHI Recovering and Healing from Incest </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              (011) 26238466/ 26224042, 26227647
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>Counselling Services on Women in Distress </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              23317004
            </Typography>
          </Box>
        </Paper>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          mt: "40px",
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(45deg, rgb(251, 87, 141, 0.3), rgb(248, 109, 105, 0.3))",
            width: "30%",
            borderRadius: " 30px 0 30px 0",
          }}
        >
          <Typography
            variant="h6"
            sx={{ margin: "20px", display: "flex", justifyContent: "center" }}
            color="#800080"
          >
            <strong> Helplines For Legal Aids:</strong>
          </Typography>
        </Box>
        <Paper sx={paperSX} elevation={0}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
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
              <strong>Human Rights Law Network</strong>
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              (011) 24316922/ 24324503
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
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
              <strong>Lawyers Collective Womens Rights </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              (011) 24373993/ 24372923
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
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
              <strong>MARG (Multiple Action Research Group) </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              (011) 26497483 / 26496925
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
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
              <strong>Delhi Police HELPLINE </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              1091
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
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
              <strong>National Human Rights Commission </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              (011) 23385368/9810298900
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
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
              <strong>Pratidhi </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              (011) 22527259
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "5px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>CATS - Centralised Ambulance for Trauma Services </strong>{" "}
            </Typography>
            <Typography sx={{ mr: "15px" }} color="#800080">
              1099
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Helpline;
