import React, { Component } from 'react';
import DDLogo from '../../assets/DDLogo.png';
import './Profile.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { styled } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BackButton from '../UtilitiesContainer/BackButton';



export default class Profile extends Component {
    render() {
        return (
            <div className="profile-card">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <center>
                    <Card>
                    <BackButton/>
                        <CardContent>
                <img src={DDLogo} alt="logo" className="profilelogo" />
                <h1>Code Differently</h1>
                <p class="title">Programming</p>
                <p>920 Justison Street</p>
                <p>Wilmington, DE 19709</p>
                <a href="https://www.instagram.com/codeDifferently/"><i class="fa fa-instagram"></i></a>
                <a href="https://twitter.com/codedifferently"><i class="fa fa-twitter"></i></a>
                <a href="https://www.linkedin.com/company/codedifferently/"><i class="fa fa-linkedin"></i></a>
                <a href="https://www.facebook.com/codedifferently/"><i class="fa fa-facebook"></i></a>
                
                <center>
                <a href="https://codedifferently.com/#contact-us"><button>Contact</button></a>
                </center>
                </CardContent>
                </Card>
            
                </center>
            </div>

        );
    }
}