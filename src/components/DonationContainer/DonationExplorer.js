import React, { Component } from "react";
import "./DonationExplorer.css";
import DonationCard from "./DonationCard";
import Posts from "../postsComponent/Posts";
import UserMenuButton from "../UtilitiesContainer/UserMenu";






export default class Explorer extends Component {



  render() {
    return (
      <div className="donation-explorer-page">
        <div className="Ebutton">
          <UserMenuButton/>
        </div>


      <center>
        <h2>Recommended</h2>
        </center>
        <div className="explore">

          <br></br>

        <DonationCard
        title="No Kids Hungry"
        goal="$10000"
        raised="$2500"
        donors="215"        
        />
          <br/>
        <DonationCard
        title="Ronald McDonald House"
        goal="$10000"
        raised="$2500"
        donors="215"        
        />
          <br />
          <br />
          <br />
          <Posts></Posts>
        </div>
      </div>
    );
  }
}