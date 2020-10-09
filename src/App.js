import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import ReactGA from 'react-ga';
import Analytics from "react-router-ga";

import Landing from "./components/landing/Landing";
import Form from "./components/form/Form";
import Error from "./components/error/Error";
import Thankyou from "./components/thankyou/Thankyou";
import Survey from "./components/survey/Survey";
import Interstitial from "./components/interstitial/Interstitial";
import MusicModal from "./components/musicModal/MusicModal";

// ReactGA.initialize('UA-174511934-1');
// ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <BrowserRouter>
      <Analytics id="UA-174511934-1">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/form" component={Form} />
          <Route path="/interstitial" component={Interstitial} />
          <Route path="/survey" component={Survey} />
          <Route path="/thankyou" component={Thankyou} />
          <Route path="/music" component={MusicModal} />
          <Route component={Error} />˝
        </Switch>
      </Analytics>
    </BrowserRouter>
  );
};

export default App;
