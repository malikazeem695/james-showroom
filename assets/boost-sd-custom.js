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
                  }
                  // End-------------------------------------------------------------
               } catch (e) {
                  console.warn(e);
               }
            }
         }),
      });
   }
}

window.__BoostCustomization__ = (window.__BoostCustomization__ ?? []).concat([customize.updateProductItemGrid]);