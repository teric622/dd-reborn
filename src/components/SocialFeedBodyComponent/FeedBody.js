import React, {Component} from "react";
import "./FeedBody.css";
import Posts from '../postsComponent/Posts';


export default class FeedBody extends Component{
    render() {
        return (
            <div className= "body-section">
               
      <Posts/>
      </div>
            );
        }
    }