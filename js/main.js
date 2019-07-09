var article1 = {
    name: "Los Angeles Lakers Hat",
    bezeichung: "hat1",
    preis: 15,
    available: 10,
    discount: 0,
    image: 'img/hat1.jpg',
    disturber: false,
    team: "lakers"
};
var article2 = {
    name: "Golden State Hat",
    bezeichung: "hat2",
    preis: 18,
    available: 15,
    discount: 10,
    image: 'img/hat2.jpg',
    disturber: false,
    team: "golden"
};
var article3 = {
    name: "Chicago Bulls Hat",
    bezeichung: "hat3",
    preis: 20,
    available: 12,
    discount: 0,
    image: 'img/hat3.jpg',
    disturber: false,
    team: "bulls"
};
var article4 = {
    name: "New York Nicks Hat",
    bezeichung: "hat4",
    preis: 10,
    available: 10,
    discount: 0,
    image: 'img/hat4.jpg',
    disturber: false,
    team: "nicks"
};
var article5 = {
    name: "Boston Celtics Hat",
    bezeichung: "hat5",
    preis: 15,
    available: 10,
    discount: 0,
    image: 'img/hat5.jpg',
    disturber: false,
    team: "celtics"
};
var article6 = {
    name: "Golden State Warriors Shirt ",
    bezeichung: "Shirt1",
    preis: 35,
    available: 10,
    discount: 0,
    image: 'img/hoodie1.jpg',
    disturber: true,
    team: "golden"
};
var article7 = {
    name: "Philadephia 76ers Shirt",
    bezeichung: "Shirt2",
    preis: 35,
    available: 10,
    discount: 0,
    image: 'img/hoodie2.jpg',
    disturber: true,
    team: "76ers"
};
var article8 = {
    name: "Toronto Raptors Shirt",
    bezeichung: "Shirt3",
    preis: 35,
    available: 10,
    discount: 0,
    image: 'img/hoodie3.jpg',
    disturber: true,
    team: "raptors"
};
var article9 = {
    name: "Los Angeles Lakers Shirt",
    bezeichung: "Shirt4",
    preis: 35,
    available: 10,
    discount: 0,
    image: 'img/hoodie4.jpg',
    disturber: true,
    team: "lakers"
};
var article10 = {
    name: "Los Angeles Lakers Shirt 2",
    bezeichung: "Shirt5",
    preis: 30,
    available: 10,
    discount: 0,
    image: 'img/hoodie5.jpg',
    disturber: true,
    team: "lakers"
};
var article11 = {
    name: "Los Angeles Lakers T-Shirt",
    bezeichung: "t-shirt1",
    preis: 20,
    available: 10,
    discount: 0,
    image: 'img/shirt1.jpg',
    disturber: true,
    team: "lakers"
};
var article12 = {
    name: "Boston Celtics T-Shirt",
    bezeichung: "t-shirt2",
    preis: 20,
    available: 10,
    discount: 0,
    image: 'img/shirt2.jpg',
    disturber: true,
    team: "celtics"
};
var article13 = {
    name: "Milwaukee Bucks T-Shirt",
    bezeichung: "t-shirt3",
    preis: 20,
    available: 10,
    discount: 0,
    image: 'img/shirt3.jpg',
    disturber: true,
    team: "bucks"
};
var article14 = {
    name: "Golden State Warriors T-Shirt",
    bezeichung: "t-shirt4",
    preis: 20,
    available: 10,
    discount: 0,
    image: 'img/shirt4.jpg',
    disturber: true,
    team: "golden"
};
var article15 = {
    name: "Philadelphia 76ers T-Shirt",
    bezeichung: "t-shirt5",
    preis: 20,
    available: 10,
    discount: 0,
    image: 'img/shirt5.jpg',
    disturber: true,
    team: "76ers"
};
var article16 = {
    name: "Los Angeles Lakers Socks",
    bezeichung: "sock1",
    preis: 10,
    available: 10,
    discount: 0,
    image: 'img/sock1.jpg',
    disturber: false,
    team: "lakers"
};
var article17 = {
    name: "Boston Celtics Socks",
    bezeichung: "sock2",
    preis: 10,
    available: 10,
    discount: 0,
    image: 'img/sock2.jpg',
    disturber: false,
    team: "celtics"
};
var article18 = {
    name: "Philadelphia 76ers Socks",
    bezeichung: "sock3",
    preis: 10,
    available: 10,
    discount: 0,
    image: 'img/sock3.jpg',
    disturber: false,
    team: "76ers"
};
var article19 = {
    name: "Los Angeles Lakers Socks 2",
    bezeichung: "sock4",
    preis: 10,
    available: 10,
    discount: 0,
    image: 'img/sock4.jpg',
    disturber: false,
    team: "lakers"
};
var article20 = {
    name: "Denver Nuggets",
    bezeichung: "sock5",
    preis: 10,
    available: 10,
    discount: 0,
    image: 'img/sock5.jpg',
    disturber: false,
    team: "nuggets"
};
var allProducts = [article1, article2, article3, article4, article5, article6, article7, article8, article9, article10, article11, article12, article13, article14, article15, article16, article17, article18, article19, article20];
var cart = [];
// funtion for adding to cart
function addToCart(item) {
    cart.push(item);
    console.log(cart);
    calculateSumCart(cart);
    numberCart();
}
// function to calculate the entire cart
function calculateSumCart(cart) {
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
        sum += cart[i].preis;
    }
    console.log(sum);
    document.getElementById('summe').innerHTML = sum.toString() + "$";
}
// function that shows how many items you have in your cart
function numberCart() {
    document.getElementById('qty').innerHTML = cart.length.toString();
}
// function to empty your cart
function deleteButton() {
    cart = [];
    numberCart();
    document.getElementById('summe').innerHTML = "0$";
}
function renderProducts(x) {
    var i = 0;
    while (i < x.length) {
        writeHtml(x[i]);
        console.log(x[i].name);
        i++;
    }
}
document.addEventListener('DOMContentLoaded', init);
function init() {
    renderProducts(allProducts);
}
function writeHtml(pro) {
    // mit append child mein css wird nicht mehr optimal funktionieren wurde
    if (pro.disturber == true) {
        document.getElementById('productWrapper').innerHTML += `<div class="produs">
        <img src=${pro.image}  class="thumbnail" alt=${pro.bezeichung}>
        <br>
        <p class="pret">
        ${pro.preis}$
        </p>
        <img src="img/sale.png" class="sale" alt="saletag">
        <button type="button" class="btn btn-danger" onclick="addToCart(article1)">Kaufen</button>
    
        </div>`;
    }
    else {
        document.getElementById('productWrapper').innerHTML += `<div class="produs">
    <img src=${pro.image}  class="thumbnail" alt=${pro.bezeichung}>
    <br>
    <p class="pret">
    ${pro.preis}$
    </p>
    <button type="button" class="btn btn-danger" onclick="addToCart(article1)">Kaufen</button>
    </div>`;
    }
}
function filter1() {
    var filter1array = [];
    document.getElementById('productWrapper').innerHTML = "";
    for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].preis <= 10) {
            filter1array.push(allProducts[i]);
        }
    }
    renderProducts(filter1array);
}
function filter2() {
    var filter1array = [];
    document.getElementById('productWrapper').innerHTML = "";
    for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].preis >= 10 && allProducts[i].preis <= 30) {
            filter1array.push(allProducts[i]);
        }
    }
    renderProducts(filter1array);
}
function filter3() {
    var filter1array = [];
    document.getElementById('productWrapper').innerHTML = "";
    for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].preis >= 30) {
            filter1array.push(allProducts[i]);
        }
    }
    renderProducts(filter1array);
}
function filtersize() {
    var filter1array = [];
    document.getElementById('productWrapper').innerHTML = "";
    for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].disturber == true) {
            filter1array.push(allProducts[i]);
        }
    }
    renderProducts(filter1array);
}
function lakers() {
    var filter1array = [];
    document.getElementById('productWrapper').innerHTML = "";
    for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].team == 'lakers') {
            filter1array.push(allProducts[i]);
        }
    }
    renderProducts(filter1array);
}
function showall() {
    var filter1array = [];
    document.getElementById('productWrapper').innerHTML = "";
    for (var i = 0; i < allProducts.length; i++) {
        filter1array.push(allProducts[i]);
    }
    renderProducts(filter1array);
}
//# sourceMappingURL=main.js.map