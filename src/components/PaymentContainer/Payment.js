import React, { Component } from "react"; 
import ReactDOM from "react-dom";

//import components 
import Checkout from './stripe-checkout';

import '../../App.css';
//import logo
import logo from '../../assets/donate-differently-logo.png';

//import icons / material ui
import { styled } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';  
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//import bootstrap
import Row from 'react-bootstrap/Row';

const BackButton = styled(ArrowBackIcon)({
    clickableIcon: {
      color: 'black',
      '&:hover': {
      color: 'red',
      },
    },
  });

export default class Payment extends Component {
   
  constructor () {
    super ()
    const visa = require('../../assets/icons/visa-icon.png');
    const mastercard = require('../../assets/icons/mastercard-icon.png');
    const amex = require('../../assets/icons/amex-icon.png');
    const discover = require('../../assets/icons/discover-icon.png');
    const paypal = require('../../assets/icons/paypal-icon.png');


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
                    <div className= 'col-1'><BackButton onClick={event => window.location.href='../UserContainer/UserDonations'} /></div>
                    <div className= 'col-1'><h1> Payment </h1></div>
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
                <hr/>
                
                <div className='row-3'> 
                    <div className= 'col-3'><h3>Card ending in **3751</h3></div>  
                    <div className= 'col-3'><MoreHorizIcon  onClick={event => this.cardNetworkSelector}/></div>
                </div>
               
            </div>
        );
    }
}