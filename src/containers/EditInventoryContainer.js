import BackComponent from "../components/BackComponent";
import NavbarComponent from "../components/NavbarComponent";
import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import FormInventory from "../components/FormInventory";
import {
  getInventoryDetail,
  putInventoryUpdate,
} from "../actions/inventoryAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataInventory: state.inventorys.getResponDataInventory,
    errorResponDataInventory: state.inventorys.errorResponDataInventory,
  };
};

class EditInventoryContainer extends Component {
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

  handleSubmit(data) {
    this.props.dispatch(
      putInventoryUpdate(data, this.props.match.params.logical_uid)
    );
  }

  render() {
    if (this.state.loggedin === false) {
      return <Redirect to="/" />;
    }
    if (
      this.props.getResponDataInventory ||
      this.props.errorResponDataInventory
    ) {
      if (this.props.errorResponDataInventory) {
        swal("Failed!", this.props.errorResponDataInventory, "error");
      } else {
        swal(
          "Inventory Updated!",
          "Nama : " +
            this.props.getResponDataInventory.name +
            " , Jumlah : " +
            this.props.getResponDataInventory.qty,
          "success"
        );
      }
    }
    return (
      <div>
        <NavbarComponent />
        <Container>
          <BackComponent />
          <h1>Edit Inventory</h1>
          <FormInventory onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(EditInventoryContainer);
