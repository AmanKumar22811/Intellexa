import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="text-white">
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default HomePage;
