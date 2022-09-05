/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



class CartItem {
    constructor(name, img) {
        this.name = name;
        this.img = img;
    }
}

function ClearCartList() {
    listToStore = [];

    localStorage.clear();
}


function reCreateList(arr) {

    let newArr = [];
    let i = 0;
    while (i < arr.length) {
        newArr.push(new CartItem(arr[i], arr[i + 1]))
        i += 2;
    }
    return newArr;
}

let listToStore = [];
let splitArr = [];
let identifier = ',';

function RetrieveItem(button, img) {
    listToStore.push(new CartItem(button.getAttribute("name"), img));

    AddIdentifier();
    SetToLocalStorage();
}

function AddIdentifier() {
    //Genom att sätta splitArr till en blank array, lyckas vi undvika problemet där splitArr får till sig extra element efter den hämtas av "localstorage.GetItem".
    //Utan att "tömma" splitArr läggs extra objekt in i arrayen.
    splitArr.length = 0;
    console.log(splitArr);

    for (let index = 0; index < listToStore.length; index++) {
        const element = listToStore[index];
        splitArr.push(element.name, identifier, element.img, identifier)
    }

    console.log(listToStore);
    console.log(splitArr);
}
function SetToLocalStorage() {

    localStorage.setItem('item', splitArr);
    let str = localStorage.getItem('item');
    console.log(str);
}

function GetFromLocalStorage() {
    console.log(splitArr);
    let str = localStorage.getItem('item');
    if (str !== null) {
        console.log(str);
        let tmp = str.split(identifier);
        listToStore = reCreateList(tmp.filter(n => n));
        console.log(listToStore);
    }
}

/*function PrintCartItems()
{   
    var list = "<tr><th></th><th></th></tr>\n";

    var name;
    var img;

    for (var i = 0; i < listToStore.length; i++)
    {
        name = listToStore[i].name;
        console.log(name);
        img = listToStore[i].img;
        console.log(img);
        list += "<tr><td>" + name + "</td>\n <td> <img src ='" + img + "'></td> </tr>\n";
    }
     
    document.getElementById('list').innerHTML = list;
} */


//PrintCardItems2 prints every single item in the cart by first writing their HTML to a variable, then through a for-loop, changing certain values such as "name" to be personalized for every item.
function PrintCartItems2() {

    var list = '';
    var name;
    var img;
    //code for implementing unique names and images
    for (var i = 0; i < listToStore.length; i++) {
        name = listToStore[i].name;
        console.log(name);
        img = listToStore[i].img;
        console.log(img);
        list += '<ul class="cartWrap">' +
        '<li class="items even">' +
        '<div class="infoWrap">' +

        '<div class="img-fluid">' +
        '<img src="images/Tractor1.jpg">' +
        '</div>' +
        '<div class="cartSection">' +
        '<h3>'+name+ '</h3>' +
        '<p> <input type="text" class="qty" placeholder="3" /> x $5.00</p>' +
        '</div>' +
        '<div class="prodTotal cartSection">' +
        '<p>$15.00</p>' +
        '</div>' +
        '<div class="cartSection removeWrap">' +
        '<a href="#" class="remove">x</a>' +
        '</div>' +
        '</div>' +
        '<hr>' +
        '</li>' +
        '</ul>';
        //Wall of text above is the html used for each cart item.
    }

    document.getElementById('cart').innerHTML= list;
}


{/* <li class="items even">
          
                  <div class="infoWrap">
                    <div class="cartSection">
          
                      <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" class="itemImg" />
                      <p class="itemNumber">#QUE-007544-002</p>
                      <h3>Item Name 1</h3>
          
                      <p> <input type="text" class="qty" placeholder="3" /> x $5.00</p>
          
                      <p class="stockStatus"> In Stock</p>
                    </div>
          
                    <div class="prodTotal cartSection">
                      <p>$15.00</p>
                    </div>
                    <div class="cartSection removeWrap">
                      <a href="#" class="remove">x</a>
                    </div>
                  </div>
                </li>
          
                <li class="items odd">
                  <div class="infoWrap">
                    <div class="cartSection">
          
                      <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" class="itemImg" />
                      <p class="itemNumber">#QUE-007544-002</p>
                      <h3>Item Name 1</h3>
          
                      <p> <input type="text" class="qty" placeholder="3" /> x $5.00</p>
          
                      <p class="stockStatus out"> Out of Stock</p>
                    </div>
          
                    <div class="prodTotal cartSection">
                      <p>$15.00</p>
                    </div>
                    <div class="cartSection removeWrap">
                      <a href="#" class="remove">x</a>
                    </div>
                  </div>
                </li>
                <li class="items even">
                  <div class="infoWrap">
                    <div class="cartSection info">
          
                      <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" class="itemImg" />
                      <p class="itemNumber">#QUE-007544-002</p>
                      <h3>Item Name 1</h3>
          
                      <p> <input type="text" class="qty" placeholder="3" /> x $5.00</p>
          
                      <p class="stockStatus"> In Stock</p>
          
                    </div>
          
                    <div class="prodTotal cartSection">
                      <p>$15.00</p>
                    </div>
          
                    <div class="cartSection removeWrap">
                      <a href="#" class="remove">x</a>
                    </div>
                  </div>
                  
                </li> */}