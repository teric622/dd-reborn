import React, {Component} from 'react';
import axios from 'axios';

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
                <input type="file" onChange={this.fileSelectedHandler} />
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        )
    }
}