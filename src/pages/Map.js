import React from "react";

class Map extends React.Component {
    render() {
        
        return(
            <main role="main">
            <div id="map"></div>
            <div class="container">
              <h2>Locations of Affiliated Valley Stores</h2>
              <p>
                Don't see a store here? Enter the street address of the store in the
                following format:
              </p>
              <p>&lt;STREET ADDRESS&gt;, &lt;CITY&gt;, &lt;STATE&gt;</p>
              <p>For example: 6003 Benore Road , Toledo, OH 43612</p>
              <form>
                <div class="row">
                  <div class="col">
      
                    <input
                      type="text"
                      id="newStore"
                      class="form-control"
                      placeholder="6003 Benore Road , Toledo, OH 43612"
                    />
                    <div class="accordion mt-3" id="locationAccordion">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Locations
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#locationAccordion"
                        >
                          <div class="accordion-body">
                            <ul id="locationList"></ul>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </main>
        );
    }
}

export default Map;