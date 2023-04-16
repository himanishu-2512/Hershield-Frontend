import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import Header from "../component/Home/Header";
function Resources() {
  const paperSX = {
    width: "95%",
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
            width: "40%",
            borderRadius: " 30px 0 30px 0",
          }}
        >
          <Typography
            variant="h6"
            sx={{ margin: "20px", display: "flex", justifyContent: "center" }}
            color="#800080"
          >
            <strong> Acts And Rules Under Sexual Harassment:</strong>
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
              <strong>
                The Sexual Harassment of Women at Workplace (Prevention,
                Prohibition, and Redressal) Act 2013
              </strong>
            </Typography>
            <Button variant="text" color="secondary" sx={{ mr: "15px" }}>
              Download
            </Button>
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
              <strong>
                The Sexual Harassment of Women at Workplace (Prevention,
                Prohibition and Redressal) Act, 2013 - Hindi{" "}
              </strong>
            </Typography>
            <Button variant="text" color="secondary" sx={{ mr: "15px" }}>
              Download
            </Button>
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
              <strong>
                The Sexual Harassment of Women at Workplace (Prevention,
                Prohibition, and Redressal) Rules 2013{" "}
              </strong>{" "}
            </Typography>
            <Button variant="text" color="secondary" sx={{ mr: "15px" }}>
              Download
            </Button>
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
              <strong>
                Alignment of Service Rules with Sexual Harassment of Women at
                Workplace (Prevention, Prohibition and Redressal) Act, 2013 as
                per DoPT Notification{" "}
              </strong>{" "}
            </Typography>
            <Button variant="text" color="secondary" sx={{ mr: "15px" }}>
              Download
            </Button>
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
              <strong>
                Step wise Inquiry Procedure for complaints made under Sexual
                Harassment of Women at Workplace (Prevention, Prohibition and
                Redressal) Act, 2013{" "}
              </strong>{" "}
            </Typography>
            <Button variant="text" color="secondary" sx={{ mr: "15px" }}>
              Download
            </Button>
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
              <strong>
                Appeal Process under Sexual Harassment of Women at Workplace
                (Prevention, Prohibition and Redressal) Act, 2013 as prescribed
                by DoPT{" "}
              </strong>{" "}
            </Typography>
            <Button variant="text" color="secondary" sx={{ mr: "15px" }}>
              Download
            </Button>
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
              <strong>
                DoPT Notification regarding inquiry of a person senior to ICC
                Chairperson.{" "}
              </strong>{" "}
            </Typography>
            <Button variant="text" color="secondary" sx={{ mr: "15px" }}>
              Download
            </Button>
          </Box>
        </Paper>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Divider
          sx={{
            width: "70%",
            height: "2px",
            background: "linear-gradient(45deg, #FB578D, #F86D69)",
          }}
        />
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
            width: "40%",
            borderRadius: " 30px 0 30px 0",
          }}
        >
          <Typography
            variant="h6"
            sx={{ margin: "20px", display: "flex", justifyContent: "center" }}
            color="#800080"
          >
            <strong> Awareness of Sexual Harassment:</strong>
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
              <strong>
                The Sexual Harassment of Women at Workplace (Prevention,
                Prohibition, and Redressal) Act 2013
              </strong>
            </Typography>
            <Button variant="text" color="secondary" sx={{ mr: "15px" }}>
              Download
            </Button>
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
              <strong>
                The Sexual Harassment of Women at Workplace (Prevention,
                Prohibition and Redressal) Act, 2013 - Hindi{" "}
              </strong>{" "}
            </Typography>
            <Button variant="text" color="secondary" sx={{ mr: "15px" }}>
              Download
            </Button>
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
              <strong>
                The Sexual Harassment of Women at Workplace (Prevention,
                Prohibition, and Redressal) Rules 2013{" "}
              </strong>{" "}
            </Typography>
            <Button variant="text" color="secondary" sx={{ mr: "15px" }}>
              Download
            </Button>
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
              <strong>
                Alignment of Service Rules with Sexual Harassment of Women at
                Workplace (Prevention, Prohibition and Redressal) Act, 2013 as
                per DoPT Notification{" "}
              </strong>{" "}
            </Typography>
            <Button variant="text" color="secondary" sx={{ mr: "15px" }}>
              Download
            </Button>
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
              <strong>
                Step wise Inquiry Procedure for complaints made under Sexual
                Harassment of Women at Workplace (Prevention, Prohibition and
                Redressal) Act, 2013{" "}
              </strong>{" "}
            </Typography>
            <Button variant="text" color="secondary" sx={{ mr: "15px" }}>
              Download
            </Button>
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
              <strong>
                Appeal Process under Sexual Harassment of Women at Workplace
                (Prevention, Prohibition and Redressal) Act, 2013 as prescribed
                by DoPT{" "}
              </strong>{" "}
            </Typography>
            <Button variant="text" color="secondary" sx={{ mr: "15px" }}>
              Download
            </Button>
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
              <strong>
                DoPT Notification regarding inquiry of a person senior to ICC
                Chairperson.{" "}
              </strong>{" "}
            </Typography>
            <Button variant="text" color="secondary" sx={{ mr: "15px" }}>
              Download
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Resources;
