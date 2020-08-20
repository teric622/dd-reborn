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

    render(){
        return(
            <div classNames="AddImage">
                <div className = "choosefile">
                    {/* input type is the choose file button */}
                <input type="file" Icon= {AddPhotoAlternateIcon} onChange={this.fileSelectedHandler} />
                </div>
                <button onClick={this.fileUploadHandler}><AddPhotoAlternateIcon/></button>
            </div>
        )
    }
}