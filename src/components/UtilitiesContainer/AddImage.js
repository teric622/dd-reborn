import React, {Component} from 'react';
import axios from 'axios';
import  './Addimage.css'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

export default class AddImage extends Component{
    state = {
        selectedFile: null
    }

fileSelectedHandler = event => {
    this.setState({
        selectedFile: event.target.files[0]
    })
}

fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('')
    .then(res => {
        console.log(res);
    });
}
state={
    profileImg:'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
}


    render(){
        const {profileImg} = this.state
        return(
           
      <div className="page">
          <div className = "container">
              <h1 className="heading">Add your Image</h1>
             < div className="img-holder">
                <img src= {profileImg }alt ="" id="img" className="img"></img>
             </div>
             <input type="file" name="image-upload" id="input" accept="image/*"></input>
         <div className="label"> 
             <label htmlFor="input" className="image-upload">
             <i className ="material-icons">
             <AddPhotoAlternateIcon/>
             Choose your photo
             </i>
             </label>
          </div>
            </div>
      </div>
        )
    }
}

{/* <div classNames="AddImage">
<div className = "choosefile">
    {/* input type is the choose file button */}
{/* <input type="file" Icon= {AddPhotoAlternateIcon} onChange={this.fileSelectedHandler} />
</div>
<button onClick={this.fileUploadHandler}><AddPhotoAlternateIcon/></button>
</div> */}