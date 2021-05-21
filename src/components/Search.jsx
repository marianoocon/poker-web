import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import db from '../firebase.config'
import FirestoreService from '../services/firestore.service'
import {
  BrowserRouter as Router,
  Link,
  Redirect
} from "react-router-dom";

export default function Search() {

  const [rooms, setRooms] = useState([]);
  const [data, setData] = useState([])
  const [open, setOpen] = React.useState(false);

  const fetchRooms=async()=>{
    const response=db.collection('rooms');
    const data=await response.get();
    data.docs.forEach(item=>{
     setRooms([...rooms,item.data()])
    })
    console.log(rooms)
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <Button variant="contained" color="primary" onClick={fetchRooms} style={{ marginTop: 30, marginright:10, backgroundColor:'#4eabc0'}} >
          Search Room
      </Button>
      </div>




    </div>

  )
}