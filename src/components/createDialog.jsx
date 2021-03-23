import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    BrowserRouter as Router,
    Link,
    Redirect
  } from "react-router-dom";

export default function Create() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <div>

        <div>
        <Link to='/'>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{marginTop:30, marginLeft:677}} >
        Create room
      </Button>

        </Link>
          </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a room please enter the next info
          </DialogContentText>
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Room Name"
              type="string"
              fullWidth
              />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Duration"
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

    )
}   