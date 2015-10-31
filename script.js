var table = document.createElement("TABLE");

var solidBorder = function (x) {
    x.style.border = "solid";
    x.style.borderWidth = "1px";
}

var collection = [];

for (var i = 0; i < 4; i++) {
    collection[i] = document.createElement("th");
}

for (var i = 0; i < collection.length; i++) {
    collection[i].textContent = "Header " + (i + 1);
}

for (var i = 0; i < collection.length; i++) {
    solidBorder(collection[i]);
}

for (var i = 0; i < collection.length; i++) {
    table.appendChild(collection[i]);
}

//create first row
var tr1 = document.createElement("tr");
tr1.textContent = "";
table.appendChild(tr1);
var row = 1;

for (var i = 0; i < 4; i++) {
    collection[i] = document.createElement("td");
}

for (var i = 0; i < collection.length; i++) {
    collection[i].textContent = (i + 1) + "," + row;
}

for (var i = 0; i < collection.length; i++) {
    solidBorder(collection[i]);
}

for (var i = 0; i < collection.length; i++) {
    tr1.appendChild(collection[i]);
}

//create second row
var tr2 = document.createElement("tr");
tr2.textContent = "";
table.appendChild(tr2);
row += 1;

for (var i = 0; i < 4; i++) {
    collection[i] = document.createElement("td");
}

for (var i = 0; i < collection.length; i++) {
    collection[i].textContent = (i + 1) + "," + row;
}

for (var i = 0; i < collection.length; i++) {
    solidBorder(collection[i]);
}

for (var i = 0; i < collection.length; i++) {
    tr2.appendChild(collection[i]);
}

//create third row
var tr3 = document.createElement("tr");
tr3.textContent = "";
table.appendChild(tr3);
row += 1;

for (var i = 0; i < 4; i++) {
    collection[i] = document.createElement("td");
}

for (var i = 0; i < collection.length; i++) {
    collection[i].textContent = (i + 1) + "," + row;
}

for (var i = 0; i < collection.length; i++) {
    solidBorder(collection[i]);
}

for (var i = 0; i < collection.length; i++) {
    tr3.appendChild(collection[i]);
}

table.style.borderStyle = "solid";
table.style.borderWidth = "1px";

var btn = document.createElement("BUTTON");
btn.textContent = "Mark Cell";


btn.addEventListener("click", function (event) {
    curElm.style.backgroundColor = "yellow";
    event.stopImmediatePropagation();
});
document.body.appendChild(table);
document.body.appendChild(btn);

var curRow = 0;
var curCol = 0;
var allElements = document.getElementsByTagName("tr");
var curElm = allElements[curRow].firstElementChild;

var skinnyBorder = function (x) {
    x.style.borderWidth = "1px";
}

var thickBorder = function (x) {
    x.style.borderWidth = "4px";
}

thickBorder(curElm);

document.addEventListener("keydown", function (event) {
    var keyPressed = event.keyCode;

    if (keyPressed == 37) {
        if (curElm.previousElementSibling != null) {
            skinnyBorder(curElm);
            curElm = curElm.previousElementSibling;
            thickBorder(curElm);
            curCol -= 1;
        }
    }
    else if (keyPressed == 38) {
        if (curRow != 0) {
            curRow -= 1;
            skinnyBorder(curElm);
            curElm = allElements[curRow].firstElementChild;
            for (var x = 0; x < curCol; x++) {
                curElm = curElm.nextElementSibling;
            }
            thickBorder(curElm);
        }
    }
    else if (keyPressed == 39) {
        if (curElm.nextElementSibling != null) {
            skinnyBorder(curElm);
            curElm = curElm.nextElementSibling;
            thickBorder(curElm);
            curCol += 1;
        }
    }
    else if (keyPressed == 40) {
        if (curRow != 2) {
            curRow += 1;
            skinnyBorder(curElm);
            curElm = allElements[curRow].firstElementChild;
            for (var x = 0; x < curCol; x++) {
                curElm = curElm.nextElementSibling;
            }
            thickBorder(curElm);

        }
    }
});
