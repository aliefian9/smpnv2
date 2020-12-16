import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoggingContainer from "./containers/LoggingContainer";
import CreateInventoryContainer from "./containers/CreateInventoryContainer";
import EditInventoryContainer from "./containers/EditInventoryContainer";
import EditLoggingContainer from "./containers/EditLoggingContainer";
import DetailLoggingContainer from "./containers/DetailLoggingContainer";
import DetailInventoryContainer from "./containers/DetailInventoryContainer";
import InventoryContainer from "./containers/InventoryContainer";
import ProfilContainer from "./containers/ProfilContainer";
import LoginContainer from "./containers/LoginContainer";
import AnalitikContainer from "./containers/AnalitikContainer";
import LogoutContainer from "./containers/LogoutContainer";
import my404 from "./containers/my404";

class App extends Component {
  constructor(props) {
    super(props);
    const roleuser = localStorage.getItem("roleuser");

    this.state = {
      roleuser,
    };
  }

  render() {
    if (this.state.roleuser === "29,30,31,32,33,34,35,36") {
      return (
        <div>
        <Router>
          <Switch>
            <Route path="/" exact component={LoginContainer} />
            <Route path="/Logging" exact component={LoggingContainer} />
            <Route path="/Create" exact component={CreateInventoryContainer} />
            <Route path="/DetailInventory/:logical_uid" component={DetailInventoryContainer} />
            <Route path="/EditInventory/:logical_uid" exact component={EditInventoryContainer} />
            <Route path="/EditLogging/:id" exact component={EditLoggingContainer} />
            <Route path="/DetailLogging/:id" exact component={DetailLoggingContainer} />
            <Route path="/Inventory" exact component={InventoryContainer} />
            <Route path="/Analitik" exact component={AnalitikContainer} />
            <Route path="/Profil" exact component={ProfilContainer} />
            <Route path="/Logout" exact component={LogoutContainer} />
            <Route path="*" exact component={my404} />
          </Switch>
        </Router>
      </div>
      );
    } else {
      return (
      <div>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginContainer} />
          <Route path="/Logging" exact component={LoggingContainer} />
          <Route path="/DetailInventory/:logical_uid" component={DetailInventoryContainer} />
          <Route path="/DetailLogging/:id" exact component={DetailLoggingContainer} />
          <Route path="/Inventory" exact component={InventoryContainer} />
          <Route path="/Analitik" exact component={AnalitikContainer} />
          <Route path="/Logout" exact component={LogoutContainer} />
          <Route path="*" exact component={my404} />
        </Switch>
      </Router>
    </div>
    );
    }


 
  }
}

export default App;
