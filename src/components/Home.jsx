import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import JoinUi from './Room'
import Join from "./JoinDialog";
import Create from './CreateDialog'
import Search from './Search.jsx'
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import { Menu, MenuItem } from '@material-ui/core';

export default function Inicio() {

  const [open, setOpen] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize:15,
      marginLeft:20
    },
  }));


  const handleClickOpen = () => {
    setOpen(true);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const classes = useStyles();

  return (
    <Router>

      <div>
        <div className={classes.root}>
          <div style={{backgroundColor:'#e8ebee', height:80}}>
          <Join />

          </div>
          <AppBar position="static" style={{backgroundColor:'white', color:'#4eabc0',}}>
            <Toolbar style={{marginLeft:220}}>
              <img src="https://www.scrumpoker-online.org/en/assets/images/scrum-poker.png" alt="" srcset="" style={{height:36}}/>
              <Typography variant="h6" className={classes.title}>
              ScrumPoker-online.org 
          </Typography>
              <Button color="inherit">Sign Up</Button>
              <Button color="inherit">Login</Button>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
            </Toolbar>
          </AppBar>
        </div>
        <div style={{ textAlign: 'center', fontSize: 20 }}>
          <p style={{ fontSize: 35 }}>Set up your planning poker in seconds, start estimating story points in scrum poker now</p>

        </div>

        <div className='roomOptions'>
          <Create />
          <Search />


        </div>
      </div>
      <div style={{ marginLeft: 170, width: 1200 }}>
        <h3 style={{ color: '#4fabc0', marginLeft: 230 }}>How it works</h3>
        <div style={{ marginLeft: 210, textAlign: 'left', display: 'flex', marginBottom: 50, marginBottom: 50 }}>
          <div className='imgWork'>
            <img src="https://www.scrumpoker-online.org/en/assets/images/create_scrum_poker_room.png" alt="" srcset="" style={{ height: '190px', borderWidth: 4, borderColor: "#20232a", width: 310, objectFit: 'cover', marginLeft: 20, marginTop:4}} />

          </div>
          <div className='howDiv'>

            <p style={{ marginLeft: 20 }}>Create a instant room</p>
            <p style={{ marginLeft: 20, width: 340 }}>Set-up in seconds. Use the instant room feature or sign-up to keep the same room number for future plannings - making the set-up even faster</p>
          </div>
        </div>
        <div style={{ marginLeft: 210, textAlign: 'left', display: 'flex', marginBottom: 50 }}>
          <div>

            <p style={{ marginLeft: 20 }}>Invite others</p>
            <p style={{ marginLeft: 20, width: 340 }}>Invite your colleagues to your planning poker by sharing the room id, let them scan the QR code with their mobile or just send them the link.

</p>
          </div>
          <div className='imgWork'>
            <img src="https://www.scrumpoker-online.org/en/assets/images/share_planning_poker.png" alt="" srcset="" style={{ height: 120, borderWidth: 4, borderColor: "#20232a", marginLeft: 80 }} />

          </div>
        </div>
        <div style={{ marginLeft: 210, textAlign: 'left', display: 'flex', marginBottom: 50 }}>
          <div className='imgWork'>
            <img src="https://www.scrumpoker-online.org/en/assets/images/play_scrum_poker.png" alt="" srcset="" style={{ height: 120, borderWidth: 4, borderColor: "#20232a", marginLeft: 90 }} />

          </div>
          <div>

            <p style={{ marginLeft: 20 }}>Start estimating stories</p>
            <p style={{ marginLeft: 20, width: 340 }}>Once your team has entered the room, you can see them online and the scrum poker can start. The team can submit estimates, see who has provided estimates and show the results.</p>
          </div>
        </div>
        <div style={{marginLeft:150}}>
          <h3 style={{ fontWeight: 400 }}>How to make story estimations successful?</h3>
          <p style={{width:800}}>Everyone who has worked with Scrum, SAFE or other agile methodologies that rely on story-point estimations to judge the complexity of a feature knows how tricky these planning poker sessions can be. At the same time everyone is painfully aware how crucial a good planning session is on one hand to make sure that the agile team agree on the acceptance criteria, the definition of done and overall scope and on the other hand to allow the product owner to make an informed decision when prioritizing the backlog.</p>

          <p style={{width:800}}>So how exactly do you make a scrum poker session successful? To understand the recipe for successful planning we will look at what a well prepared user story is, how to present it, some best practices for the poker itself and how to deal with discrepancies between estimates.</p>

          <p>Before estimating make sure that the user story is “ready” and was discussed</p>

          <p style={{width:800}}>This might be a straight-forward advice but to have a successful estimation session, it is important that the feature or user story that we want to estimate is ready. So how do we get a story ready? In Scrum this is generally done during the refinement sessions, where the product owner together with the development (and often under the guidance of a scrum master) discuss the details of the story.</p>

          <p style={{width:800}}>In our team, this starts with the product owner presenting in a succinct manner, what the user wants to be able to do and what value for him is. This second part is especially important as it should give a sense why what we are doing matters. The most widespread structure for a user story is “As a …, I want to do …, so that …”.</p>

          <p style={{width:800}}>Often the product owner will also have written down some high-level acceptance criteria, that are then discussed with the development team. Maybe counterintuitively, good acceptance criteria are high-level conditions that would satisfy the customer and allow them to achieve the value defined and not finely detailed requirement description of the solution. Together the scrum team discusses the the user story looking at the acceptance criteria and might decide to add or remove some of them or clarifying elements that are clearly out of scope.</p>
          <p style={{width:800}}>Once everyone agrees on the acceptance criteria and the definition of done, we can move on to the actual estimation using in our case the Scrum Poker (also called Planning Poker).</p>
          
          <p>Estimating using scrum poker</p>

          <p style={{width:800}}>This is the moment where the estimation tool on scrumpoker-online.org becomes helpful. We recommend opening the session at the beginning of the refinement or planning session and have all members of the scrum team enter the room using the room ID provided. Once the user story has been discussed and all question answered all the members of the development team start estimating the complexity of the story by giving it story points. Ok, story points and complexity, you make that sound easy… but what exactly are story points and how do I know how many story points should be assigned to a story?</p>

          <p>Story Points</p>

          <p style={{width:800}}>Story points in scrum are an abstract measure to represent the complexity of implementing a user story. In general this “complexity” is related of course to effort, but also to risk and difficulties foreseen. The measure is abstract, because it cannot be related to a unit of time such as person days or hours.</p>

          <p style={{width:800}}>Scrumpoker-online.org uses the fibonacci sequence (1,2,3,5,8,13,21) to estimate stories. It is also very helpful to have a reference user story that all the members of the scrum team have a good understanding of and assign it an estimate. The team can then start estimating other user stories by comparing them to the reference user story. So for example if the reference user story was estimated at 3 points, a story that has only 1 point should be three times less complex. As such the absolute value of the stories are less important than their relation to each other. And remember to stay agile and start experimenting, the more stories the team estimates the better they will get at it.</p>

          <p>Uncovering the results</p>

          <p style={{width:800}}>After everyone has turned in their estimates, the product owner or scrum master shows the results and if they all match, the story has been successfully estimated. If on the other hand there are some discrepancies, the members that are the furthest apart can start discussing why their estimates diverge. Most often this is an indication that there is not yet a common understanding of everything that this story entails. This discussion can lead to redefining the acceptance criteria and this is absolutely normal, this is afterall an iterative process.</p>

          <p>Ok great, I now have an estimate but why does it matter?</p>

          <p style={{width:800}}>A well estimated story helps greatly for the product owner to better judge if the value of a user story (or new functionality) is worth the complexity and effort to implement it. Furthermore it allows to get a better grasp on planning a sprint: after the first sprint, the team will know exactly how many story points they were able to achieve, thus the following sprint should be filled with a similar sum of story points. As the team gains knowledge and becomes more efficient, delivery of an amount of story points could be achieved faster than previously. But this is the second step – for now start estimating during your planning poker session using scrumpoker-online.org and enjoy the pleasure of trying to agree on an estimate… You will see, it will do wonders for producing a shared understanding of what is expected.</p>
        </div>
      </div>

      <footer style={{height:10, borderTop:1, borderTopColor:'black', borderTopStyle:'solid', position:'-webkit-sticky',position:'sticky', top:0, marginBottom:0}}></footer>
      <div style={{borderTop:20, marginLeft:130, borderBottom:1, marginBottom:6,}}>
        <Button style={{backgroundColor:'white', border:0, fontSize:15, bordertop:2, borderTopColor:'black'}}>About</Button>
        <Button style={{backgroundColor:'white', border:0, fontSize:15, marginLeft:478}}>Feedback</Button>
        <Button style={{backgroundColor:'white', border:0, fontSize:15, marginLeft:520}}>Privacy</Button>
        </div>
        <footer/>
    </Router>
  );
}