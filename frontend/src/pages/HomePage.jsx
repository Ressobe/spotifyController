import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function HomePage() {
  let { profile } = useContext(AuthContext);
  return <div></div>;
}

export default HomePage;
