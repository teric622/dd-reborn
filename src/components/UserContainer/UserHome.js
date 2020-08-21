import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Group-1.png';
import './UserHome.css';

export default class UserHome extends Component{
    render() {
        
        return(

            <div className="user-home">
                 
                <div className="user-container">
                    <center>
                <div className="userLogo">
                    <img src={logo} alt="logo" />
                  
                    </div>
                    </center>
                    <center>
                    <hr/>
                    <div className ="Border">
                    <div className ="MyPro">
                        <br/>
                        <h5><Link to='/user/Profile' className="user-link">Profile</Link></h5>
                
                    </div>
                    </div>
                    </center>
                    <center>
                    <hr/> 
                    <br/>
                            <div className = "MyDon">
                    <h5><Link to='/user/mydonations' className="user-link">My Donations</Link></h5>
                            </div>
                    <hr/> 
                    <br/>
                   
                    <div className = "MyPay">
                    <h5><Link to="user/payments" className="user-link">Payment</Link></h5>
                    </div>
                    </center>
                    <center>
                    <hr/>
                    <br/>
                            <div className = "MySet">
                    <h5>Settings</h5>
                      
                    <br/>
                    <br/>
                    <Link to="/user/create" id="user-home-link"><button>Create A Donation</button></Link>
                    </div>
                    </center>
                </div>
                

            </div>

        );
    }
}