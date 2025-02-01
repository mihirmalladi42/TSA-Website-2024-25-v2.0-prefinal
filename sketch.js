{
    var header = document.getElementById("header");
var dropdown = document.getElementById("dropDiv");
var itemList = document.getElementById("dropList");
var items = JSON.parse(localStorage.getItem("totalList")) || [];
function reload() {
    items = JSON.parse(localStorage.getItem("totalList")) || [];
    document.getElementById("costLabel").innerHTML = Math.abs(parseFloat(localStorage.getItem("totalCost")).toFixed(2));
    console.log("RELOAD REACHED");
    itemList.innerHTML = "";
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var li = document.createElement("li");
        li.textContent = item;

        var removeButton = document.createElement("button");
        removeButton.textContent = 'X';
        removeButton.className = 'remove-btn';
        (function(index, item) {
            removeButton.onclick = function () {
                var current = items[index];
                console.log("COST UPDATING FOR " + current);
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
                removeItem(index, item);
            };
        })(i, item);
        li.appendChild(removeButton);
        itemList.appendChild(li);
    }
}
function removeItem(index, item) {
    items.splice(index, 1);
    localStorage.setItem("totalList", JSON.stringify(items));
    document.getElementById("costLabel").innerHTML = Math.abs(parseFloat(localStorage.getItem("totalCost")).toFixed(2));
    reload();
}

reload();
document.getElementById("costLabel").innerHTML = Math.abs(parseFloat(localStorage.getItem("totalCost")).toFixed(2));
function proceedToCheckout() {
    window.location.href = "checkout.html";
}
}



//Appetizer Functionality
{
function openFalafel() {
    document.getElementById("falafelDisplay").style.display = "block";
}
function falafel() {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 8.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Falafel and Hummus");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("falafelDisplay").style.display = "none";
   reload();
}
function closeFalafel() {
    document.getElementById("falafelDisplay").style.display = "none";
}
function openSamosas() {
    document.getElementById("samosasDisplay").style.display = "block";
}
function samosas() {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 7.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Samosas");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("samosasDisplay").style.display = "none";
   reload();
}
function closeSamosas() {
    document.getElementById("samosasDisplay").style.display = "none";
}
function openBruschetta() {
    document.getElementById("bruschettaDisplay").style.display = "block";
}
function bruschetta() {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 5.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Bruschetta");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("bruschettaDisplay").style.display = "none";
   reload();
}
function closeBruschetta() {
    document.getElementById("bruschettaDisplay").style.display = "none";
}
function openTortilla() {
    document.getElementById("tortillaDisplay").style.display = "block";
}
function tortilla() {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 6.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Tortilla Chips");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("tortillaDisplay").style.display = "none";
   reload();
}
function closeTortilla() {
    document.getElementById("tortillaDisplay").style.display = "none";
}
}
//Entree Functionality
{
function openKoshary() {
    document.getElementById("kosharyDisplay").style.display = "block";
}
function koshary() {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 20.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Koshary");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("kosharyDisplay").style.display = "none";
   reload();
}
function closeKoshary() {
    document.getElementById("kosharyDisplay").style.display = "none";
}

function openRatatouille() {
    document.getElementById("ratatouilleDisplay").style.display = "block";
}
function ratatouille() {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 16.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Ratatouille");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("ratatouilleDisplay").style.display = "none";
   reload();
}
function closeRatatouille() {
    document.getElementById("ratatouilleDisplay").style.display = "none";
}

function openJapchae() {
    document.getElementById("japchaeDisplay").style.display = "block";
}
function japchae() {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 15.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Japchae");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("japchaeDisplay").style.display = "none";
   reload();
}
function closeJapchae() {
    document.getElementById("japchaeDisplay").style.display = "none";
}

function openChole() {
    document.getElementById("choleDisplay").style.display = "block";
}
function chole() {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 20.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Chole Bhature");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("choleDisplay").style.display = "none";
   reload();
}
function closeChole() {
    document.getElementById("choleDisplay").style.display = "none";
}





function openThaiRed() {
    document.getElementById("thairedDisplay").style.display = "block";
}
function thaiRed() {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 20.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Thai Red Curry");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("thairedDisplay").style.display = "none";
   reload();
}
function closeThaiRed() {
    document.getElementById("thairedDisplay").style.display = "none";
}


function openChiles() {
    document.getElementById("chilesDisplay").style.display = "block";
}
function chiles() {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 19.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Chiles Rellenos");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("chilesDisplay").style.display = "none";
   reload();
}
function closeChiles() {
    document.getElementById("chilesDisplay").style.display = "none";
}



function openArepas() {
    document.getElementById("arepasDisplay").style.display = "block";
}
function arepas() {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 16.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Arepas");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("arepasDisplay").style.display = "none";
   reload();
}
function closeArepas() {
    document.getElementById("arepasDisplay").style.display = "none";
}

function openBuddhas() {
    document.getElementById("buddhasDisplay").style.display = "block";
}
function buddhas() {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 20.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Buddha's Delight");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("buddhasDisplay").style.display = "none";
   reload();
}
function closeBuddhas() {
    document.getElementById("buddhasDisplay").style.display = "none";
}
}
//Dessert Functionality
{
    function openApfelkuchen() {
        document.getElementById("apfelkuchenDisplay").style.display = "block";
    }
    function apfelkuchen() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 7.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Apfelkuchen");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("apfelkuchenDisplay").style.display = "none";
       reload();
    }
    function closeApfelkuchen() {
        document.getElementById("apfelkuchenDisplay").style.display = "none";
    }
    
    function openMalabi() {
        document.getElementById("malabiDisplay").style.display = "block";
    }
    function malabi() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 6.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Malabi");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("malabiDisplay").style.display = "none";
       reload();
    }
    function closeMalabi() {
        document.getElementById("malabiDisplay").style.display = "none";
    }
    




    function openTresLeches() {
        document.getElementById("treslechesDisplay").style.display = "block";
    }
    function tresLeches() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 6.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Tres Leches Cake");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("treslechesDisplay").style.display = "none";
       reload();
    }
    function closeTresLeches() {
        document.getElementById("treslechesDisplay").style.display = "none";
    }
    



    function openKulfi() {
        document.getElementById("kulfiDisplay").style.display = "block";
    }
    function kulfi() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 2.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Kulfi");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("kulfiDisplay").style.display = "none";
       reload();
    }
    function closeKulfi() {
        document.getElementById("kulfiDisplay").style.display = "none";
    }
    
    
    
    
    
    function openFlan() {
        document.getElementById("flanDisplay").style.display = "block";
    }
    function flan() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 5.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Flan");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("flanDisplay").style.display = "none";
       reload();
    }
    function closeFlan() {
        document.getElementById("flanDisplay").style.display = "none";
    }
    
    
    function openSesame() {
        document.getElementById("sesameDisplay").style.display = "block";
    }
    function sesame() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 3.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Sesame Balls");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("sesameDisplay").style.display = "none";
       reload();
    }
    function closeSesame() {
        document.getElementById("sesameDisplay").style.display = "none";
    }
}
//Drinks Functionality
{

    function openSoda() {
        document.getElementById("sodaDisplay").style.display = "block";
    }
    function soda() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 2.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Soda");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("sodaDisplay").style.display = "none";
       reload();
    }
    function closeSoda() {
        document.getElementById("sodaDisplay").style.display = "none";
    }
    function openLemonade() {
        document.getElementById("lemonadeDisplay").style.display = "block";
    }
    function lemonade() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 2.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Lemonade");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("lemonadeDisplay").style.display = "none";
       reload();
    }
    function closeLemonade() {
        document.getElementById("lemonadeDisplay").style.display = "none";
    }
    function openWater() {
        document.getElementById("waterDisplay").style.display = "block";
    }
    function water() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 0);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Water");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("waterDisplay").style.display = "none";
       reload();
    }
    function closeWater() {
        document.getElementById("waterDisplay").style.display = "none";
    }


}
function updateContact() {
    localStorage.setItem("email", document.getElementById("emailBox").value);
    localStorage.setItem("countryCode", document.getElementById("countryCodeBox").value);
    localStorage.setItem("phoneNumber", document.getElementById("phoneBox").value);
    localStorage.setItem("name", document.getElementById("nameBox").value);
    localStorage.setItem("address", document.getElementById("addressBox").value);
    localStorage.setItem("town", document.getElementById("townBox").value);
    localStorage.setItem("zip", document.getElementById("zipBox").value);
    localStorage.setItem("driverInfo", document.getElementById("extraBox").value);
}
function goToHomepage() {
    localStorage.clear();
    reload();
    window.location.href = "index.html";
}
function proceedToCheckout() {
    window.location.href = "checkout.html";
}
if (localStorage.length === 0) {
    document.getElementById("costLabel").innerHTML = "0";
}
document.getElementById("header").addEventListener("click", function () {
    var dropDiv = document.getElementById("dropDiv");
    document.getElementById("dropDivMenu").classList.remove("open");
    dropDiv.classList.toggle("open");
  });
  document.getElementById("headerMenu").addEventListener("click", function () {
    var dropDivMenu = document.getElementById("dropDivMenu");
    document.getElementById("dropDiv").classList.remove("open");
    dropDivMenu.classList.toggle("open");
  });
  function goToAppetizers() {
    window.location.href="appetizers.html";
  }
  