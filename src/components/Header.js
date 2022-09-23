import React from "react";

import {NavLink, Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header>
            <div class="collapse bg-dark" id="navbarHeader">
              <div class="container">
                <div class="row">
                  <div class="col-sm-8 col-md-7 py-4">
                    <h4 class="text-white">About:</h4>
                    <p class="text-muted">
                      We have a strong and committed sales staff with many years of experience satisfying our customers' needs. Feel free to browse our inventory online, request more information about vehicles, set up a test drive or inquire about financing!
                    </p>
                  </div>
                  <div class="col-sm-4 offset-md-1 py-4">
                    <h4 class="text-white">Links</h4>
                    <ul class="list-unstyled">
                      <li><NavLink to="/" exact activeClassName="active" className="text-white">Home</NavLink></li>
                      <li><NavLink to="./pages/Inventory" activeclassName="active" className="text-white">Inventory</NavLink></li>
                      <li><NavLink to="./pages/Map" activeclassName="active" className="text-white">Map</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar navbar-dark bg-dark box-shadow">
              <div class="container d-flex justify-content-between">
                <a href="index.html" class="navbar-brand d-flex align-items-center">
                  <img class="img-fluid" src="assets/imgs/valley_logo.png" alt="" />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarHeader"
                  aria-controls="navbarHeader"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
          </header>
        );
    }
}

export default Header;