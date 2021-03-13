import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingTemplate from "../Templates/LandingTemplate";
import { HomePage, NotFound } from "../pageListAsync";

class Landing extends React.Component {
  render() {
    return (
      <LandingTemplate>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </LandingTemplate>
    );
  }
}

export default Landing;
