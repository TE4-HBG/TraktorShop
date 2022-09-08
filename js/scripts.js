/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//the CartItem class conveniently contains and handles information about our tractors. These variables will later be saved to the local storage to be re-displayed in the cart.
class CartItem {
    constructor(name, img, price) {
        this.name = name;
        this.img = img;
        this.price = price;
    }
}

//Function to clear the cart completely.

function ClearCartList() {
    listToStore = [];

    localStorage.clear();

    location.reload();
    CalcTotalPrice();
}

//Function used to load the necessary information when the cart.html page is loaded.

function InitCart()
{
    GetFromLocalStorage();
    PrintCartItems();
    CalcTotalPrice();
    
}

//The ReCreateList function is used when receiving information from the local storage. As the local storage only accepts strings, we have to first turn our cart items into strings, then turn them into CartItems again when we retrieve the information.

function ReCreateList(arr) {

    let newArr = [];
    let i = 0;
    while (i < arr.length) {
        newArr.push(new CartItem(arr[i], arr[i + 1], arr[i + 2]))
        i += 3;
    }
    return newArr;
}

//Variables used in the process of setting and getting information from and to the local storage.s
let listToStore = [];
let splitArr = [];
let identifier = ',';


//The RetrieveItem function is used when a user clicks a "Add to cart" button on a html page. It retrieves the information of the specific CartItem linked with the button and prepares it to be set in the local storage.
function RetrieveItem(button, img, price) {    
    listToStore.push(new CartItem(button.getAttribute("name"), img, price));
    document.getElementById('itemNumberDisplay').innerHTML = listToStore.length;
    AddIdentifier();
    SetToLocalStorage();
}

//The AddIdentifier function puts every cartItem into a separate list and adds commas. These commas allow us to store the information as a string and later retrieve it as a CartItem.
function AddIdentifier() {

    //Genom att sätta splitArr till en blank array, lyckas vi undvika problemet där splitArr får till sig extra element efter den hämtas av "localstorage.GetItem".
    //Utan att "tömma" splitArr läggs extra objekt in i arrayen.
    //By setting splitArr to an empty array we avoid the problem where splitArr adds extra elements to itself when "localStorage.GetItem" is run.
    //The array displays the correct amount of items after it is "emptied".
    splitArr.length = 0;
    //console.log(splitArr);

    for (let index = 0; index < listToStore.length; index++) {
        const element = listToStore[index];
        splitArr.push(element.name, identifier, element.img, identifier, element.price, identifier)
    }

   // console.log(listToStore);
    //console.log(splitArr);
}

//Puts information into the local web storage so that information on our site can be saved through page refreshes
function SetToLocalStorage() {

    localStorage.setItem('item', splitArr);
    let str = localStorage.getItem('item');
    //console.log(str);
}
                           
//Captures items from our local storage and sets them into our list to be used in the website.
function GetFromLocalStorage() {
    //console.log(splitArr);
    let str = localStorage.getItem('item');
    if (str !== null) {
        //console.log(str);
        let tmp = str.split(identifier);
        listToStore = ReCreateList(tmp.filter(n => n));
        //console.log(listToStore);
    }
    document.getElementById('itemNumberDisplay').innerHTML = listToStore.length;
}

//Function used in RemoveItemFromList() to add items back to the list 
function RepopulateList()
{
    AddIdentifier();
    SetToLocalStorage();
    PrintCartItems();
    CalcTotalPrice();
}

//PrintCardtItems draws every single item in the cart on the page by first setting the item's HTML structure to a variable, then through a for-loop changing certain values such as "name" to be personalized for every item.
function PrintCartItems() {

    var list = '';
    var name;
    var img;
    var price;
    //code for implementing unique names and images
    for (var i = 0; i < listToStore.length; i++) {
        name = listToStore[i].name;
        //console.log(name);
        img = listToStore[i].img;
        //console.log(img);
        price = listToStore[i].price;
        //console.log(price);
        list += '<ul class="cartWrap">' +
        '<li class="items even">' +
        '<div class="infoWrap">' +
        '<div class="img-fluid">' +
        '<img src="'+img+'">' +
        '</div>' +
        '<div class="cartSection">' +
        '<h3>'+name+'</h3>' +
        //'<p> <input type="text" class="qty" placeholder="3" /> x $5.00</p>' +
        '</div>' +
        '<div class="prodTotal cartSection">' +
        '<p> €'+price+'</p>' +
        '</div>' +
        '<div class="cartSection removeWrap">' +
        '<a class="remove" onclick="RemoveItemFromList(this, '+i+')">x</a>' +
        '</div>' +
        '</div>' +
        '<hr>' +
        '</li>' +
        '</ul>';
        //Wall of text above is the html used for each cart item.
    }
    document.getElementById('cart').innerHTML = list;
}

//CalcTotalPrice calculates the total price of items inside the cart and displays it.
function CalcTotalPrice()
{
    let intPrice = 0;
    if (listToStore.length > 0)
    {
        parseInt(intPrice)
        for (let i = 0; i < listToStore.length; i++)
        {
            intPrice = +intPrice +  +listToStore[i].price
        }
    }

    let price = '€'
    price += intPrice;
    document.getElementById("totalPrice").innerHTML = price;
}
//RemoveItemFromList is a function linked to a button on the page that removes just one single item from the cart list, depending on which button was pressed.

function RemoveItemFromList(button, i)
{
    button.parentElement.parentElement.parentElement.remove();
    localStorage.removeItem('item')
    listToStore.splice(i, 1);
    console.log(listToStore);
    RepopulateList();
    document.getElementById('itemNumberDisplay').innerHTML = listToStore.length;
}