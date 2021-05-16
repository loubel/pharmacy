let med: (medicine)[] = [];
let count: any;
let row: any;
let flag: any;
let drugs: any
let i: any;
let j: any;



class medicine {
    bName: string;
    gName: string;
    Stock: number;
    Price: number;

    constructor(brandName: string, genericName: string, stock: number, price: number) {
        this.bName = brandName;
        this.gName = genericName;
        this.Stock = stock;
        this.Price = price;
    }
}


function addQuantity() {
    const Table = document.querySelector('#medicine') as HTMLTableElement;
    const quantityBName = document.querySelector('#quant_brandname') as HTMLInputElement;
    const quantityAdd = document.querySelector('#quant_add') as HTMLInputElement;
    count = Table.rows.length;
    flag = 0;
    for (i = 0; i < med.length; i++) {
        if (quantityBName.value.toLowerCase()===med[i].bName.toLowerCase()) {

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
    const Table = document.querySelector('#medicine') as HTMLTableElement;
    const sellBName = document.querySelector('#sell_brandname') as HTMLInputElement;
    const sellQuantity = document.querySelector('#sell_quantity') as HTMLInputElement;
    count = Table.rows.length;
    flag = 0;

    for (i = 0; i < med.length; i++) {
        if (sellBName.value.toLowerCase()===med[i].bName.toLowerCase()) {
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
    const Table = document.querySelector('#medicine') as HTMLTableElement;
    const editBName = document.querySelector('#edit_brandname') as HTMLInputElement;
    const editPrice = document.querySelector('#edit_price') as HTMLInputElement;
    count = Table.rows.length;
    flag = 0;
    for (i = 0; i < med.length; i++) {
        if (editBName.value.toLowerCase()===med[i].bName.toLowerCase()) {
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
    const Table = document.querySelector('#medicine') as HTMLTableElement;
    const bName = document.querySelector('#brandName') as HTMLInputElement;
    const gName = document.querySelector('#genericName') as HTMLInputElement;
    const Stock = document.querySelector('#stock') as HTMLInputElement;
    const Price = document.querySelector('#price') as HTMLInputElement;

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

        for (i = 0, j =1; i < med.length && j <= med.length; i++) {
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