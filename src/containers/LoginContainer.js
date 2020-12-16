import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default class LoginContainer extends Component {
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

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.username,
      password: this.password,
    };
    
    axios
      .post("https://smpnapi.herokuapp.com/token-auth/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("roleuser", res.data.user.user_permissions);
        localStorage.setItem("nama",res.data.user.username);
        this.setState({
          loggedin: true,
        });
        window.location.reload(); // BUAT REFRESH PAGE
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  render() {
    if (this.state.loggedin) {
      return <Redirect to="/Logging" />;
    }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper}>
          <div className="text-center">
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </div>
          <form className={useStyles.form} onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => (this.username = e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => (this.password = e.target.value)}
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
