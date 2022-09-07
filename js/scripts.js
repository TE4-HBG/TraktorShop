/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



class CartItem {
    constructor(name, img, price) {
        this.name = name;
        this.img = img;
        this.price = price;
    }
}

function ClearCartList() {
    listToStore = [];

    localStorage.clear();

    location.reload();
    CalcTotalPrice();
}

function InitCart()
{
    GetFromLocalStorage();
    PrintCartItems();
    CalcTotalPrice();
    
}

function reCreateList(arr) {

    let newArr = [];
    let i = 0;
    while (i < arr.length) {
        newArr.push(new CartItem(arr[i], arr[i + 1], arr[i + 2]))
        i += 3;
    }
    return newArr;
}

let listToStore = [];
let splitArr = [];
let identifier = ',';

function RetrieveItem(button, img, price) {    
    listToStore.push(new CartItem(button.getAttribute("name"), img, price));
    document.getElementById('itemNumberDisplay').innerHTML = listToStore.length;
    AddIdentifier();
    SetToLocalStorage();
}

function AddIdentifier() {
    //Genom att sätta splitArr till en blank array, lyckas vi undvika problemet där splitArr får till sig extra element efter den hämtas av "localstorage.GetItem".
    //Utan att "tömma" splitArr läggs extra objekt in i arrayen.
    splitArr.length = 0;
    //console.log(splitArr);

    for (let index = 0; index < listToStore.length; index++) {
        const element = listToStore[index];
        splitArr.push(element.name, identifier, element.img, identifier, element.price, identifier)
    }

   // console.log(listToStore);
    //console.log(splitArr);
}

//Puts information into the local web storage so that information on our site can be saved through 
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
        listToStore = reCreateList(tmp.filter(n => n));
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
//PrintCardtItems prints every single item in the cart by first writing their HTML to a variable, then through a for-loop, changing certain values such as "name" to be personalized for every item.
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