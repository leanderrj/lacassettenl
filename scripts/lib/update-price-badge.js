export default variant => {
  const sizeSelected = variant.title;
  const sizeInput = document.getElementById(sizeSelected);
  const { badge, inventoryQuantity } = sizeInput.dataset;
  const productBadges = document.querySelector('.product-price__badges');
  const fewLeftBadge = document.getElementById('product-price-badge--few-left');
  productBadges.classList.remove(
    'new-arrivals',
    'sold-out',
    'coming-soon',
    'store-exclusive',
    'few-left',
    'on-sale'
  );

  switch (badge) {
    case 'few-left':
      productBadges.classList.add('few-left');
      fewLeftBadge.innerText = `${inventoryQuantity} left`;
      break;
    case 'new-arrivals':
      productBadges.classList.add('new-arrivals');
      break;
    case 'store-exclusive':
      productBadges.classList.add('store-exclusive');
      break;
    case 'sold-out':
      productBadges.classList.add('sold-out');
      break;
    case 'on-sale':
      productBadges.classList.add('on-sale');
      break;
    case 'coming-soon':
      productBadges.classList.add('coming-soon');
      break;
    default:
      break;
  }
};
