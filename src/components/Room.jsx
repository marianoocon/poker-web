import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Redirect
} from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, ) {
  return { name,  };
}

const rows = [
  createData('?'),
  createData('5'),
  createData('0.5'),
  createData('0'),
  createData('8'),
];
function Room() {

  return (
    <div>
      <div className="titleTable">
        Submit estimate
    </div>
      <div className='members'>

        <Card className='memberCard' variant='outlined'>
          <CardContent>
            <h1>?</h1>
          </CardContent>
          <CardActions>
            <Button style={{ marginLeft: 0 }} size="large" variant='outlined'>Submit</Button>
          </CardActions>
        </Card>

        <Card className='memberCard' variant='outlined'>
          <CardContent>
            <h1>0</h1>
          </CardContent>
          <CardActions>
            <Button style={{ marginLeft: 0 }} size="large" variant='outlined'>Submit</Button>
          </CardActions>
        </Card>

        <Card className='memberCard' variant='outlined'>
          <CardContent>
            <h1>0.5</h1>
          </CardContent>
          <CardActions>
            <Button style={{ marginLeft: 0 }} size="large" variant='outlined'>Submit</Button>
          </CardActions>
        </Card>




      </div>
      <div className='members'>

        <Card className='memberCard' variant='outlined'>
          <CardContent>
            <h1>5</h1>
          </CardContent>
          <CardActions>
            <Button style={{ marginLeft: 0 }} size="large" variant='outlined'>Submit</Button>
          </CardActions>
        </Card>

        <Card className='memberCard' variant='outlined'>
          <CardContent>
            <h1>8</h1>
          </CardContent>
          <CardActions>
            <Button style={{ marginLeft: 0 }} size="large" variant='outlined'>Submit</Button>
          </CardActions>
        </Card>

        <Card className='memberCard' variant='outlined'>
          <CardContent>
            <h1>13</h1>
          </CardContent>
          <CardActions>
            <Button style={{ marginLeft: 0 }} size="large" variant='outlined'>Submit</Button>
          </CardActions>
        </Card>
      </div>
      <Link to='/'>
        <Button color="primary" style={{ marginLeft: 710, marginTop: 20 }}>
          volver
          </Button>

      </Link>
      <p style={{ textAlign: 'center' }}>____________________________________________________________________________________________________________</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3 style={{ marginLeft: 20 }}>Results</h3>
        <Button variant="contained" style={{ backgroundColor: '#4fabc0', color: 'white', marginRight: 30, height: 40, marginTop: 20 }} size='small'>
          Show
</Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Button style={{ marginLeft: 20, height: 40 }} size="small" variant='outlined'>Clear room</Button>
        <Button variant="contained" style={{ backgroundColor: 'white', color: '#4fabc0', marginRight: 30, height: 40, marginTop: 20 }} size='small'>
          Delete estimates
</Button>
      </div>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">Story Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Room;