import React, { Component } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";

class Posts extends Component {
  componentDidMount() {
    this.props.getUserPost(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        {this.props.posts.map(post => {
          return <Post key={post.id} post={post} />;
        })}
        <Link to="/" className="btn btn-light">
          Back
        </Link>
      </div>
    );
  }
}

export default Posts;
