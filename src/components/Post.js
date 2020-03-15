import React from "react";

const Post = props => {
  return (
    <div style={userStyle}>
      <div className="card grid-2">
        <div className="all-center">
          <h3>{props.post.title}</h3>
        </div>
        <br />
        <div>
          <p>{props.post.body}</p>;
        </div>
      </div>
    </div>
  );
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gridGrap: "1rem"
};

export default Post;
