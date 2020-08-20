import React, {Component} from "react";
import "./Posts.css";
import Post from '../PostComponent/Post';
import '../HeaderSocialContainer/Header';
import'../SocialFeedBodyComponent/FeedBody';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Addpost from '../addPostComponent/Addpost';

export default class Posts extends Component{
    constructor(props){
        super(props);
            this.state={
                "posts": [
                    {
                    "user_name": "Tom",
                    "user_image": "http://localhost:3000/user.png",
                    "image": "http://localhost:3000/1.jpg",

                    "image_desc":"Thank you to all who supported our cause!" 

                    },   
                        
                    {
                        "user_name": "Bill",
                        "user_image": "http://localhost:3000/user.png",
                        "image": "http://localhost:3000/2.jpg",

                        "image_desc":"Thank you all for donating for a cleaner enviorment."

                        },
                    
                        {
                            "user_name": "Samantha",
                            "user_image": "http://localhost:3000/user.png",
                            "image": "http://localhost:3000/3.jpg",

                            "image_desc":"#ActionThroughDonation"

                            },
                       
                    
                        ]
                
            }

    }
    //forloop so that information continues to run

    getContent(){
let posts = this.state.posts;
        return posts.map((posts, index)  => {
            // console.log(post)
            return <Post data={posts} key={index}> </Post>
        }
        
        )
    }

    render() {
        const htmlContent = this.getContent();
 
        return (
            <div className="posts-container">
                <Addpost/>
      {htmlContent}

      <div className= 'Back'><ArrowBackIcon/> </div>
      </div>
     
       
        
            );
        }
    }

