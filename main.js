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
        description: "Description: Completed in 1974, the office tower was substantially renovated between 1986 and 1991 and emerged with a heightened image and even more illustrious profile within Downtown Dallas. Renowned for it's distinctive double 'X' lighting and majestic rooftop spires, Renaissance Tower is a Dallas Landmark"

};

var keys = Object.keys(json);

for(var i = 0; i < keys.length; i++) {
    var child = document.createElement("div");
    child.innerHTML = json[keys[i]];
    parent.appendChild(child);
}
