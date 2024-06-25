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
          }
       })
    })
  }
}

window.__BoostCustomization__ = (window.__BoostCustomization__ ?? []).concat([customize.updateProductItemGrid, customize.productListAfterRender]);