import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

import Landing from "./components/landing/Landing";
import Form from "./components/form/Form";
import Error from "./components/error/Error";
import Thankyou from "./components/thankyou/Thankyou";
import Survey from "./components/survey/Survey";
import Interstitial from "./components/interstitial/Interstitial";
import MusicModal from "./components/musicModal/MusicModal";

const history = createBrowserHistory();

const trackingId = "UA-174511934-1"; 
ReactGA.initialize(trackingId);

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});



const App = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/form" component={Form} />
        <Route path="/interstitial" component={Interstitial} />
        <Route path="/survey" component={Survey} />
        <Route path="/thankyou" component={Thankyou} />
        <Route path="/music" component={MusicModal} />
        <Route component={Error} />˝
      </Switch>
    </BrowserRouter>
  );
};

export default App;
