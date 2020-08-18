import React, { Component } from 'react';
import './UserDonation.css'; 

//Importing Charity Images
import rmdlogo from '../../assets/ronaldmcdonald.png';
import nkhlogo from '../../assets/nkhlogo.png';

export default class MyDonations extends Component {
    render() {
        return (
            <div className="donation-home">
               
                <div className="donation-title">
                    <h2>My Donations</h2>
                </div>

                <div className="donationlists">
                    <div className = "nkh">
                        <p className="donation-name">No kid hungry</p>
                        <br></br>
                        
                        <div>   
                            <img src={nkhlogo} alt = "logo" className = "charity-logo" ></img>
                        </div>
                        
                        <div className = "outside-progress">
                            <div className = "donation-progress" id ="nkd-progress"></div>
                        </div>

                        <div className="charity-dropdown">
                            <p className="nkd-amount-donated">$48 Donated</p>
                            <p className="nkd-dropdown-dots">●●●</p>
                        </div>

                    </div>

                    <div className="rmd">
                        <p className="donation-name">Ronald McDonald</p>
                         <div>
                            <img src={rmdlogo} alt = "logo" className = "charity-logo" />
                        </div>

                        <div className = "outside-progress">
                            <div className = "donation-progress" id = "rmd-progress"></div>
                        </div>

                        <div className = "charity-dropdown">
                            <p className="nkd-amount-donated">$124 Donated</p>
                            <p className="nkd-dropdown-dots">●●●</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}