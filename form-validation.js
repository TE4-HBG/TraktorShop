// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

class CartItem {
  constructor(name, img, price) {
      this.name = name;
      this.img = img;
      this.price = price;
  }
}

let listToStore = [];
let identifier = ',';

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

      list += 
      '<li class="list-group-item d-flex justify-content-between lh-sm">' +
        '<div>' + 
          '<h6 class="my-0">'+ name + '</h6>' +
          '<small class="text-muted">A Tractor</small>' +
        '</div>' +
        '<span class="text-muted">€'+ price + '</span>' + 
      '</li>';
      
  }

  list += '<li class="list-group-item d-flex justify-content-between">' +
  '<span>Total </span>' +
  '<strong>' + 
  '</strong>' + CalcTotalPrice();
  '</li>';

  document.getElementById('printHere').innerHTML = list;
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

    let euro = '€'
    euro += intPrice;
    return euro;
}
