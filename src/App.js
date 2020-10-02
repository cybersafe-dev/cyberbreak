import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./components/landing/Landing";
import Form from "./components/form/Form";
import Error from "./components/error/Error";
import Thankyou from "./components/thankyou/Thankyou";
import Survey from "./components/survey/Survey";
import Interstitial from "./components/interstitial/Interstitial";
import MusicModal from "./components/musicModal/MusicModal";

const App = () => {
  return (
    <BrowserRouter>
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
