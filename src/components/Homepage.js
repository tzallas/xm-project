import React from "react";
import User from "./User";

const Homepage = ({ users }) => {
  return (
    <div style={userStyle} className="container">
      {users.map(user => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGrap: "1rem"
};

export default Homepage;
