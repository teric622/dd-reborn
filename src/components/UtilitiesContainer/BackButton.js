import React, { Component } from "react"; 
//import icons / material ui
import { styled } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



const Button = styled(ArrowBackIcon)({
    clickableIcon: {
      color: 'black',
      '&:hover': {
      color: 'red',
      },
    },
  });

  export default class BackButton extends Component {
      render(){
          return(
            <div className= 'col-1'><Button onClick={event => window.location.href='../explorer'} /></div>
          );
      }
  }