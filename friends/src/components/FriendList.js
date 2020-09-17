import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";

class FriendsList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends/")
      .then((res) => {
        console.log(res.data);
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  render() {
    return (
      <div>
        <h1>Friend List</h1>
        <AddFriend />
        {this.state.friends.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <h4>{item.age}</h4>
              <h4>{item.email}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}
export default FriendsList;
