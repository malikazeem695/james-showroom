$(document).ready(function() {
    var modal_for_quantity = document.getElementById("myModal_for_quantity");
  var span_for_quantity = document.getElementsByClassName("close_for_quantity")[0];
    setTimeout(function() {
  function handleButtonClick(event) {
        setTimeout(function() {
        var buttons = document.querySelectorAll('.boost-sd__button[aria-label="Select options"]');
      buttons.forEach(function(button) {
        button.addEventListener('click', handleButtonClick);
        $.ajax({
      type: 'GET',
      url: '/cart.js',
      dataType: 'json',
      success: function(cart) {
        var itemCount = cart.item_count;
        if(itemCount >= 15){
          var elements = $('.boost-sd__btn-add-to-cart');
    var newElement = $('<div class="custom_added boost-sd__button boost-sd__button--primary boost-sd__button--full-width boost-sd__button--large boost-sd__btn-add-to-cart"><div class="boost-sd__button-icon boost-sd__button-icon--is-image boost-sd__button-icon--fill-current-color" style="background-image: url(&quot;https://boost-cdn-prod.bc-solutions.net/icon/add-to-cart-white.svg&quot;);"></div><div class="boost-sd__button-text">Add to cart</div></div>');
    elements.replaceWith(newElement);
    const inputField = document.querySelector('.boost-sd__quantity-input');
    const inputFields = document.querySelectorAll('.boost-sd__button--as-quantity');
inputFields.forEach(function(inputField) {
  inputField.disabled = true;
});
if (inputField) {
  inputField.disabled = true;
}
    var buttons = document.querySelectorAll('.custom_added');
      buttons.forEach(function(button) {
        button.addEventListener('click', customaddedButtonClick);
      });
        }
        else{
          var quantityInput = document.querySelector('.boost-sd__quantity-input');
          var quantityInputplus = document.querySelectorAll('.boost-sd__button--as-quantity');
          quantityInput.setAttribute('old-val', quantityInput.value);
  quantityInput.addEventListener('input', function() {
    setTimeout(function() {
    var enteredValue = quantityInput.value;
    var oldValAttribute = quantityInput.getAttribute('old-val');    
    $.ajax({
      type: 'GET',
      url: '/cart.js',
      dataType: 'json',
      success: function(cart) {
        var itemCount = parseInt(cart.item_count);
          var getdifference = parseInt(enteredValue);
        var gettotal = itemCount + getdifference;
        
        if(gettotal > 15){
          quantityInput.setAttribute('value', oldValAttribute);
          quantityInput.value = oldValAttribute;
        }
        else{
          quantityInput.setAttribute('old-val', enteredValue);
        }
      },
      error: function(err) {
      }
    });
  }, 500);
  });
  quantityInputplus.forEach(function(quantityInputplus) {
  quantityInputplus.addEventListener('click', function() {
    setTimeout(function() {
      var quantityInput = document.querySelector('.boost-sd__quantity-input');
      quantityInputplus.disabled = true;
      var enteredValue = quantityInput.value;
      var oldValAttribute = quantityInput.getAttribute('old-val');    
      $.ajax({
        type: 'GET',
        url: '/cart.js',
        dataType: 'json',
        success: function(cart) {
          var itemCount = parseInt(cart.item_count);
            var getdifference = parseInt(enteredValue);
          var gettotal = itemCount + getdifference;
          
          if(gettotal > 15){
            quantityInput.setAttribute('value', oldValAttribute);
            quantityInput.value = oldValAttribute;
          }
          else{
            quantityInput.setAttribute('old-val', enteredValue);
          }
        },
        error: function(err) {
        }
      });
      quantityInputplus.disabled = false;
    }, 200);
  });
});
        }
      },
      error: function(err) {
      }
    });
      });
      }, 500);
      }
      
      var buttons = document.querySelectorAll('.boost-sd__button[aria-label="Select options"]');
      buttons.forEach(function(button) {
        button.addEventListener('click', handleButtonClick);
      });
      var buttons_select_options = document.querySelectorAll('.boost-sd__button[title="Select options"]');
      buttons_select_options.forEach(function(button) {
        button.addEventListener('click', handleButtonClick);
      });
      var buttons_quick_view = document.querySelectorAll('.boost-sd__btn-quick-view');
      buttons_quick_view.forEach(function(button) {
        button.addEventListener('click', handleButtonClick);
      });

      $(".boost-sd__tooltip").click(function(event) {
        setTimeout(function() {
            function handleButtonClick(event) {
                setTimeout(function() {
                var buttons = document.querySelectorAll('.boost-sd__button[aria-label="Select options"]');
              buttons.forEach(function(button) {
                button.addEventListener('click', handleButtonClick);
                $.ajax({
              type: 'GET',
              url: '/cart.js',
              dataType: 'json',
              success: function(cart) {
                var itemCount = cart.item_count;
                if(itemCount >= 15){
                  var elements = $('.boost-sd__btn-add-to-cart');
            var newElement = $('<div class="custom_added boost-sd__button boost-sd__button--primary boost-sd__button--full-width boost-sd__button--large boost-sd__btn-add-to-cart"><div class="boost-sd__button-icon boost-sd__button-icon--is-image boost-sd__button-icon--fill-current-color" style="background-image: url(&quot;https://boost-cdn-prod.bc-solutions.net/icon/add-to-cart-white.svg&quot;);"></div><div class="boost-sd__button-text">Add to cart</div></div>');
            elements.replaceWith(newElement);
            const inputField = document.querySelector('.boost-sd__quantity-input');
    const inputFields = document.querySelectorAll('.boost-sd__button--as-quantity');
inputFields.forEach(function(inputField) {
  inputField.disabled = true;
});
if (inputField) {
  inputField.disabled = true;
}
            var buttons = document.querySelectorAll('.custom_added');
              buttons.forEach(function(button) {
                button.addEventListener('click', customaddedButtonClick);
              });
                }
                else{
                  var quantityInput = document.querySelector('.boost-sd__quantity-input');
                  var quantityInputplus = document.querySelectorAll('.boost-sd__button--as-quantity');
                  quantityInput.setAttribute('old-val', quantityInput.value);
          quantityInput.addEventListener('input', function() {
            setTimeout(function() {
            var enteredValue = quantityInput.value;
            var oldValAttribute = quantityInput.getAttribute('old-val');    
            $.ajax({
              type: 'GET',
              url: '/cart.js',
              dataType: 'json',
              success: function(cart) {
                var itemCount = parseInt(cart.item_count);
                  var getdifference = parseInt(enteredValue);
                var gettotal = itemCount + getdifference;
                
                if(gettotal > 15){
                  quantityInput.setAttribute('value', oldValAttribute);
                  quantityInput.value = oldValAttribute;
                }
                else{
                  quantityInput.setAttribute('old-val', enteredValue);
                }
              },
              error: function(err) {
              }
            });
          }, 500);
          });
          quantityInputplus.forEach(function(quantityInputplus) {
            quantityInputplus.addEventListener('click', function() {
              setTimeout(function() {
                var quantityInput = document.querySelector('.boost-sd__quantity-input');
                quantityInputplus.disabled = true;
                var enteredValue = quantityInput.value;
                var oldValAttribute = quantityInput.getAttribute('old-val');    
                $.ajax({
                  type: 'GET',
                  url: '/cart.js',
                  dataType: 'json',
                  success: function(cart) {
                    var itemCount = parseInt(cart.item_count);
                      var getdifference = parseInt(enteredValue);
                    var gettotal = itemCount + getdifference;
                    
                    if(gettotal > 15){
                      quantityInput.setAttribute('value', oldValAttribute);
                      quantityInput.value = oldValAttribute;
                    }
                    else{
                      quantityInput.setAttribute('old-val', enteredValue);
                    }
                  },
                  error: function(err) {
                  }
                });
                quantityInputplus.disabled = false;
              }, 200);
            });
          });
                }
              },
              error: function(err) {
              }
            });
              });
              }, 500);
             
              }
        console.log("<-----yes clicked----->");
        var buttons = document.querySelectorAll('.boost-sd__button[aria-label="Select options"]');
        buttons.forEach(function(button) {
          button.addEventListener('click', handleButtonClick);
        });
        var buttons_select_options = document.querySelectorAll('.boost-sd__button[title="Select options"]');
        buttons_select_options.forEach(function(button) {
          button.addEventListener('click', handleButtonClick);
        });
        var buttons_quick_view = document.querySelectorAll('.boost-sd__btn-quick-view');
        buttons_quick_view.forEach(function(button) {
          button.addEventListener('click', handleButtonClick);
        });
    }, 1000);
      });

      }, 2000);
      function customaddedButtonClick(event) {
        modal_for_quantity.style.display = "block";
      }
      span_for_quantity.onclick = function() {
    modal_for_quantity.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal_for_quantity) {
      modal_for_quantity.style.display = "none";
    }
      }
      if ($('[data-cart-form="cart-template"]').length > 0 || $('.js-cart_items').length >0) {
        $.ajax({
          type: 'GET',
          url: '/cart.js',
          dataType: 'json',
          success: function(cart) {
            var itemCount = cart.item_count;
            if(itemCount >= 15){
              var elements = $('.product-plus');
              elements.removeClass("js-change-quantity");
            }
          },
          error: function(err) {
          }
        });
      }
  if ($('.shopify-section--product-template').length > 0) {
        $.ajax({
          type: 'GET',
          url: '/cart.js',
          dataType: 'json',
          success: function(cart) {
            var itemCount = cart.item_count;
            if(itemCount >= 15){
              var quantityInput = document.querySelector('button.add_to_cart.global-button.global-button--primary.show);
                quantityInputplus.disabled = true;
            }
          },
          error: function(err) {
          }
        });
      }
      setTimeout(function() {
      var quantityInputs = document.querySelectorAll('.quantity');
quantityInputs.forEach(function(inputField) {
  inputField.addEventListener('input', function() {
    setTimeout(function() {
    var enteredValue = inputField.value;
    var oldValAttribute = inputField.getAttribute('old-val');    
    $.ajax({
      type: 'GET',
      url: '/cart.js',
      dataType: 'json',
      success: function(cart) {
        var itemCount = cart.item_count;
        if(enteredValue > oldValAttribute){
          var getdifference = enteredValue - oldValAttribute;
        var gettotal = itemCount + getdifference;
        if(gettotal > 15){
          inputField.value = oldValAttribute;
        }
      }
      },
      error: function(err) {
      }
    });
  }, 500);
  });
});
var quantityplusInputs = document.querySelectorAll('.js-change-quantity');
quantityplusInputs.forEach(function(quantityInputplus) {
  quantityInputplus.addEventListener('click', function() {
    const siblingQuantityElement = quantityInputplus.nextElementSibling;

    if (siblingQuantityElement && siblingQuantityElement.classList.contains('quantity')) {
      // Do something with the 'quantity' element
      console.log('Found sibling with class "quantity":', siblingQuantityElement);
    }
  });
});
}, 500);
  });

 
  