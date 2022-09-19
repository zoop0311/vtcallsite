var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
map.setView([41.138130, -81.789250], 8);
// medina
L.marker([41.138130, -81.789250]).addTo(map);

// huron
L.marker([41.390690, -82.555800]).addTo(map);

// valleyfordtruckinc
L.marker([41.407760, -81.625840]).addTo(map);

let locations = window.localStorage.getItem('stores')
// for (let i = 0; i < locations.length; i++) {

// }

document.getElementById("newStore").addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
        addStore(e);
    }
})

const initLocationList = () => {
    if (window.localStorage.getItem("stores")) {
        let locations = JSON.parse(window.localStorage.getItem("stores"))
        for(let i = 0; i < locations.length; i++) {
            let storeEle = document.createElement('li')
            
            storeEle.innerHTML = locations[i].place_name
            document.getElementById("locationList").appendChild(storeEle)        
        }
    }
}
const addToList = (store) => {
    console.log(store)
    let storeEle = document.createElement('li')
    let rowEle = document.createElement('span')
    storeEle.id = Math.random()
    console.log(storeEle.id)
    let delEle = document.createElement('button')

    delEle.addEventListener('click', function removeFromList(storeId, e){
        console.log(storeId)
        e.preventDefault()
        if (document.getElementById(storeId)) {
            document.getElementById(storeId).remove()
            
        }
    }.bind(delEle, storeEle.id))

    delEle.innerHTML = "Delete"
    delEle.style.color = "Red"
    rowEle.appendChild(delEle)
    storeEle.innerHTML = store.place_name
    storeEle.appendChild(rowEle)
    
    document.getElementById("locationList").appendChild(storeEle)
}
const removeFromList = (storeId) => {
    console.log(storeId)
    if (document.getElementById(storeId)) {
        document.getElementById(storeId).remove()
    }
    
}
const addStore = (e) => {
    e.preventDefault();
    let address = e.target.value;
    let tempLocations;
    if (window.localStorage.getItem('stores')) {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic3N5dWVuIiwiYSI6ImNsNjI2b2xkZjI0a2wzb3BkcDdvcmpvdngifQ.UlRxf5gVKqx86DSro4CZyA`)
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                if (resp.features) {
                    console.log(resp.features)
                    const { features } = resp;
                    console.log(features)
                    const { place_name, center } = features[0]
                    const newLocationPayload = { place_name, center }
                    console.log(place_name)
                    console.log(center)
                    L.marker(center.reverse()).addTo(map)
                    addToList(newLocationPayload)
                    tempLocations = JSON.parse(window.localStorage.getItem('stores'))
                    tempLocations.push({ place_name: place_name, coords: center })
                    window.localStorage.setItem('stores', JSON.stringify(tempLocations))

                }
            })


        
    }
    else {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic3N5dWVuIiwiYSI6ImNsNjI2b2xkZjI0a2wzb3BkcDdvcmpvdngifQ.UlRxf5gVKqx86DSro4CZyA`)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            if (resp.features) {
                console.log(resp.features)
                const {features } = resp;
                console.log(features)
                const {place_name, center} = features[0]
                const newLocationPayload = { place_name, center }
                console.log(place_name)
                console.log(center)
                addToList(newLocationPayload)
                L.marker(center.reverse()).addTo(map)
                window.localStorage.setItem('stores', JSON.stringify([{place_name: place_name, coords: center}]))
                
            }
        })
        
    }
    
}