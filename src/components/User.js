import React from "react";
import { Link } from "react-router-dom";

const User = ({ user: { username, id, email, website, company } }) => (
  <div className="card text-center">
    <h3>{username}</h3>
    <h5>email:{email}</h5>
    <h5>website:{website}</h5>
    <h5>company:{company.name}</h5>
    <Link to={`/posts/${id}`} className="btn btn-dark btn-sm my-1">
      Posts
    </Link>
  </div>
);

export default User;
