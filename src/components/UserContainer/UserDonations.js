import React, { Component } from 'react';
import './UserDonation.css'
import {Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom';

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

                        <div className="charity-dropdown" >
                             
                            <p className="nkd-amount-donated">$48 Donated</p>
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
                                    <Link to='user/payments'><Dropdown.Item as = "button" className = "dd-item" >Donate Again</Dropdown.Item></Link>
                                    <Dropdown.Divider className = "dd-divider"></Dropdown.Divider>
                                    <Dropdown.Item as = "button" className = "dd-item" id = "dd-delete">✖ Remove from Favorites</Dropdown.Item>
                                    <Dropdown.Divider className = "dd-divider"></Dropdown.Divider>
                                </Dropdown.Menu>
                            </Dropdown>
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
                                    <Dropdown.Item as = "button" className = "dd-item" ><Link to='/user/payments'>Donate Again</Link></Dropdown.Item>
                                    <Dropdown.Divider className = "dd-divider"></Dropdown.Divider>
                                    <Dropdown.Item as = "button" className = "dd-item" id = "dd-delete">✖ Remove from Favorites</Dropdown.Item>
                                    <Dropdown.Divider className = "dd-divider"></Dropdown.Divider>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}