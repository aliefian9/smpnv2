import React, { Component } from "react";
import { Container } from "reactstrap";
import { Redirect } from "react-router-dom";
import BackComponent from "../components/BackComponent";
import FormCreate from "../components/FormCreate";
import NavbarComponent from "../components/NavbarComponent";
import { connect } from "react-redux";
import { postInventoryCreate } from "../actions/inventoryAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataInventory: state.inventorys.getResponDataInventory,
    errorResponDataInventory: state.inventorys.errorResponDataInventory,
  };
};

class CreateInventoryContainer extends Component {
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
  handleSubmit(data) {
    this.props.dispatch(postInventoryCreate(data));
  }

  render() {
    if (
      this.props.getResponDataInventory ||
      this.props.errorResponDataInventory
    ) {
      if (this.props.errorResponDataInventory) {
        swal("Failed!", this.props.errorResponDataInventory, "error");
      } else {
        swal(
          "Inventory Created!",
          "Nama : " +
            this.props.getResponDataInventory.name +
            " , Jumlah : " +
            this.props.getResponDataInventory.jumlah,
          "success"
        );
      }
    }
    if (this.state.loggedin === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <NavbarComponent />
        <Container>
          <BackComponent />
          <h1>Create Inventory</h1>
          <FormCreate onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(CreateInventoryContainer);
