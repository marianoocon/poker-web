import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import JoinUi from './Room'
import Join from "./JoinDialog";
import Create from './CreateDialog'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";

export default function Inicio() {
  const [open, setOpen] = useState(false);

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
        <div style={{ textAlign: 'center', fontSize: 20 }}>
          <p>Set up your planning poker in seconds, start estimating story points in scrum poker now</p>

        </div>
        <div className='roomOptions'>
          <Join />


        </div>
        <Create />
      </div>
      <div style={{marginLeft:270, width:500}}>
        <h3 style={{ color: '#4fabc0', marginLeft: 230 }}>How it works</h3>
        <div style={{ marginLeft: 210, textAlign: 'left', display: 'flex', marginBottom:50, marginBottom:50}}>
          <div className='imgWork'>
            <img src="https://www.scrumpoker-online.org/en/assets/images/create_scrum_poker_room.png" alt="" srcset="" style={{ height:'auto', borderWidth: 4, borderColor: "#20232a", width:290, objectFit:'cover'}} />

          </div>
          <div className='howDiv'>

            <p style={{ marginLeft: 20 }}>Create a instant room</p>
            <p style={{ marginLeft: 20, width: 340 }}>Set-up in seconds. Use the instant room feature or sign-up to keep the same room number for future plannings - making the set-up even faster</p>
        </div>
          </div>
        <div style={{ marginLeft: 210, textAlign: 'left', display: 'flex', marginBottom:50 }}>
          <div>

            <p style={{ marginLeft: 20 }}>Invite others</p>
            <p style={{ marginLeft: 20, width: 340 }}>Invite your colleagues to your planning poker by sharing the room id, let them scan the QR code with their mobile or just send them the link.

</p>
          </div>
          <div className='imgWork'>
            <img src="https://www.scrumpoker-online.org/en/assets/images/share_planning_poker.png" alt="" srcset="" style={{ height: 120, borderWidth: 4, borderColor: "#20232a", }} />

          </div>
        </div>
        <div style={{ marginLeft: 210, textAlign: 'left', display: 'flex', marginBottom:50 }}>
          <div className='imgWork'>
            <img src="https://www.scrumpoker-online.org/en/assets/images/play_scrum_poker.png" alt="" srcset="" style={{ height: 120, borderWidth: 4, borderColor: "#20232a", }} />

          </div>
          <div>

            <p style={{ marginLeft: 20 }}>Start estimating stories</p>
            <p style={{ marginLeft: 20, width: 340 }}>Once your team has entered the room, you can see them online and the scrum poker can start. The team can submit estimates, see who has provided estimates and show the results.</p>
          </div>
        </div>
      </div>
    </Router>
  );
}