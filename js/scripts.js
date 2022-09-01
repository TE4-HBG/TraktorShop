/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
​
​
​
​
class cartItem {
    constructor(name, img)
    {
        this.name = name;
        this.img = img;
    }
}
function reCreateList(arr) {
    let newArr = [];
    let i = 0;
    while (i < arr.length) {
        newArr.push(new cartItem(arr[i], arr[i+1]))
        i += 2;
    }
​
​
​
    return newArr;
}
    //the array all items will be stored in
    let listToStore = [];
​
    //tmp array used for when it's split from an string to an array
    let splitArr = [];
​
    //identifier used to seperate objects and show where they shold be sticthed together
    let identifier = ',';
​
​
​
    //test objetcs, these are the items that a customer has putten in their cart
    let aa = new cartItem('bil', 'bil.png');
​
    let bb = new cartItem('tractor', 'tractor.jpg');
​
    let cc = new cartItem('vespa', 'vespa.png');
​
    //the cart. in "production" will be directly added to an array. This is the same as that array
    let arr = [aa,bb,cc]; 
​
    console.log(arr);
​
​
    //seperates objects into strings and adds the identifier. then it's added to another array
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        
        splitArr.push(element.name, identifier, element.img, identifier)
​
    }
​
​
    //adds the seperated array with idntifier to the localStorage in the customers browser. this will also turn the array into a string
    localStorage.setItem('item', splitArr);
​
​
    //saves the (now) string from localStorage into a variable
    let str = localStorage.getItem('item');
​
​
    //splits the string by the identifier and then saves it as an array. Each elemtn in our original obejcs are their own elemtn in this array
    console.log(str); 
    let tmp = str.split(identifier);
​
​
    //removes empty element in the split array and then recreates the original objects and saves them in the customers basket/cart
    listToStore = reCreateList(tmp.filter(n => n));
​
    console.log(listToStore);
​
​
/*
    for (let index = 0; index < listToStore.length; index++) {
        const element = listToStore[index];
        console.log(element);
        
    }
*/
​
    </script>
​
​
​
​
</body>
</html>