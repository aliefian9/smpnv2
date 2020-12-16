import React, { Component } from "react";
import { Container } from "reactstrap";
import NavbarComponent from "../components/NavbarComponent";
import BackComponent from "../components/BackComponent";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getInventoryDetail } from "../actions/inventoryAction";
import DetailInventoryComponent from "../components/DetailInventoryComponent";

class DetailInventoryContainer extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedin = true;
    if (token == null) {
      loggedin = false;
    }

    this.state = {
      loggedin,
    };
  }

  componentDidMount() {
    this.props.dispatch(
      getInventoryDetail(this.props.match.params.logical_uid)
    );
  }

  render() {
    if (this.state.loggedin === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <NavbarComponent />
        <Container>
          <BackComponent />
          <h1>Detail Inventory</h1>
          <DetailInventoryComponent />
        </Container>
      </div>
    );
  }
}

export default connect()(DetailInventoryContainer);
