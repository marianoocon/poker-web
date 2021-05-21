import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FirestoreService from "../services/firestore.service";
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  BrowserRouter as Router,
  Link,
  Redirect
} from "react-router-dom";

export default function Create() {
  const [open, setOpen] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [company, setCompany] = React.useState("")
  const [buttonOff, setButtonOff] = React.useState(true)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onCreate = async (code, company) => {
    const room = await FirestoreService.createRoom(code, company)
  }

  return (
    <div>

      <div>
        <Link to='Room'>
          <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ marginTop: 0, backgroundColor:'#4eabc0' }} >
            Create Room
      </Button>

        </Link>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create room</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a room please enter the next info
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Code"
            type="string"
            value={code}
            fullWidth
            onChange={(e) => setCode(e.target.value)}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Company"
            type="string"
            fullWidth
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button disabled={!(code !== "" && company !== "")} onClick={() => onCreate(code, company)} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>


    </div>

  )
}