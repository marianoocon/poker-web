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
import Room from './components/Room'
import Inicio from './components/Home';
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
      <Switch>
        <div>
          <div className="titleTable">
          </div>
          <Route exact path='/'>
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
