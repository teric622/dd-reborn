import React, { Component } from "react"; 
//import components 
import Checkout from './stripe-checkout';

import '../../App.css';
//import logo
import logo from '../../assets/Group-1.png';

//import stylesheet
import './Payment.css';
import BackButton from "../UtilitiesContainer/BackButton";


export default class Payment extends Component {
   
  constructor () {
    super ()
    const visa = require('../../assets/visa-icon.png');
    const mastercard = require('../../assets/mastercard-icon.png');
    const amex = require('../../assets/amex-icon.png');
    const discover = require('../../assets/discover-icon.png');
    const paypal = require('../../assets/paypal-icon.png');


    this.state = {
        index: 0,
        cardIndex: "",
        cardNetworks: [visa, mastercard, amex, discover, paypal]
        }
    };

    cardNetworkSelector () {
        this.setState ({
        })
    };

    render() {
        return(
            <div className='payment'>

                <div className= 'row-1'>
                    <BackButton/>
                    <center><div className= 'col-1'><h1> Payment </h1></div></center>
                </div> 
            
                <center>
                    <div className='border-wrap' >
                        <div className='payment-card'>
                            <div className='row-2'>
                                <div className='col-2' id='logo'><img src={logo}  className='logo' alt="logo"/></div>
                            </div>
                            <div className= 'row'>
                                <Checkout/>
                            </div>
                        </div>
                    </div>
                </center>
                <br/>
                <br/>
                <hr/>               
               
            </div>
        );
    }
}