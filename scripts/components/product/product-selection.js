import options from '../../lib/options';
import setUrlParams from '../../lib/set-url-params';
import updatePrices from '../../lib/update-prices';
import updatePriceBadge from '../../lib/update-price-badge';

export default window.component((node, ctx) => {
  const opts = options(node);
  const { product, selectedOrFirstAvailableVariant, currentVariant } = JSON.parse(
    document.querySelector('.js-product-json').innerHTML
  );
  const onlyOneOption = product.variants.length === 1;
  const { variants } = product;
  /**
   * Selected, or first available variants
   * If none of these are the case, fallback
   * to first variant in the array
   */
  // let variant =
  //   variants.find(v => v.id === selectedOrFirstAvailableVariant) ||
  //   variants.find(v => v.available) ||
  //   variants[0];
  let variant = onlyOneOption
    ? variants.find(v => v.id === selectedOrFirstAvailableVariant)
    : currentVariant;
  ctx.emit('variant:change', null, variant);

  opts.onUpdate(({ id }) => {
    variant = variants.find(v => v.id === parseInt(id, 10));
    updatePrices(variant, node);
    updatePriceBadge(variant);
    setUrlParams([{ name: 'variant', value: id }]);
    ctx.emit('variant:change', null, variant);
  });
});
