var table = document.createElement("TABLE");

//create header
var th1 = document.createElement("th");
var th2 = document.createElement("th");
var th3 = document.createElement("th");
var th4 = document.createElement("th");

th1.textContent = "Header 1";
th2.textContent = "Header 2";
th3.textContent = "Header 3";
th4.textContent = "Header 4";

table.appendChild(th1);
table.appendChild(th2);
table.appendChild(th3);
table.appendChild(th4);

//create first row
var tr1 = document.createElement("tr");
tr1.textContent = "";
table.appendChild(tr1);

var tr11 = document.createElement("td");
var tr21 = document.createElement("td");
var tr31 = document.createElement("td");
var tr41 = document.createElement("td");

tr11.textContent = "1,1";
tr21.textContent = "2,1";
tr31.textContent = "3,1";
tr41.textContent = "4,1";

tr1.appendChild(tr11);
tr1.appendChild(tr21);
tr1.appendChild(tr31);
tr1.appendChild(tr41);

//create second row
var tr2 = document.createElement("tr");
tr2.textContent = "";
table.appendChild(tr2);

var tr12 = document.createElement("td");
var tr22 = document.createElement("td");
var tr32 = document.createElement("td");
var tr42 = document.createElement("td");

tr12.textContent = "1,2";
tr22.textContent = "2,2";
tr32.textContent = "3,2";
tr42.textContent = "4,2";

tr2.appendChild(tr12);
tr2.appendChild(tr22);
tr2.appendChild(tr32);
tr2.appendChild(tr42);

//create second row
var tr3 = document.createElement("tr");
tr3.textContent = "";
table.appendChild(tr3);

var tr13 = document.createElement("td");
var tr23 = document.createElement("td");
var tr33 = document.createElement("td");
var tr43 = document.createElement("td");

tr13.textContent = "1,3";
tr23.textContent = "2,3";
tr33.textContent = "3,3";
tr43.textContent = "4,3";

tr3.appendChild(tr13);
tr3.appendChild(tr23);
tr3.appendChild(tr33);
tr3.appendChild(tr43);

table.style.borderStyle = "solid";
table.style.borderWidth = "1px";

document.body.appendChild(table);

