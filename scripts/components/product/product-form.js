import { addVariant } from '../../lib/cart';
import choozy from '../../lib/choozy';
import { getString } from '../../lib/string';

export default window.component((node, ctx) => {
  const { submit } = choozy(node, null);

  const hasSoldOutTag = submit.dataset.soldOut;
  const hasComingSoonTag = submit.dataset.comingSoon;

  let currentVariant = {};

  ctx.on('variant:change', (state, variant) => {
    currentVariant = variant;
    if (hasComingSoonTag) {
      submit.textContent = getString('product.coming_soon_full');
      submit.disabled = true;
    } else if (variant === null) {
      submit.textContent = getString('product.select_size');
      submit.disabled = true;
    } else if (variant?.available && !hasSoldOutTag) {
      submit.textContent = getString('product.add_to_cart');
      submit.disabled = false;
    } else {
      submit.textContent = getString('product.sold_out');
      submit.disabled = true;
    }
  });

  node.addEventListener('submit', e => {
    e.preventDefault();

    if (!hasComingSoonTag && !hasSoldOutTag) {
      submit.disabled = true;
      submit.textContent = getString('product.adding_to_cart');
      addVariant(currentVariant, 1).then(({ error }) => {
        // eslint-disable-next-line no-alert
        if (error) alert(error);

        submit.disabled = true;
        submit.textContent = getString('product.added_to_cart');

        setTimeout(() => {
          if (!error) ctx.emit('cart:toggle', { cartOpen: true });
        }, 0);

        setTimeout(
          () => {
            submit.disabled = false;
            submit.textContent = getString('product.add_to_cart');
          },
          error ? 0 : 1000
        );
      });
    }
  });
});
