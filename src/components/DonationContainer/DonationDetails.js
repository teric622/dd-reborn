import React, { Component } from "react"; 

import AddPost from '../addPostComponent/Addpost.js';
import MediaCard from '../DonationContainer/DonationExplorer'

export default class DonationDetails extends Component {
    render () {
        return (
            <div className='donation-details-page'>
                <center>
                <MediaCard/>
                <button className='donation-button'>Give a Donation</button>
                <AddPost/>
                </center>
            </div>
        );
    }
}
