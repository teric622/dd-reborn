import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ProgressBar from "./progressbar";
import "./DonationExplorer.css";
import nkh from "../../assets/nkhlogo.png";
import {Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';




export default class DonationCard extends Component {

    constructor(props){
        super(props);
        this.state={
            title: this.props.title,
            goal: this.props.goal,
            raised: this.props.raised,
            donors: this.props.donors,
            description: this.props.description,            
        }        
    
    }    

    render() {
        
        const Title = this.state.title;
        const Goal = this.state.goal;
        const Raised = this.state.raised;
        const Donors = this.state.donors;
        const Description = this.state.description;
     
        return (
            <div className="donation-card">

                <Card>
                    <CardActionArea>
                       <img src={nkh} className="donation-img"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {Title}
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               {Description}
                        </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions>

                        <ProgressBar className="progress-bar" />

                    </CardActions>

                    <CardContent className="progresstext">
                        <Typography className="alignleft" variant="body2" color="textSecondary" component="p">
                        {Donors} <br /> Donors
                    </Typography>

                        <Typography className="aligncenter" variant="body2" color="textSecondary" component="p">
                        {Raised}  <br /> Raised
                    </Typography>
                        <Typography className="alignright" variant="body2" color="textSecondary" component="p">
                        {Goal}  <br /> Goal
                    </Typography>
                    </CardContent>
                    <Dropdown  
                                alignRight
                                title="Dropdown right"
                                id="dropdown-menu-align-right"
                            >
                           
                                <Dropdown.Toggle variant="success" id="dropdown-basic-button">
                                     ● ● ●
                                </Dropdown.Toggle>

                                <Dropdown.Menu id="dropdown-menu">
                                    <Dropdown.Divider className = "dd-divider"></Dropdown.Divider>
                                    <Dropdown.Item as = "button" className = "dd-item">View Charity</Dropdown.Item>
                                    <Dropdown.Divider className = "dd-divider"></Dropdown.Divider>
                                    <Link to='/user/payments'><Dropdown.Item as = "button" className = "dd-item" >Donate</Dropdown.Item></Link>
                                    <Dropdown.Divider className = "dd-divider"></Dropdown.Divider>
                                    <Dropdown.Item as = "button" className = "dd-item" id = "dd-delete">✖ Remove from Favorites</Dropdown.Item>
                                    <Dropdown.Divider className = "dd-divider"></Dropdown.Divider>
                                </Dropdown.Menu>
                            </Dropdown>
                </Card>
               
            </div>
        );
    }
}