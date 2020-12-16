import React, { Component } from "react";
import { Container } from "reactstrap";
import NavbarComponent from "../components/NavbarComponent";
import BackComponent from "../components/BackComponent";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getLoggingDetail } from "../actions/inventoryAction";
import DetailLoggingComponent from "../components/DetailLoggingComponent";

class DetailLoggingContainer extends Component {
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
      getLoggingDetail(this.props.match.params.id)
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
          <DetailLoggingComponent />
        </Container>
      </div>
    );
  }
}

export default connect()(DetailLoggingContainer);
