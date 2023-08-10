let characters = [
    {name:"Albus Dumbledore", role:"staff", house:"Gryffindor",gender:"m",alignment:"good"},
    {name:"Nymphadora Tonks", role:"student", house:"Hufflepuff",gender:"f",alignment:"good"},
    {name:"Ron Weasley", role:"student", house:"Gryffindor",gender:"m",alignment:"good"},
    {name:"Ginny Weasley", role:"student", house:"Gryffindor",gender:"f",alignment:"good"},
    {name:"Hermione Granger", role:"student", house:"Gryffindor",gender:"f",alignment:"good"},
    {name:"Mad-eye Moody", role:"staff", house:"Hufflepuff",gender:"m",alignment:"good"},
    {name:"Prof McGonagall", role:"staff", house:"Gryffindor",gender:"f",alignment:"good"},
    {name:"Harry Potter", role:"student", house:"Gryffindor",gender:"m",alignment:"good"},
    {name:"Draco Malfoy", role:"student", house:"Slytherin",gender:"m",alignment:"evil"},
    {name:"Hagrid", role:"staff", house:"Gryffindor",gender:"m",alignment:"good"},
    {name:"Luna Lovegood", role:"student", house:"Ravenclaw",gender:"f",alignment:"good"},
    {name:"Voldemort", role:"villain", house:"Slytherin",gender:"m",alignment:"evil"},
    {name:"Bellatrix Lestrange", role:"villain", house:"Slytherin",gender:"f",alignment:"evil"},
    {name:"Severus Snape", role:"staff", house:"Slytherin",gender:"m",alignment:"antihero"}
];

$(document).ready(function(){
    let uniqueHouses = [];

    // Generate table rows and collect unique 'house' names
    let tableBody = $('#table-body');
    characters.forEach(function(character, index) {
        let rowClass = index % 2 === 0 ? 'even' : 'odd';
        tableBody.append(`<tr class="${rowClass} ${character.house}" data-house="${character.house}">
            <td>${character.name}</td>
            <td>${character.role}</td>
            <td>${character.house}</td>
            <td>${character.gender}</td>
            <td>${character.alignment}</td>
        </tr>`);

        if (!uniqueHouses.includes(character.house)) {
            uniqueHouses.push(character.house);
        }
    });

    // Generate 'house' buttons
    let buttonsDiv = $('#buttons');
    uniqueHouses.forEach(function(house) {
        buttonsDiv.append(`<button class="house-button" data-house="${house}">${house}</button>`);
    });

    // Add click handler to house buttons
    $('.house-button').click(function() {
        let selectedHouse = $(this).data('house');
        $('#table-body tr').hide().filter(`[data-house="${selectedHouse}"]`).show();
    });

    // Add click handler to reset button
    $('#reset-button').click(function() {
        $('#table-body tr').show();
    });
});