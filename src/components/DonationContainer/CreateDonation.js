import React, { Component } from 'react';
import AddImage from '../UtilitiesContainer/AddImage';

export default class CreateDonation extends Component {
    render() {
        return (
            <div className="CreateDonation">
                <center>
                    <h1>Create A Donation</h1>
                    <AddImage />
                </center>
                <center>
                    <form>
                        <div>
                            <input type="text" className="inputBox" placeholder="Campaign Name" />
                        </div>
                        <br />

                        <div>
                            <select name="Organizations" required>
                                <option value="" disabled selected hidden>Choose a Organization</option>
                                <option value="coffee">Non-profit</option>
                                <option value="tea">Personal</option>
                                <option value="milk">Buisness</option>
                            </select>
                        </div>
                        <br />

                        <div>
                            <input type="email" className="inputBox" placeholder="Zip Code" />
                        </div>
                        <br />

                        <div>
                        <select name="Category" required>
                                <option value="" disabled selected hidden>Pick from the Categories</option>
                                <option value="coffee">Health</option>
                                <option value="tea">Education</option>
                                <option value="milk">Human Services</option>
                                <option value="milk">Enviroment</option>
                            </select>
                        </div>
                        <br />

                        <div>
                            <input type="password" className="inputBox" placeholder="Password" />
                        </div>
                        <br />

                        <div>
                            <input type="password" className="inputBox" placeholder="Add a Description" />
                        </div>
                    </form>
                </center>
            </div>
        )
    }
}