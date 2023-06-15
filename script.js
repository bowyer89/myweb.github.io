var cartItems = [];
var itemPrices = {
  "Product 1": 59.99,
  "Product 2": 119.99
};

function addToCart(productName) {
  cartItems.push(productName);
  updateCart();
}

function removeCartItem(itemIndex) {
  cartItems.splice(itemIndex, 1);
  updateCart();
}

function updateCart() {
  var cartItemsElement = document.getElementById("cart-items");
  var totalAmountElement = document.getElementById("total-amount");


  cartItemsElement.innerHTML = "";


  for (var i = 0; i < cartItems.length; i++) {
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(cartItems[i]));

    var removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("Remove"));
    removeButton.addEventListener("click", function(index) {
      return function() {
        removeCartItem(index);
      };
    }(i));

    newItem.appendChild(removeButton);
    cartItemsElement.appendChild(newItem);
  }

  var totalAmount = 0;
  for (var j = 0; j < cartItems.length; j++) {
    totalAmount += itemPrices[cartItems[j]];
  }
  totalAmountElement.textContent = totalAmount.toFixed(2);
}

function checkout() {
  if (cartItems.length > 0) {
    alert("Thank you for your purchase. Your product will be shiped out today.");////// link to paypay ///////
    cartItems = [];
    updateCart();
  } else {
    alert("Your cart is empty.");
  }
}
function sendEmail(event) {
  event.preventDefault();

//////////////// need to link to real email//////////////

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var emailContent = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

  console.log(emailContent);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  alert("Your message has been sent. We will get back to you soon. Thank you!");
}



