import React, { Component } from 'react';
import '../DonationContainer/DonationExplorer.css';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Popup from 'reactjs-popup';
import UserHome from "../UserContainer/UserHome";


export default class UserMenuButton extends Component {

  render() {
    return (

      <div className="Ebutton">
        <Popup trigger={<button className="popup-btn" ><ListAltIcon fontSize="large" /></button>}
          position="bottom left">

          <div className="user-home-menu">

            <UserHome />
            
          </div>

        </Popup>
      </div>

    );

  }

}