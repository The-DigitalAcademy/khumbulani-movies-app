import React from 'react'
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="about">About</Link>
            </li>
          </ul>
          {/* <div class="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search"></input>
              <button type="submit">Submit</button>
            </form>
          </div> */}
        </div>
      </div>
    </nav>
  )
}

export default Topbar