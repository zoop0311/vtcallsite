import React from "react";


class Home extends React.Component{
    render() {
        return (
            <main role="main">
                <section class="jumbotron text-center">
                    <h1 class="jumbotron-heading"># of Site Visits</h1>
                    <p class="lead text-muted" id="totalSiteVisits">
                    </p>
                    <p>
                        <a href="inventoryFeed.html" class="btn btn-primary my-2">All Our Inventory</a>
                        <a href="map.html" class="btn btn-secondary my-2">Store Map Locations</a>
                    </p>
                    <p>
                        Our selection of inventory ranges from small consumer vehicles to commercial vehicles!
                    </p>
                </section><div class="album py-5 bg-light">
                    <div class="container">
                        <div class="row mb-3">
                            <div class="d-flex justify-content-center">
                                <h1 class="display-1">Hot Inventory</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img
                                        class="card-img-top"
                                        src="assets/imgs/bronco.png"
                                        alt="Card cap" />
                                    <div class="card-body">
                                        <p class="card-text">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                        <div
                                            class="d-flex justify-content-between align-items-center"
                                        >
                                            <div class="btn-group">
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>

                                            </div>
                                            <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" id="exampleModal">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-primary">Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img
                                        class="card-img-top"
                                        src="assets/imgs/coupe.png"
                                        alt="Card image cap" />
                                    <div class="card-body">
                                        <p class="card-text">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                        <div
                                            class="d-flex justify-content-between align-items-center"
                                        >
                                            <div class="btn-group">
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img
                                        class="card-img-top"
                                        src="assets/imgs/ecosport.png"
                                        alt="Card image cap" />
                                    <div class="card-body">
                                        <p class="card-text">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img
                                        class="card-img-top"
                                        src="assets/imgs/escape.png"
                                        alt="Card image cap" />
                                    <div class="card-body">
                                        <p class="card-text">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                        <div
                                            class="d-flex justify-content-between align-items-center"
                                        >
                                            <div class="btn-group">
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img
                                        class="card-img-top"
                                        src="assets/imgs/edge.png"
                                        alt="Card image cap" />
                                    <div class="card-body">
                                        <p class="card-text">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                        <div
                                            class="d-flex justify-content-between align-items-center"
                                        >
                                            <div class="btn-group">
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img
                                        class="card-img-top"
                                        src="assets/imgs/mustang.png"
                                        alt="Card image cap" />
                                    <div class="card-body">
                                        <p class="card-text">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                        <div
                                            class="d-flex justify-content-between align-items-center"
                                        >
                                            <div class="btn-group">
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img
                                        class="card-img-top"
                                        src="assets/imgs/sl_orig.png"
                                        alt="Card image cap" />
                                    <div class="card-body">
                                        <p class="card-text">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                        <div
                                            class="d-flex justify-content-between align-items-center"
                                        >
                                            <div class="btn-group">
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img
                                        class="card-img-top"
                                        src="assets/imgs/van.png"
                                        alt="Card image cap" />
                                    <div class="card-body">
                                        <p class="card-text">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                        <div
                                            class="d-flex justify-content-between align-items-center"
                                        >
                                            <div class="btn-group">
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img
                                        class="card-img-top"
                                        src="assets/imgs/bronco.png"
                                        alt="Card image cap" />
                                    <div class="card-body">
                                        <p class="card-text">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                        <div
                                            class="d-flex justify-content-between align-items-center"
                                        >
                                            <div class="btn-group">
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </main>
        );
    }
}

export default Home;