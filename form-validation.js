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

//note för själv. imorgon gå igenom vad som ska generaras i for loopen och börja byta ut variablar som du tar ner från list to store


      list += '<li class="list-group-item d-flex justify-content-between lh-sm">' +
      '<div>' + 
        '<h6 class="my-0">Product name</h6>' +
        '<small class="text-muted">Brief description</small>' +
      '</div>' +
      '<span class="text-muted">$12</span>' + 
    '</li>' +
    '<li class="list-group-item d-flex justify-content-between lh-sm">' +
      '<div>' +
        '<h6 class="my-0">Second product</h6>' +
        '<small class="text-muted">Brief description</small>' +
      '</div>' +
      '<span class="text-muted">$8</span>' +
    '</li>' +
    '<li class="list-group-item d-flex justify-content-between lh-sm">' +
      '<div>' +
        '<h6 class="my-0">Third item</h6>' +
        '<small class="text-muted">Brief description</small>' +
      '</div>' +
      '<span class="text-muted">$5</span>' +
    '</li>' +
    '<li class="list-group-item d-flex justify-content-between">' +
    '  <span>Total (USD)</span>' +
    '  <strong>$20</strong>' +
    '</li>';
      
  }
  document.getElementById('printHere').innerHTML = list;
}
