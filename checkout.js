var temporary = JSON.parse(localStorage.getItem("totalList")) || [];
var lastRemoved = "";
function reload() {
    var checkoutListElement = document.getElementById("listDisplay");
    checkoutListElement.innerHTML = '';
    for (var i = 0; i < temporary.length; i++) {
        (function(index) {
            var element = document.createElement('li');
            element.textContent = temporary[index];

            var b = document.createElement('button');
            b.textContent = 'Remove';
            b.onclick = function() {
                var current = temporary[index];
                if (current == "Falafel and Hummus") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-8.99);
                }
                if (current == "Samosas" || current == "Apfelkuchen") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-7.99);
                }
                if (current == "Bruschetta" || current == "Flan") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-5.99);
                }
                if (current == "Tortilla Chips" || current == "Malabi" || current == "Tres Leches Cake") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-6.99);
                }
                if (current == "Koshary" || current == "Chole Bhature" || current == "Thai Red Curry" || current == "Buddha's Delight") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-20.99);
                }
                if (current == "Ratatouille" || current == "Arepas") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-16.99);
                }
                if (current == "Japchae") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-15.99);
                }
                if (current == "Chiles Rellenos") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-19.99);
                }
                if (current == "Kulfi" || current == "Soda" || current == "Lemonade") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-2.99);
                }
                if (current == "Sesame Balls") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-3.99);
                }
                removeItem(index);
            };
            element.appendChild(b);
            checkoutListElement.appendChild(element);
        })(i);
    }
    
}
function removeItem(num) {
    temporary.splice(num, 1);
    //array[index] is removed
                //var current = array[index];
                /*if (current == "Falafel and Hummus") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-8.99);
                }*/
    localStorage.setItem("totalList", JSON.stringify(temporary));
    reload();
}
reload();


function updateCard() {
    localStorage.setItem("email", document.getElementById("emailBox").value);
    localStorage.setItem("countryCode", document.getElementById("countryCodeBox").value);
    localStorage.setItem("phoneNumber", document.getElementById("phoneBox").value);
    localStorage.setItem("name", document.getElementById("nameBox").value);
    localStorage.setItem("address", document.getElementById("addressBox").value);
    localStorage.setItem("town", document.getElementById("townBox").value);
    localStorage.setItem("zip", document.getElementById("zipBox").value);
    localStorage.setItem("driverInfo", document.getElementById("extraBox").value);

    localStorage.setItem("cardNumber", document.getElementById("cardNumberBox").value);
    localStorage.setItem("expirationDate", document.getElementById("expirationDateBox").value);
    localStorage.setItem("securityCode", document.getElementById("securityCodeBox").value);
    localStorage.setItem("cardholderName", document.getElementById("cardholderNameBox").value);

    var cost = parseFloat(localStorage.getItem("totalCost"));
    var tax = 0.04 * (cost + 5);
    document.getElementById("subtotal").value = "$" + cost.toFixed(2);
    document.getElementById("shipping").value = "$5.00";
    document.getElementById("tax").value = "$" + tax.toFixed(2);
    document.getElementById("total").value = "$" + (cost+5+tax).toFixed(2);
}

function allDonePage() {
    window.location.href = "alldone.html";
}