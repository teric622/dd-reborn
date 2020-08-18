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
import "./DonationExplorer.css";
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="donation-explorer-page">
    <div className="Ebutton">
      <Link to="/user" id="user-home-link"><button>Current User</button></Link>
      </div>
      <center>
   
              <div className="Dfill">  
           <p>Donations</p>
           </div>
           </center>
           <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.charities.org/sites/default/files/NKH_2018_Endorsed_90_10_rgb_0.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            No Kids Hungry
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            America’s kids need us. The coronavirus is closing schools
            nationwide, and millions of vulnerable children are losing the
            school meals they depend on.
          </Typography>
        </CardContent>
      </CardActionArea>
      
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
        <ProgressBar />
      </CardActions>
      <CardContent className="progresstext">
        <Typography className="alignleft" variant="body2" color="textSecondary"component="p">
          215 <br /> Donors
        </Typography>

        <Typography className="aligncenter" variant="body2" color="textSecondary"component="p">
        $2500 <br /> Raised
        </Typography>
        <Typography className="alignright" variant="body2" color="textSecondary"component="p">
          $10000 <br /> Goal
        </Typography>
      </CardContent>
    </Card>

  </div>
  


  );
}
