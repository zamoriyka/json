var parent = document.createElement("div");
document.body.appendChild(parent);

function fillName(name) {
    var element = document.querySelector('div.title p');
    element.textContent = name;

}

for (var key in json) {
    if (!json.hasOwnProperty(key)) {
        continue;
    }

    if (key === "name") {
        fillName(json[key]);
        continue;
    }

    if (key === "address") {
        fillAddress(json[key]);
        continue;
    }

    if (key === "property_type") {
        fillPropertyType(json[key]);
        continue;
    }

    if (key === "total_building_area") {
        fillTotalBuildingArea(json[key]);
        continue;
    }

    if (key === "tenancy") {
        fillTenancy(json[key]);
        continue;
    }

    if (key === "no_of_tenant") {
        fillNoOfTenant(json[key]);
        continue;
    }

    if (key === "website") {
        fillWebsite(json[key]);
        continue;
    }

    if (key === "property_class") {
        fillPropertyClass(json[key]);
        continue;
    }

    if (key === "year_built") {
        fillYearBuilt(json[key]);
        continue;
    }

    if (key === "floors") {
        fillFloors(json[key]);
        continue;
    }

    if (key === "description") {
        fillDescription(json[key]);
        continue;
    }

    if (key === "availabilities") {
        createTable(json[key]);
        continue;
    }

    if (key === "images") {
        createImage(json[key]);
        continue;
    }

    if (key === "marker") {
        fillCoordinates(json[key]);
    }
}

function fillCoordinates(marker) {
    var element = document.querySelector('.map');
    element.dataset.lng = marker.lng;
    element.dataset.lat = marker.lat;
    console.log(element);

}


function fillAddress(address) {
    var element = document.querySelector('div.address p');
    element.textContent = address;

}

function fillPropertyType(property_type) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(1)');
    element.textContent = property_type;

}

function fillTotalBuildingArea(total_building_area) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(2)');
    element.textContent = total_building_area;

}

function fillTenancy(tenancy) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(3)');
    element.textContent = tenancy;

}

function fillNoOfTenant(no_of_tenant) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(4)');
    element.textContent = no_of_tenant;

}

function fillWebsite(website) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(5)');
    element.textContent = website;

}

function fillPropertyClass(property_class) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(6)');
    element.textContent = property_class;

}

function fillYearBuilt(year_built) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(7)');
    element.textContent = year_built;

}

function fillFloors(floors) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(8)');
    element.textContent = floors;

}

function fillDescription(description) {
    var element = document.querySelector('div.description p');
    element.textContent = description;

}

function createTable(availabilities) {

    var col = [];
    for (var i = 0; i < availabilities.length; i++) {
        for (var key in availabilities[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    var table = document.createElement('table');

    var tr = table.insertRow(-1);

    // "th" creates each cell and fill it and append it to tr
    for (var i = 0; i < col.length; i++) {

    }

    for (var i = 0; i < availabilities.length; i++) {

        tr = table.insertRow(-1);
//add new tr and fill it
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.textContent = availabilities[i][col[j]];
        }
    }

    var divContainer = document.querySelector('.availabilities');
    divContainer.appendChild(table);

}

function createImage(images) {
    images.forEach(function (obj) {
        var img = new Image();
        img.src = obj.image;
        img.setAttribute("class", "image");
        document.querySelector('.image').appendChild(img);
    });
}


function initMap() {
    var element = document.querySelector('.map');
    var coordinates = {lat: parseFloat(element.dataset.lat), lng: parseFloat(element.dataset.lng)};

    var map = new google.maps.Map(element, {zoom: 4, center: coordinates});

    var markers = new google.maps.Marker({position: coordinates, map: map});

}















