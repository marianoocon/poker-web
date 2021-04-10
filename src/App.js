import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Room from './components/Room'
import GetRoomService from './services/firestore.service'
import FlatList from 'flatlist-react'
import db from './firebase.config.js'
import Inicio from './components/Home';
function App() {
  const [open, setOpen] = React.useState(false);
  const [rooms, setRooms]= useState([])
  const fetchRooms=async() => {
    const response=db.collection('rooms')
    const data=await response.get();

    data.docs.forEach(item=>{
      setRooms([...rooms, item.data()])
    })
  }
  useEffect(() => {
    fetchRooms();
  }
  , [])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <Router>
      <Switch>
        <div>
          <div className="titleTable">
          </div>
          <Route exact path='/'>
      <a href='#' onClick={GetRoomService}>Show available rooms</a>
      <FlatList list/>
            <Inicio/>
          </Route>
          <Route path='/Room' component={Room}>
            <Room />
          </Route>

        </div>
      </Switch>
    </Router>
  );
}

export default App;
