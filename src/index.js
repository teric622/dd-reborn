import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Import Path Components
import Welcome from './components/UtilitiesContainer/Welcome';
import DonationExplorer from './components/DonationContainer/DonationExplorer';
import UserHome from './components/UserContainer/UserHome';
import Payment from './components/PaymentContainer/Payment';
import MyDonations from './components/UserContainer/UserDonations';
import Header from './components/HeaderSocialContainer/Header'
import Posts from './components/postsComponent/Posts';
import DonationDetails from './components/DonationContainer/DonationDetails';
ReactDOM.render(  
  <React.StrictMode>

    <Router>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        {/* <Route path="/terms" component={Terms} /> */}
        <Route path="/explorer" component={DonationExplorer} />        
        <Route exact path="/user" component={UserHome} />
        <Route path="/user/mydonations" component={MyDonations} />
        <Route path="/user/payments" component={Payment} />
        <Route path="/user/Posts" component={Posts} />
        <Route path="/user/DonationDetails" component={DonationDetails} />
       
        {/* <Route path="/terms" component={Terms} />
        <Route path="/terms" component={Terms} /> */}
<Header/>
      </Switch>
    </Router>

  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
