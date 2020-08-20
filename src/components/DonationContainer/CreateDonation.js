import React, { Component } from 'react';
import AddImage from '../UtilitiesContainer/AddImage';
import Donation from './Donation';
import {Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './CreateDonation.css';
import { styled } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const BackButton = styled(ArrowBackIcon)({
    clickableIcon: {
      color: 'black',
      '&:hover': {
      color: 'red',
      },
    },
  });

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
                <div className= 'col-1'><BackButton onClick={event => window.location.href='../user'} /></div>
                <br/>
                {this.state.isCreated ?
                              <Donation
                              title={this.state.title}
                              goal={this.state.goal}
                              description={this.state.description}        
                              />
                              :
                    <>
                    <br/>
                <center>
                    <h1>Create A Donation</h1>
                    <div className="add">
                    <AddImage />
                    </div>
                </center>
                <center>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text" name="title" className="inputBox" onChange={this.handleChange} placeholder="Campaign Name" />
                        </div>
                        <br />

                        <div >
                            <select name="Organizations" className="inputSelection" required>
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

                        <div className="inputSelection">
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
                            <input type="text" name="goal" placeholder="Goal" className="inputBox" onChange={this.handleChange} />
                        </div>
                        <br />

                        
                            <textarea 
                             type="text"
                             name="description"
                             placeholder="Add a Description"
                             className="descBox"
                             onChange={this.handleChange}
                              />
                              <br/>
                        <input type="submit" className="createButton" value="Create"/>
                    </form>             
                    
          
                </center>
                </>
    }
            </div>
        )
    }
}