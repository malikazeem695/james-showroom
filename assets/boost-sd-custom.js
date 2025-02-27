/*********************** Custom JS for Boost AI Search & Discovery  ************************/

const customize = {
   updateProductItemGrid: (componentRegistry) => {
      componentRegistry.useComponentPlugin('ProductItem', {
         name: 'Add extra information',
         enabled: true,
         apply: () => ({
            afterRender(element) {
               try {
                  // Start customization--------------------------------------------
                  let productData = element.getParams().props.product;
                  let productId = productData.id;
                  if (productData?.split_product) {
                     productId = productData.variant_id;
                  }
                  let productItem = document.querySelector('[data-product-id="' + productId + '"]');
                  if (productItem) {
                     /* use pure js here */
                     /* Example - Add percent sale info */
                     // if (productData?.percent_sale_min > 0) {
                     //    const percentSaleHtml = `<span class="boost-sd-percent-sale-info">-${productData.percent_sale_min}%</span>`;
                     //    if (!productItem.querySelector('.boost-sd-percent-sale-info')) {
                     //       productItem.querySelector('.boost-sd__product-price-wrapper').insertAdjacentHTML('beforeend', percentSaleHtml);
                     //    }
                     // }
                      /* End example */
                      const tags_have = productData.tags;
                      if(productData.product_type == 'Lighting' ||  productData.product_type == 'Furniture' || productData.product_type == 'Carpets' ||  tags_have.includes('carpets') || productData.product_type == 'Carpet')
        {
        const price_widget = `<p class="login_for_pricing"><a class="login" href="/account/login">Log in</a> <span>for pricing</span></p>`;
        productItem.querySelector('.boost-sd__product-info').insertAdjacentHTML('beforeend', price_widget);
        }
      else{
         console.log('yes here is');
        const price_widget = `<p class="login_for_pricing"><a class="login" href="/account/login">Log in</a> <span>for pricing and samples</span></p>`;
      }
                      
                  }
                  // End-------------------------------------------------------------
               } catch (e) {
                  console.warn(e);
               }
            }
         }),
      });
   },
   productListAfterRender: (componentRegistry) => {
      let preventReCallProductHandlesTheSame = [];
      componentRegistry.useComponentPlugin('ProductList', {
        name: 'Product List After Render',
        enabled: true,
        apply: () => ({
          afterRender(element){
            const helpersRef = element.getHelpers();
            const productHandles = helpersRef.getProductHandles();
            const isDuplicate = JSON.stringify(preventReCallProductHandlesTheSame) === JSON.stringify(productHandles);
            preventReCallProductHandlesTheSame = productHandles;

            if (productHandles?.length && !isDuplicate) { //Prevent executing callback multiple times
              // Extra function call goes here
             console.log('Calling extra function');
             var productItems = document.querySelectorAll('.boost-sd__product-item');
             var promotionBanner = document.querySelector('.promotion_banner_content');
             if (productItems.length >= 7) {
               if (window.innerWidth > 767) {
               var seventhItem = productItems[6];
               }
               else{
                  var seventhItem = productItems[5];
               }
               if(promotionBanner.length >= 0){
seventhItem.parentNode.insertBefore(promotionBanner, seventhItem.nextSibling);
               }
             }

            }
            var toolbar = document.querySelector('.boost-sd__toolbar-top-mobile');   
            window.addEventListener('scroll', function() {
                var computedStyle = window.getComputedStyle(toolbar);
                
                if (computedStyle.position === 'fixed') {
                    toolbar.classList.add('sticky_is_enabled');
                } else {
                    toolbar.classList.remove('sticky_is_enabled');
                }
            });

            var selectArrows = document.querySelectorAll('body.collection .boost-sd__filter-option-label--inline-block .boost-sd__filter-option-title');

    selectArrows.forEach(function(arrow) {
        // Find the child element with class 'boost-sd__filter-option-icon'
        var icon = arrow.querySelector('.boost-sd__filter-option-icon');
        if (icon) {
            icon.setAttribute('viewBox', '0 0 11 7'); // Change the class attribute value
        }

        // Find the child element with class 'boost-sd__filter-option-path'
        var path = arrow.querySelector('.boost-sd__filter-option-path');
        if (path) {
            path.setAttribute('d', 'M1 0.5L5.5 5.5L10 0.5'); // Change the 'd' attribute value
        }
    });

          }
       })
    })
   },
   productListAfterRender: (componentRegistry) => {
      componentRegistry.useComponentPlugin('HeaderDescription', {
          name: 'Modify Collection Header',
          enabled: true,
          apply: () => ({
              afterRender(element) {
                const richtextMetafield = document.querySelector('.richtextMetafield');
                const headerDescription = document.querySelector('.boost-sd__header-description');
                
                if (richtextMetafield && headerDescription && !headerDescription.dataset.appended) {
                    headerDescription.innerHTML += richtextMetafield.innerHTML;
                    headerDescription.dataset.appended = 'true';
                }
              },
          }),
      });
  }
}

window.__BoostCustomization__ = (window.__BoostCustomization__ ?? []).concat([customize.updateProductItemGrid, customize.productListAfterRender]);