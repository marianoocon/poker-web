import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
function App() {
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
        <div className="titleTable">
          Poker Table
    </div>
        <Switch>
          <Route path='/dumb'>
            testtext
          </Route>


        </Switch>

        <div className='roomOptions'>
          <Button variant="contained" color="primary" style={{ marginTop: 30 }} onClick={handleClickOpen}>
            <Link to='#' style={{ marginTop: 10, fontSize: 20, textDecoration: 'none', color: 'white' }}>Join room</Link>
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Join Room</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To enter a room, please enter the code here.
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


            </DialogActions>
          </Dialog>

          <Button variant="contained" color="primary" style={{ marginTop: 30 }} onClick={handleClickOpen}>
            <Link to='#' style={{ marginTop: 10, fontSize: 20, textDecoration: 'none', color: 'white' }}>Create room</Link>
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create Room</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To create a room, please enter the necessary information.
          </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Room Name"
                type="text"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Users"
                type="number"
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
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="E-Mail"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
          </Button>
              <Link to='/dumb'>
                <Button>
                  Join

            </Button>
              </Link>
            </DialogActions>
          </Dialog>


        </div>

      </div>
    </Router>
  );
}

export default App;
