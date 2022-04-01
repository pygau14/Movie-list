import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1 className="landingPage">Sign Up App</h1>
      <p className="pd">Complete the signup process to view the Products</p>
      <Link to="/get-started">
        <button className="btn-started">Get Started</button>
      </Link>
    </div>
  );
}

export default Landing;
