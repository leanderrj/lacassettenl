import { getShopifyLink } from '../lib/links';

/**
 * Adding a vendor script/stylesheet, being initialised on window.load
 * @type {Object}
 * @param {String} name identify if loaded or not
 * @param {String} src link to to vendor-file
 * @param {Boolean|Element} include if truthy, include on load
 * @param {Boolean} important import before window.load event
 * @param {Function} callback run after load
 */

export const scripts = [
  // {
  //   name: `Tag manager`,
  //   src: `https://www.googletagmanager.com/gtm.js?id=${window?.Phill?.scripts?.tag_manager}`,
  //   include: window?.Phill?.scripts?.tag_manager,
  // },
  // {
  //   name: `Google Optimize`,
  //   src: `https://www.googleoptimize.com/optimize.js?id=${window?.Phill?.scripts?.google_optimize}`,
  //   include: window?.Phill?.scripts?.google_optimize,
  //   important: true,
  // },
  {
    name: `Plyr`,
    src: `https://cdn.plyr.io/3.6.8/plyr.polyfilled.js`,
    include: document.querySelector('.plyr__video-wrapper'),
  },
  {
    name: `Lottie`,
    src: `https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js`,
    include: document.querySelector('.lottie-player'),
  },
  // {
  //   name: `Klaviyo`,
  //   src: `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=JCJVtR`,
  //   include: document.querySelector('.klaviyo-form'),
  // },
];

export const styles = [
  {
    name: `Plyr`,
    src: `https://cdn.plyr.io/3.6.8/plyr.css`,
    include: document.querySelector('.plyr__video-wrapper'),
  },
];
