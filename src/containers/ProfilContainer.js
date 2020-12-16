import React, { Component } from "react";
import NavbarComponent from "../components/NavbarComponent";
import { connect } from "react-redux";
import { Container } from "reactstrap";



class ProfilContainer extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    const roleuser = localStorage.getItem("roleuser");
    const nama = localStorage.getItem("nama");

    let loggedin = true;
    if (token == null) {
      loggedin = false;
    }

    this.state = {
      loggedin,
      roleuser,
      nama,
    };
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <Container>
          Halo, {this.state.nama}
        </Container>
      </div>
    );
  }
}

export default connect()(ProfilContainer);
