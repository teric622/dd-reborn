import React, {Component} from "react";
import "./Posts.css";
import Post from '../PostComponent/Post';
import '../HeaderSocialContainer/Header';
import'../SocialFeedBodyComponent/FeedBody';


export default class Posts extends Component{
    constructor(props){
        super(props);
            this.state={
                "posts": [
                    {
                    "user_name": "Eroc",
                    "user_image": "http://localhost:3000/user.png",
                    "image": "http://localhost:3000/1.jpg",
                    "image_desc":"test Desc"
                    },   
                        
                    {
                        "user_name": "Bill",
                        "user_image": "http://localhost:3000/user.png",
                        "image": "http://localhost:3000/2.jpg",
                        "image_desc":"test Desc"
                        },
                    
                        {
                            "user_name": "Sal",
                            "user_image": "http://localhost:3000/user.png",
                            "image": "http://localhost:3000/3.jpg",
                            "image_desc":"test Desc"
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
      {htmlContent}
      </div>
            );
        }
    }

