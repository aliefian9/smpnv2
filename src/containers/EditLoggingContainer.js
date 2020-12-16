import BackComponent from "../components/BackComponent";
import NavbarComponent from "../components/NavbarComponent";
import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import FormLogging from "../components/FormLogging";
import { getLoggingDetail, putLoggingUpdate } from "../actions/inventoryAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataLogging: state.inventorys.getResponDataLogging,
    errorResponDataLogging: state.inventorys.errorResponDataLogging,
  };
};

class EditLoggingContainer extends Component {
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
    this.props.dispatch(getLoggingDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putLoggingUpdate(data, this.props.match.params.id));
  }

  render() {
    if (this.state.loggedin === false) {
      return <Redirect to="/" />;
    }
    if (this.props.getResponDataLogging || this.props.errorResponDataLogging) {
      if (this.props.errorResponDataLogging) {
        swal("Failed!", this.props.errorResponDataLogging, "error");
      } else {
        swal("Logging Updated!");
      }
    }
    return (
      <div>
        <NavbarComponent />
        <Container>
          <BackComponent />
          <h1>Edit Logging</h1>
          <FormLogging onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(EditLoggingContainer);
