export const NavBar = () => {
    return (
        <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                        <h4 className="text-white">About</h4>
                        <p className="text-muted">
                            We have a strong and committed sales staff with many years of
                            experience satisfying our customers' needs. Feel free to browse
                            our inventory online, request more information about vehicles,
                            set up a test drive or inquire about financing!
                        </p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Links</h4>
                        <ul className="list-unstyled">
                            <li><a href="index.html" className="text-white">Home</a></li>
                            <li>
                                <a href="inventoryFeed.html" className="text-white"
                                >Inventory</a
                                >
                            </li>
                            <li><a href="map.html" className="text-white">Map</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}