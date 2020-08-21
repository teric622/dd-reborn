import React, { Component } from 'react';
import './UserDonation.css'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import BackButton from '../UtilitiesContainer/BackButton';

//Importing Charity Images
import rmdlogo from '../../assets/ronaldmcdonald.png';
import nkhlogo from '../../assets/nkhlogo.png';
import DonationCard from '../DonationContainer/DonationCard';

export default class MyDonations extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="donation-home">
                <BackButton />

                <div className="donation-title">
                    <h2>Favorite Donations</h2>
                    <div className="donationlists">
                        <DonationCard />
                        <DonationCard />
                    </div>
                </div>


            </div>
        );
    }
}