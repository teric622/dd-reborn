import React, { Component } from 'react';
import DDLogo from '../../assets/Group-1.png';
import {Link} from 'react-router-dom';
import './Welcome.css';

export default class Welcome extends Component {
    render() {

        return (
            <div className="welcome">
                <div className="welcome-info">
                    <center>
                    {/* <h1>Donate</h1>
                    <h2>Differently</h2> */}
                    </center>
                    <div>
                    <center>
                    <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    <img src={DDLogo} alt="logo" className="welcomelogo" />
                    </center>
                    <center>
                    <br></br>
                        <br></br>
                        <div className = "Wbutton">
                   <Link to='/explorer' ><btn className="button">Enter</btn></Link>
                  
                   </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </center>
                </div>
                
                </div>
            </div>
        );
    }
}