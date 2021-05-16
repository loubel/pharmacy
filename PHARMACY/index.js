"use strict";
var med = [];
var count;
var row;
var flag;
var drugs;
var i;
var j;
var medicine = /** @class */ (function () {
    function medicine(brandName, genericName, stock, price) {
        this.bName = brandName;
        this.gName = genericName;
        this.Stock = stock;
        this.Price = price;
    }
    return medicine;
}());
function addQuantity() {
    var Table = document.querySelector('#medicine');
    var quantityBName = document.querySelector('#quant_brandname');
    var quantityAdd = document.querySelector('#quant_add');
    count = Table.rows.length;
    flag = 0;
    for (i = 0; i < med.length; i++) {
        if (quantityBName.value.toLowerCase() === med[i].bName.toLowerCase()) {
            med[i].Stock += quantityAdd.valueAsNumber;
            flag++;
            break;
        }
    }
    if (flag == 0) {
        alert("Medicine is not available!");
    }
    for (i = count - 1; i >= 1; i--) {
        Table.deleteRow(i);
    }
    for (i = 0, j = 1; i < med.length && j <= med.length; i++) {
        row = Table.insertRow(j);
        row.insertCell(0).innerHTML = med[i].bName;
        row.insertCell(1).innerHTML = med[i].gName;
        row.insertCell(2).innerHTML = med[i].Stock.toString();
        row.insertCell(3).innerHTML = med[i].Price.toString();
    }
    quantityAdd.value = "";
    quantityBName.value = "";
}
function sell() {
    var Table = document.querySelector('#medicine');
    var sellBName = document.querySelector('#sell_brandname');
    var sellQuantity = document.querySelector('#sell_quantity');
    count = Table.rows.length;
    flag = 0;
    for (i = 0; i < med.length; i++) {
        if (sellBName.value.toLowerCase() === med[i].bName.toLowerCase()) {
            if (sellQuantity.valueAsNumber > med[i].Stock) {
                alert("Lacking/Out of Stock");
                flag++;
            }
            else {
                med[i].Stock -= sellQuantity.valueAsNumber;
                flag++;
                break;
            }
        }
    }
    if (flag == 0) {
        alert("Medicine is not available!");
    }
    for (i = count - 1; i >= 1; i--) {
        Table.deleteRow(i);
    }
    for (i = 0, j = 1; i < med.length && j <= med.length; i++) {
        row = Table.insertRow(j);
        row.insertCell(0).innerHTML = med[i].bName;
        row.insertCell(1).innerHTML = med[i].gName;
        row.insertCell(2).innerHTML = med[i].Stock.toString();
        row.insertCell(3).innerHTML = med[i].Price.toString();
    }
    sellQuantity.value = "";
    sellBName.value = "";
}
function edit() {
    var Table = document.querySelector('#medicine');
    var editBName = document.querySelector('#edit_brandname');
    var editPrice = document.querySelector('#edit_price');
    count = Table.rows.length;
    flag = 0;
    for (i = 0; i < med.length; i++) {
        if (editBName.value.toLowerCase() === med[i].bName.toLowerCase()) {
            med[i].Price = editPrice.valueAsNumber;
            flag++;
            break;
        }
    }
    if (flag == 0) {
        alert("Medicine is not available!");
    }
    for (i = count - 1; i >= 1; i--) {
        Table.deleteRow(i);
    }
    for (i = 0, j = 1; i < med.length && j <= med.length; i++) {
        row = Table.insertRow(j);
        row.insertCell(0).innerHTML = med[i].bName;
        row.insertCell(1).innerHTML = med[i].gName;
        row.insertCell(2).innerHTML = med[i].Stock.toString();
        row.insertCell(3).innerHTML = med[i].Price.toString();
    }
    editBName.value = "";
    editPrice.value = "";
}
function addRow() {
    var Table = document.querySelector('#medicine');
    var bName = document.querySelector('#brandName');
    var gName = document.querySelector('#genericName');
    var Stock = document.querySelector('#stock');
    var Price = document.querySelector('#price');
    if (bName.value == "" || gName.value == "" || Stock.value == "" || Price.value == "") {
        alert("Must fill all the necessary fields");
    }
    else {
        drugs = new medicine(bName.value, gName.value, Stock.valueAsNumber, Price.valueAsNumber);
        med.push(drugs);
        count = Table.rows.length;
        for (i = count - 1; i >= 1; i--) {
            Table.deleteRow(i);
        }
        for (i = 0, j = 1; i < med.length && j <= med.length; i++) {
            row = Table.insertRow(j);
            row.insertCell(0).innerHTML = med[i].bName;
            row.insertCell(1).innerHTML = med[i].gName;
            row.insertCell(2).innerHTML = med[i].Stock.toString();
            row.insertCell(3).innerHTML = med[i].Price.toString();
        }
        bName.value = "";
        gName.value = "";
        Stock.value = "";
        Price.value = "";
    }
}
