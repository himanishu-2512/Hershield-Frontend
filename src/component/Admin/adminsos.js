import { useMemo, useState,useEff } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';
import UsersActions from './UserActions';
import Header from './adminHeader'
import axios from "axios";

const Users = () => {
    const [rowId, setRowId] = useState(null);
    const rows = [
        {
          _id: "google.com",
          name: 'Olivier',
          email:'sqjbsqi',
          role: 'Back-end Developer',
          active:'',
          createdAt:'121212'
        },
        {
          _id: "google.co",
          name: 'Olivier',
          email:'sqjbsqi',
          role: 'Back-end Developer',
          active:"",
          createdAt:'121212'
        },
        {
          _id: 3,
          name: 'Olivier',
          email:'sqjbsqi',
          role: 'Back-end Developer',
          active:"",
          createdAt:'121212'
        },
      ];

  const [pageSize, setPageSize] = useState(5);
  const [cum2, setCum2]=useState([])
  var ans;
  const [cum, setCum]=useState([])
  const handleChange= async ()=>{
			await axios.get("https://hershield-backend-production.up.railway.app/api/auth/sosall").then((res) => {
console.log("0")
ans=res.data.complaint
setCum([...ans])
        console.log(ans)
      })
  }
   handleChange();

console.log("anbb",ans, cum)
  const columns = useMemo(
    () => [
      {
        field: 'status',
        headerName: 'Status',
        width: 150,
        type: 'singleSelect',
        valueOptions: ['Pending', 'In Progress', 'Rejected', 'Completed'],
        editable: true,
      },
      {
        field: 'approval',
        headerName: 'Approval',
        width: 150,
        type: 'singleSelect',
        valueOptions: ['Approved', 'Not Approved'],
        editable: true,
      },
      {
        field: 'police',
        headerName: 'Police',
        width: 150,
        type: 'singleSelect',
        valueOptions: ['Ab', 'Not Approved'],
        editable: true,
      },
      {
        field: "_id",
        headerName: "ID",
        width: 150,
        renderCell: (params) => 
          <a href={`/viewregistercomplain/${params.row._id}`}>{`${params.row._id}`}</a>,
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        width: 200,
        renderCell: (params) =>
          moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
      },
      {
        field: 'actions',
        headerName: 'Action',
        width: 200,
        type: 'actions',
        renderCell: (params) => (
          <UsersActions {...{ params, rowId, setRowId }} />
        ),
      },
    ],
    [rowId]
  );
  var t=true;
if(cum)
t=true;
  return (
    <Box>
    <Box sx={{display:'flex', justifyContent:'center'}}>
    <Box sx={{width:'85%'}}>
        <Box sx={{height:'79vh'}}>
      {t && <DataGrid
        columns={columns}
        rows={cum}
        getRowId={(cum) => cum._id}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },}}
          pageSizeOptions={[5, 10, 25]}
        onCellEditStop={(params) => {setRowId(params.id)
        console.log(params)}}
      />}
      </Box>
    </Box>
    </Box>
    </Box>
  );
};

export default Users;

