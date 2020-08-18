import React, { Component } from 'react';

export default class Profile extends Component {
    render() {
        return (
            <div className="profile-card">
                <h1>Emya Bell</h1>
                <p class="title">Developer, Example</p>
                <p>Howard High School of Technology</p>
                <div style="margin: 24px 0;">
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <p><button>Contact</button></p>
                </div>
            </div>
        );
    }
}

