import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProgressBar from "./progressbar";

import { Link } from 'react-router-dom';
import "./DonationExplorer.css";

import Posts from "../postsComponent/Posts";



import "./DonationExplorer.css";
import { Link } from 'react-router-dom';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Popup from 'reactjs-popup';
import UserHome from "../UserContainer/UserHome";



const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 160   

  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="donation-explorer-page">
    <div className="Ebutton">

      <Popup trigger={<button className="popup-btn" ><ListAltIcon fontSize="large" /></button>}
      position="bottom left"
    >
      <UserHome/>
      </Popup>

      </div>
      <center>
   
              <div className="Dfill">  

              <h2>Recommended</h2>
    <div className="explore">
        <Card className={classes.root}>
=======
    <Card className={classes.root}>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.charities.org/sites/default/files/NKH_2018_Endorsed_90_10_rgb_0.png"

          title="NKH"
        />
        <CardContent>
          <Typography variant="h5" component="h2" className="title">
            No Kids Hungry
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="progress">
        <ProgressBar />
      </CardActions>
      <CardContent className="progresstext">
        <p className="alignleft" variant="body2" color="textSecondary"component="p">
          215 <br /> Donors
        </p>

        <p className="aligncenter" variant="body2" color="textSecondary"component="p">
        $2500 <br /> Raised
        </p>
        <p className="alignright" variant="body2" color="textSecondary"component="p">
          $10000 <br /> Goal
        </p>
      </CardContent>
    </Card>
    <br></br>
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://s3.amazonaws.com/geotix-production-uploads/uploads/d3ffb3cf-fba4-4320-a159-11d7eac5fea2.png"
          title="NKH"
        />
        <CardContent>
          <Typography variant="h5" component="h2" className="title">
            Ronald McDonald Charities House
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="progress">
        <ProgressBar />
      </CardActions>
      <CardContent className="progresstext">
        <p className="alignleft" variant="body2" color="textSecondary"component="p">
          450 <br /> Donors
        </p>

        <p className="aligncenter" variant="body2" color="textSecondary"component="p">
        $3870 <br /> Raised
        </p>
        <p className="alignright" variant="body2" color="textSecondary"component="p">
          $9000 <br /> Goal
        </p>
      </CardContent>
    </Card>
    
    <br></br>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/en/e/e7/Logo_for_the_Environmental_Defense_Fund_-_white_background.jpg"
          title="EDF"
        />
        <CardContent>
          <Typography variant="h5" component="h2" className="title">
            Environmental Defense Fund
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="progress">
        <ProgressBar />
      </CardActions>
      <CardContent className="progresstext">
        <p className="alignleft" variant="body2" color="textSecondary"component="p">
          1450 <br /> Donors
        </p>

        <p className="aligncenter" variant="body2" color="textSecondary"component="p">
        $9067 <br /> Raised
        </p>
        <p className="alignright" variant="body2" color="textSecondary"component="p">
          $10000 <br /> Goal
        </p>
      </CardContent>
    </Card>
  </div>
<br/>
<br/>
<br/>
  <Posts></Posts>
  </div>
  );
}