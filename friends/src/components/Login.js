import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  // const history = useHistory();
  state = {
    credentials: {
      username: "",
      password: "",
    },
    error: "",
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
      error: "",
    });
  };

  login = (e) => {
    e.preventDefault();
    // send a POST request
    // API will send us a JWT token
    // handle the token in our React app
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        // navigate to list of Friends component
        this.props.history.push("/friends");

        // function component with useHistory hook
        // history.push("/protected");
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error,
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
        <p style={{ color: "red" }}>{this.state.error}</p>
      </div>
    );
  }
}

export default Login;
