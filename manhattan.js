//Add newItem to array if Element(newItem) != value
let CheckNextCell = function (newItem, array, newValue) {
    if (document.getElementById(newItem)
        && document.getElementById(newItem).checked != newValue) {
        //Add to list if element is new.
        if (array.indexOf(newItem) === -1) array.push(newItem);
    }
}

let fillCellReturnNeighbouringCells = function (newValue, CellsToTurn) {
    var nextCells = [];
    CellsToTurn.forEach(function (i, j) {
        document.getElementById(i).checked = newValue;
        //Check cells in cardinal directions
        [i + 1, i - 1, i + n, i - n].forEach(item => CheckNextCell(item, nextCells, newValue));
    });
    return nextCells;
}
let onChange = function (i) {
    nextStep([i], document.getElementById(i).checked);
}


let nextStep = function (ArrayOfturnees, newValue) {
    let list = fillCellReturnNeighbouringCells(newValue, ArrayOfturnees);
    if (list.length != 0) {
        setTimeout(function () { nextStep(list, newValue) }, 50)
        console.log(list);
    } else {
        console.log('done');
    }
}


//Setup the field, we build n rows and n elements within every row.
// row 1 has id r1, cell one in row three has id 31. 
var n = 31;
var element = document.getElementById("root");

for (i = 0; i < n; i++) {
    var i_element = document.createElement("div")
    i_element.setAttribute("class", "row");
    i_element.setAttribute("id", 'r' + i);
    element.appendChild(i_element);
    for (j = 0; j < n; j++) {
        let id = n * i + j;
        var j_element = document.createElement("input");
        j_element.setAttribute("id", id);
        j_element.setAttribute("type", "checkbox");
        j_element.addEventListener('change', function () { onChange(id) });
        i_element.appendChild(j_element);
    }
}