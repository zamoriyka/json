var parent = document.createElement("div");
document.body.appendChild(parent);

var json = {
    name: "Renaissance Tower",
    address: "1201 Elm Street, Dallas, TX 75251",

    property_type: "Property Type: Commercial",
    total_building_area: "Total Building Area: 1,700,000",
    tenancy: "Tenancy: Lorem Ipsum",
    no_of_tenant: "No. of tenant: 59",
    website: "Website: www.renaissancetower.net",
    property_class: "Property Class: A",
    year_built: "Year Built: 1974",
    floors: "Floors: 56",
    description: "Description: Completed in 1974, the office tower was substantially renovated between 1986 and 1991 and emerged with a heightened image and even more illustrious profile within Downtown Dallas. Renowned for it's distinctive double 'X' lighting and majestic rooftop spires, Renaissance Tower is a Dallas Landmark",

    unit_name_number: "Unit name/number",
    record_type: "Record Type",
    available_area: "Available Area",


    availabilities: [
        {
            unit_name_number: "Renaissance Tower, 1/F-, 1-999",
            record_type: "Vacant",
            available_area: "25,667,00 sf"
        },
        {
            unit_name_number: "Renaissance Tower, 2/F-, 2-999",
            record_type: "Future Available",
            available_area: "25,667,00 sf"
        },
        {
            unit_name_number: "Renaissance Tower, 3/F-, 2-999",
            record_type: "Future Available",
            available_area: "25,667,00 sf"
        },
        {
            unit_name_number: "Renaissance Tower, 4/F-, 2-999",
            record_type: "Future Available",
            available_area: "25,667,00 sf"
        }
    ]

};


function fillName(name) {
    var element = document.querySelector('div.title p');
    element.textContent = name;
    console.log(element);
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
    }

    if (key === "description") {
        fillDescription(json[key]);
    }
}



function fillAddress(address) {
    var element = document.querySelector('div.address p');
    element.textContent = address;
    console.log(element);
}

function fillPropertyType(property_type) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(1)');
    element.textContent = property_type;
    console.log(element);
}

function fillTotalBuildingArea(total_building_area) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(2)');
    element.textContent = total_building_area;
    console.log(element);
}

function fillTenancy(tenancy) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(3)');
    element.textContent = tenancy;
    console.log(element);
}

function fillNoOfTenant(no_of_tenant) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(4)');
    element.textContent = no_of_tenant;
    console.log(element);
}

function fillWebsite(website) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(5)');
    element.textContent = website;
    console.log(element);
}

function fillPropertyClass(property_class) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(6)');
    element.textContent = property_class;
    console.log(element);
}

function fillYearBuilt(year_built) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(7)');
    element.textContent = year_built;
    console.log(element);
}

function fillFloors(floors) {
    var element = document.querySelector('div.property_details_container ul li:nth-child(8)');
    element.textContent = floors;
    console.log(element);
}

function fillDescription(description) {
    var element = document.querySelector('div.description p');
    element.textContent = description;
    console.log(element);
}

function createTable() {
    var availabilities = [
        {
            unit_name_number: "Renaissance Tower, 1/F-, 1-999",
            record_type: "Vacant",
            available_area: "25,667,00 sf"
        },
        {
            unit_name_number: "Renaissance Tower, 2/F-, 2-999",
            record_type: "Future Available",
            available_area: "25,667,00 sf"
        },
        {
            unit_name_number: "Renaissance Tower, 3/F-, 2-999",
            record_type: "Future Available",
            available_area: "25,667,00 sf"
        },
        {
            unit_name_number: "Renaissance Tower, 4/F-, 2-999",
            record_type: "Future Available",
            available_area: "25,667,00 sf"
        }
    ];

    var col = [];
    for (var i = 0; i < availabilities.length; i++) {
        for (var key in availabilities[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    var table = document.createElement("table");

    var tr = table.insertRow(-1);

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.textContent = col[i];
        tr.appendChild(th);
    }

    for (var i = 0; i < availabilities.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.textContent = availabilities[i][col[j]];
        }
    }

    var divContainer = document.querySelector('.availabilities');
    divContainer.textContent = "";
    divContainer.appendChild(table);
    console.log(divContainer);

}
createTable();

var data = {
    "images": [
        {
            image: "img.jpg"
        }
    ]
};

data.images.forEach( function(obj) {
    var img = new Image();
    img.src = obj.image;
    img.setAttribute("class", "image");
    img.setAttribute("alt", "effy");
    document.querySelector('.image').appendChild(img);
});


















