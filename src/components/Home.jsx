import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dumb from './joindummy'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from "react-router-dom";

export default function Inicio() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Router>

    <div>
        <div className="titleTableLand">
          Poker Table
    </div>
    <div className='roomOptions'>
      <div>
        <Link to='/Dumb'>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{marginTop:30}} >
        Join Room
      </Button>

        </Link>
          </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To enter a room please insert a code.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Room Code"
            type="number"
            fullWidth
            />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          <a href='/Dumb' style={{textDecoration:'none'}}>
            <Button  color="primary">
              Join
          </Button>

            </a>
        </DialogActions>
      </Dialog>

      </div>
      <div>

      <Link to='/Dumb'>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{marginTop:30, alignSelf:'center'}} >
        Create room
      </Button>

        </Link>
        
    </div>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            awawda
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Room Code"
            type="number"
            fullWidth
            />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          <a href='/dumb' style={{textDecoration:'none'}}>
            <Button  color="primary">
              Join
          </Button>

            </a>
        </DialogActions>
      </Dialog>
      </div>
            </Router>
  );
}