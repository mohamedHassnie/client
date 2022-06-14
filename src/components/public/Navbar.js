import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand bg-dark "
        aria-label="Second navbar example"
      >
        <div className="container-fluid">
          <span className="navbar-toggler-icon" />

          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item mx_3">
                <h2 style={{ color: "DodgerBlue" }}>Analyse Génetique</h2>
              </li>
              <li className="nav-item mx_8">
                <Link to="/Login">Sign_in</Link>
              </li>

              <li className="nav-item">
                <Link to="/UpdateCompte">sign_up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
