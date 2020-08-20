import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './DonationExplorer.css';
import Barba from '@barba/core';

var FadeTransition = Barba.BaseTransition.extend({
        start: function() {
            Promise.all([this.newContainerLoading, this.fadeOut()]).then(
                this.fadeIn.bind(this)
            );
        },
        fadeOut: function() {

        },
        fadeIn: function() {
            this.newContainer.classList.add("slide-in");

            var that = this;

            this.newContainer.addEventListener('animationend', function(){
                that.newContainer.classList.remove("slide-in");
                that.done();
            });
        }
    });
    Barba.Pjax.getTransition = function() {
        return FadeTransition;
    }

export default class DonationExplorer extends Component{

    render(){
      
        return(
            <div className="donation-explorer-page">
              <div className="Ebutton">
                <div id="barba-wrapper">
                  <div class="barba-container">
                    <Link to="/user" id="user-home-link"><button>Current User</button></Link>
                  </div>
                </div> 
              </div>
               <center> 
              
                   <div className="Dfill">  
                <p>Donations</p>
                </div>
                <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                 
               < div className="Pfill">  
                <p>This component will be what you first see when you are logged in successfully.
                    You will see local or trending donations.
                </p>
                </ div>

                </center>
            </div>
            
        );
    }

}