import React, { Component } from 'react';
import AddImage from '../UtilitiesContainer/AddImage';
import Donation from './Donation';
import {Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';

export default class CreateDonation extends Component {
    
    constructor(props){
        super(props);
        this.state={
            title: "",
            goal: "",
            raised: "",
            donors: "",
            description: "",
            isCreated: false            
        }        
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = (event) => {

        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })

    }

    handleSubmit = (event) =>{

        event.preventDefault();
        this.setState({
            isCreated: true
        })
        

    }
     

    render() {
        return (
            <div className="CreateDonation">
                {this.state.isCreated ?
                              <Donation
                              title={this.state.title}
                              goal={this.state.goal}
                              description={this.state.description}        
                              />
                              :
                    <>
                <center>
                    <h1>Create A Donation</h1>
                    <AddImage />
                </center>
                <center>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text" name="title" onChange={this.handleChange} placeholder="Campaign Name" />
                        </div>
                        <br />

                        <div>
                            <select name="Organizations" required>
                                <option value="" disabled selected hidden>Choose a Organization</option>
                                <option value="non-profit">Non-profit</option>
                                <option value="personal">Personal</option>
                                <option value="business">Business</option>
                            </select>
                        </div>
                        <br />

                        <div>
                            <input type="number" className="inputBox" placeholder="Zip Code" />
                        </div>
                        <br />

                        <div>
                        <select name="Category" required>
                                <option value="" disabled selected hidden>Pick from the Categories</option>
                                <option value="health">Health</option>
                                <option value="edu">Education</option>
                                <option value="human">Human Services</option>
                                <option value="environment">Enviroment</option>
                            </select>
                        </div>
                        <br />

                        <div>
                            <input type="text" name="goal" placeholder="Goal" onChange={this.handleChange} />
                        </div>
                        <br />

                        <label>
                            Description:
                            <textarea 
                             type="text"
                             name="description"
                             placeholder="Add a Description" 
                             onChange={this.handleChange}
                              />
                        </label>
                        <input type="submit" value="Create"/>
                    </form>             
                    
          
                </center>
                </>
    }
            </div>
        )
    }
}