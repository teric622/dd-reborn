import React, {Component} from 'react';


export default class Donation extends Component{
    
    constructor(props){
        super(props);
        this.state={
            title: this.props.title,
            goal: this.props.goal,
            raised: "",
            donors: "",
            description: this.props.description,            
        }        
    
    }

    render(){
        const Title = this.state.title;
        const Goal = this.state.goal;
        const Raised = this.state.raised;
        const Donors = this.state.donors;
        const Description = this.state.description;

        return(
            <div className="donation-page">
                <h1>Campaign Name: {Title}</h1>
                <p>Description: {Description}</p>
                <div className="progress-bar">
                    <p>Goal: </p>{Goal}
                </div>
            </div>
        );
    }
}