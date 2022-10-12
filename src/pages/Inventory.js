import React from "react";

class Inventory extends React.Component {
    render() {
        return(
            <main role="main"style="overflow-x:hidden">
            <div class="row" >
              <div class="col-md-4">
                <div class="d-flex flex-column flex-shrink-0 p-3 ">
                  <button
                    href="/"
                    class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
                  >
                    <span class="fs-4">Sidebar</span>
                  </button>
                  <hr />
                  <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                      <button href="#" class="nav-link active" aria-current="page">
                        <svg class="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#home" />
                        </svg>
                        Home
                      </button>
                    </li>
                    <li>
                      <button href="#" class="nav-link link-dark">
                        <svg class="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#speedometer2" />
                        </svg>
                        Dashboard
                      </button>
                    </li>
                    <li>
                      <button href="#" class="nav-link link-dark">
                        <svg class="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#table" />
                        </svg>
                        Orders
                      </button>
                    </li>
                    <li>
                      <button href="#" class="nav-link link-dark">
                        <svg class="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#grid" />
                        </svg>
                        Products
                      </button>
                    </li>
                    <li>
                      <button href="#" class="nav-link link-dark">
                        <svg class="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#people-circle" />
                        </svg>
                        Customers
                      </button>
                    </li>
                  </ul>
                  <hr />
                  <div class="dropdown">
                    <button
                      href="#"
                      class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://github.com/mdo.png"
                        alt=""
                        width="32"
                        height="32"
                        class="rounded-circle me-2"
                      />
                      <strong>mdo</strong>
                    </button>
                    <ul class="dropdown-menu text-small shadow">
                      <li><button class="dropdown-item" href="#">New project...</button></li>
                      <li><button class="dropdown-item" href="#">Settings</button></li>
                      <li><button class="dropdown-item" href="#">Profile</button></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><button class="dropdown-item" href="#">Sign out</button></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="album py-5 ">
                  <div class="container">
                    <div class="row" id="listings" style="overflow-wrap: normal;">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );
    }
}

    export default Inventory;