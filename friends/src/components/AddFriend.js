import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
  state = {
    addFriend: {
      name: "",
      age: "",
      email: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      addFriend: {
        ...this.state.addFriend,
        [e.target.name]: e.target.value,
      },
    });
  };

  submit = (e) => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", this.state.addFriend)
      .then((res) => {
        this.props.history.push("/friends");
      })
      .catch((err) => console.log({ err }));
  };

  render() {
    return (
      <div>
        <h1>Add Friend</h1>
        <form onSubmit={this.submit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.addFriend.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={this.state.addFriend.age}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.addFriend.email}
              onChange={this.handleChange}
            />
            <button>Add Friend</button>
          </label>
        </form>
      </div>
    );
  }
}

export default AddFriend;
