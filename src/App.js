import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./pages/About";
import Posts from "./components/Posts";

class App extends React.Component {
  state = {
    users: [],
    posts: []
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    this.setState({
      users: res.data
    });
  }

  //Get post for single user
  getUserPost = async id => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );

    this.setState({
      posts: res.data
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Navbar />
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Homepage users={this.state.users} />}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/posts/:id"
                render={props => (
                  <Posts
                    {...props}
                    getUserPost={this.getUserPost}
                    posts={this.state.posts}
                    users={this.state.users}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
