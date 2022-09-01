import { clearCart } from '../../lib/cart';
import choozy from '../../lib/choozy';
import escKey from '../../lib/listeners';

export default window.component(async (node, ctx) => {
  const parent = node.parentNode;
  const el = node;
  const { toggle, clear, focusEl } = choozy(node, null);

  const allCartDrawerSizes = document.querySelectorAll('.cart-drawer__sizes');

  if (allCartDrawerSizes) {
    const url = `${window.location.origin}/browsing_context_suggestions.json`;
    const obj = await (await fetch(url)).json();
    const locale = obj.detected_values.country.handle.toLowerCase();

    allCartDrawerSizes.forEach(element => {
      const sizes = element.innerText.split(',');
      if (sizes.length > 1) {
        if (locale === 'us') {
          element.innerText = sizes[0];
        } else if (locale === 'gb') {
          element.innerText = sizes[2];
        } else {
          element.innerText = sizes[1];
        }
      }
    });
  }

  const toggleDrawer = ({ cartOpen }) => {
    node.classList[cartOpen ? 'add' : 'remove']('open');
    if (cartOpen) {
      el.tabIndex = '0';
      (focusEl || node).focus();
    } else {
      el.tabIndex = '-1';
    }
  };

  toggle.forEach(btn => {
    btn.addEventListener('click', () =>
      ctx.emit('cart:toggle', ({ cartOpen }) => ({ cartOpen: !cartOpen ?? true }))
    );
  });

  toggleDrawer(ctx.getState());

  if (clear) clear.addEventListener('click', () => clearCart());

  node.addEventListener('keyup', e => escKey(e, { type: 'cart:toggle', boolean: 'cartOpen' }));

  ctx.on('cart:toggle', toggleDrawer);

  ctx.on('cart:render', ({ cart }) => {
    if (parent)
      document.getElementById('shopify-section-cart-drawer').outerHTML =
        cart.sections['cart-drawer'];
    window.app.unmount();
    window.app.mount();
  });

  return () => {
    ctx.on(['cart:toggle', 'cart:render'], () => {})();
    node.removeEventListener('keyup', e => escKey(e, { type: 'cart:toggle', boolean: 'cartOpen' }));
  };
});
