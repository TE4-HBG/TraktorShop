window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}
function makePDF() {
    const invoice = this.document.getElementById("invoice");
    console.log(invoice);
    console.log(window);
    var opt = {
        margin: 1,
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(invoice).set(opt).save();

}

//here is out copy pasted code for the print functions

class CartItem {
    constructor(name, img, price) {
        this.name = name;
        this.img = img;
        this.price = price;
    }
  }


listToStore = []; 
let userInfo; 

function GetFromLocalStorage() {
    //console.log(splitArr);
    let str = localStorage.getItem('item');
    if (str !== null) {
        //console.log(str);
        let tmp = str.split(',');
        listToStore = reCreateList(tmp.filter(n => n));
        //console.log(listToStore);
    }
    PrintCartItems();
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
  
      return intPrice;
  }
  



function PrintCartItems() {

    var list = '';
    var name;
    var img;
    var price;
    //code for implementing unique names and images
    for (var i = 0; i < listToStore.length; i++) {
        name = listToStore[i].name;
        img = listToStore[i].img;
        price = listToStore[i].price;
        console.log('the price for ' + name + ' is ' + price);
        list +=
            '<tr>' +
                '<td>' +
                    '<h6 class="mb-0">' + name +
                    '</h6> <span class="text-muted">in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit</span>' +
                '</td>' +

                '<td><span class="font-weight-semibold">€'+ price +
                '</span></td>' +
            '</tr>';

    }
    
    // userInfo = 
    // '<li>' +
    //     '<h5 class="my-2">' + usrName + '</h5>' +
    // '</li>' +
    // '<li>' + street + '</li>' +
    // '<li>23 BB Lane</li>' +
    // '<li>' + country + '</li>' +
    // '<li>' + zip + '</li>' +
    // '<li><a href="#" data-abc="true">' + email + '</a></li>';



    // document.getElementById('printUserHere').innerHTML = userInfo;

    document.getElementById('subTotal').innerHTML = '€ ' + CalcTotalPrice();
    document.getElementById('taxedTotal').innerHTML = '€ ' + CalcTotalPrice() * 1.25;
    document.getElementById('taxedTotal2').innerHTML = '€ ' + CalcTotalPrice() * 1.25;
    document.getElementById('printHere').innerHTML = list;
}


//make the js load in all the items from the cart. name, price and images

//then make so the relavente things in the template that should have info from the prevoius checkout page. like shipping adress and name

