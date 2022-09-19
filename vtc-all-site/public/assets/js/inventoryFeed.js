fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
    .then(resp => resp.json())
    .then(resp => {
        if (resp["Count"] > 0) {
            return resp["Results"]
        }
        else throw Error
    })
    .then(resp => {
        for(let i = 0; i < 10; i++ ) {
            const makeName = resp[i]["Make_Name"]
            let newDivListing = document.createElement("div")
            newDivListing.className = "container-fluid card"
            newDivListing.innerHTML = makeName
            // const newListing = `<div class="card mb-4 box-shadow">< imgclass="card-img-top"data - src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"alt = "Card image cap" /><div class="card-body"><p class="card-text">${makeName}</p><divclass="d-flex justify-content-between align-items-center"><div class="btn-group"><buttontype="button"class="btn btn-sm btn-outline-secondary">View</button><buttontype="button"class="btn btn-sm btn-outline-secondary">Edit</button></div><small class="text-muted">9 mins</small></div></div></div > `
            document.getElementById("listings").appendChild(newDivListing)
        }
        // resp.forEach(listing => {
        //     const makeName = listing["Make_Name"]
        //     let newDivListing = document.createElement("div")
        //     newDivListing.className = "container-fluid card"
        //     newDivListing.innerHTML = makeName
        //     // const newListing = `<div class="card mb-4 box-shadow">< imgclass="card-img-top"data - src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"alt = "Card image cap" /><div class="card-body"><p class="card-text">${makeName}</p><divclass="d-flex justify-content-between align-items-center"><div class="btn-group"><buttontype="button"class="btn btn-sm btn-outline-secondary">View</button><buttontype="button"class="btn btn-sm btn-outline-secondary">Edit</button></div><small class="text-muted">9 mins</small></div></div></div > `
        //     document.getElementById("listings").appendChild(newDivListing)
        // })

    })