import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm" >
        <div className="container">
            <a className="navbar-brand" href="#">ADDEARLY</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Add post<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">view my post</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Esteven Javiier
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Profile</a>
                        <a className="dropdown-item" href="#">Settings</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Sing out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
  );
}

export default Navbar;