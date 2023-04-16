import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from './adminHeader'
import BarChart from "./BarChart"
function DashBoard() {
  return (
    
    <Box>
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{width:'83%'}}>
                <Box sx={{display:'flex', justifyContent:'space-evenly', flexDirection:'row'}}>
                    <Box sx={{flexDirection:'column',borderRadius:'10px',width:'20%', margin:'10px', display:'flex', justifyContent:'center', alignItems:'center', background:"linear-gradient(45deg, rgb(251, 87, 141, 0.2), rgb(248, 109, 105, 0.2))"}}>
                        
                        <Typography margin="25px 20px 5px 20px" variant="body1" color="#800080">
                            Pending SOS
                        </Typography>
                        <Typography margin="5px 20px 25px 20px" variant="h6" color="#800080">
                            <strong>4</strong>
                        </Typography>
                    </Box>
                    <Box sx={{borderRadius:'10px',width:'20%', margin:'10px', display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', background:"linear-gradient(45deg, rgb(251, 87, 141, 0.2), rgb(248, 109, 105, 0.2))"}}>
                    <Typography margin="25px 20px 5px 20px" variant="body1" color="#800080">
                            Pending Complaints
                        </Typography>
                        <Typography margin="5px 20px 25px 20px" variant="h6" color="#800080">
                            <strong>16</strong>
                        </Typography>
                    </Box>
                    <Box sx={{borderRadius:'10px',width:'20%', margin:'10px', display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', background:"linear-gradient(45deg, rgb(251, 87, 141, 0.2), rgb(248, 109, 105,0.2))"}}>
                    <Typography margin="25px 20px 5px 20px" variant="body1" color="#800080">
                            Active SOS
                        </Typography>
                        <Typography margin="5px 20px 25px 20px" variant="h6" color="#800080">
                            <strong>2</strong>
                        </Typography>
                    </Box>
                    <Box sx={{borderRadius:'10px',width:'20%', margin:'10px', display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', background:"linear-gradient(45deg, rgb(251, 87, 141, 0.2), rgb(248, 109, 105, 0.2))"}}>
                    <Typography margin="25px 20px 5px 20px" variant="body1" color="#800080">
                            Active Complaints
                        </Typography>
                        <Typography margin="5px 20px 25px 20px" variant="h6" color="#800080">
                            <strong>10</strong>
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-evenly', flexDirection:'row'}}>
                    <Box margin='20px 30px'>
                    <BarChart/>
                    </Box>
                    <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                    <Box sx={{borderRadius:'10px',width:'210px', margin:'0 10px 10px 10px', display:'flex', justifyContent:'center', alignItems:'flex-start',flexDirection:'column', background:"linear-gradient(45deg, rgb(251, 87, 141, 0.2), rgb(248, 109, 105, 0.2))"}}>
                    <Typography margin="25px 20px 5px 50px" variant="body1" color="#800080">
                            Total SOS: <strong>100</strong>
                        </Typography>
                        <Typography margin="5px 20px 5px 50px" variant="body1" color="#800080">
                          Approved: <strong>80</strong>
                        </Typography>
                        <Typography margin="5px 20px 5px 50px" variant="body1" color="#800080">
                          False SOS: <strong>15</strong>
                        </Typography>
                        <Typography margin="5px 20px 25px 50px" variant="body1" color="#800080">
                          Rejected: <strong>5</strong>
                        </Typography>
                    </Box>
                    <Box sx={{borderRadius:'10px',width:'210px', margin:'10px', display:'flex', justifyContent:'center', alignItems:'flex-start',flexDirection:'column', background:"linear-gradient(45deg, rgb(251, 87, 141, 0.2), rgb(248, 109, 105, 0.2))"}}>
                    <Typography margin="25px 20px 5px 50px" variant="body1" color="#800080">
                            Complaints: <strong>200</strong>
                        </Typography>
                        <Typography margin="5px 20px 5px 50px" variant="body1" color="#800080">
                          Approved: <strong>150</strong>
                        </Typography>
                        <Typography margin="5px 20px 5px 50px" variant="body1" color="#800080">
                          Pending: <strong>26</strong>
                        </Typography>
                        <Typography margin="5px 20px 25px 50px" variant="body1" color="#800080">
                          Rejected: <strong>24</strong>
                        </Typography>
                    </Box>
                    <Box sx={{borderRadius:'10px',width:'210px', margin:'10px', display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', background:"linear-gradient(45deg, rgb(251, 87, 141, 0.2), rgb(248, 109, 105, 0.2))"}}>
                    <Typography margin="25px 20px 25px 20px" variant="body1" color="#800080">
                            Total Users: <strong>279</strong>
                        </Typography>
                    </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    </Box>
  )
}

export default DashBoard