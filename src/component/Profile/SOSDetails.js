import { Box, Typography } from '@mui/material'
import React from 'react'

function SOSDetails() {
  return (
    <Box sx={{display:'flex', justifyContent:'center'}}>
	<Box sx={{width:'80%', display:'flex',background:'', justifyContent:'flex-start' }}>
	<Box sx={{display:'flex', justifyContent:'center', width:'100%'}}>
	<Box
          sx={{
            background:
              "linear-gradient(45deg, rgb(251, 87, 141, 0.3), rgb(248, 109, 105, 0.3))",
            width: "15%",
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
            <strong> S.O.S </strong>
          </Typography>
        </Box>
		</Box>
	</Box>
	</Box>
  )
}

export default SOSDetails