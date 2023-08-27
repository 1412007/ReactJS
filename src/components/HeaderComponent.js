import React, { Component } from "react";

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header className="bg-secondary">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center text-white">
              <a className="navbar-brand" href="#">
                Start Boostrap
              </a>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
