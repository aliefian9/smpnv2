import React, { Component } from "react";
import TableInventoryLimited from "../components/TableInventoryLimited";
import TableInventoryFullAccess from "../components/TableInventoryFullAccess";
import NavbarComponent from "../components/NavbarComponent";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  getInventoryList,
  deleteDataInventory,
} from "../actions/inventoryAction";


class InventoryContainer extends Component {
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
    this.props.dispatch(getInventoryList());
    this.props.dispatch(deleteDataInventory());
  }

  render() {
    if (this.state.loggedin === false) {
      return <Redirect to="/" />;
    }
    if (this.state.roleuser === "29,30,31,32,33,34,35,36") {
      return (
        <div>
          <NavbarComponent />
          <TableInventoryFullAccess />
        </div>
      );
    } else {
      return (
        <div>
          <NavbarComponent />
          <TableInventoryLimited />
        </div>
      );
    }
  }
}

export default connect()(InventoryContainer);
