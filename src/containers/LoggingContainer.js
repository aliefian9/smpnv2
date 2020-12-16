import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import TableLoggingFullAccess from "../components/TableLoggingFullAccess";
import TableLoggingLimited from "../components/TableLoggingLimited";
import { getLoggingList, deleteLogging } from "../actions/inventoryAction";

class LoggingContainer extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    const roleuser = localStorage.getItem("roleuser");

    let loggedin = true;
    if (token == null) {
      loggedin = false;
    }

    this.state = {
      loggedin,
      roleuser,
    };
  }
  componentDidMount() {
    this.props.dispatch(getLoggingList());
    this.props.dispatch(deleteLogging());
  }


  render() {
    if (this.state.loggedin === false) {
      return <Redirect to="/" />;
    }
    if (this.state.roleuser === "29,30,31,32,33,34,35,36") {
      return (
        <div>
          <NavbarComponent />
          <TableLoggingFullAccess />
        </div>
      );
    } else {
      return (
        <div>
          <NavbarComponent />
          <TableLoggingLimited />
        </div>
      );
    }
  }
}

export default connect()(LoggingContainer);
