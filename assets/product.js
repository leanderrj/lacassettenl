/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/components/product/components.js":
/*!**************************************************!*\
  !*** ./scripts/components/product/components.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _product_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-selection */ \"./scripts/components/product/product-selection.js\");\n/* harmony import */ var _product_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-form */ \"./scripts/components/product/product-form.js\");\n/* harmony import */ var _size_chart_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./size-chart-picker */ \"./scripts/components/product/size-chart-picker.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  productSelection: _product_selection__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  productForm: _product_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  sizeChartPicker: _size_chart_picker__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n});\n\n\n//# sourceURL=webpack://leme-starter/./scripts/components/product/components.js?");

/***/ }),

/***/ "./scripts/components/product/product-form.js":
/*!****************************************************!*\
  !*** ./scripts/components/product/product-form.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/cart */ \"./scripts/lib/cart.js\");\n/* harmony import */ var _lib_choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/choozy */ \"./scripts/lib/choozy.js\");\n/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/string */ \"./scripts/lib/string.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.component((node, ctx) => {\n  const { submit } = (0,_lib_choozy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(node, null);\n\n  const hasSoldOutTag = submit.dataset.soldOut;\n  const hasComingSoonTag = submit.dataset.comingSoon;\n\n  let currentVariant = {};\n\n  ctx.on('variant:change', (state, variant) => {\n    currentVariant = variant;\n    if (hasComingSoonTag) {\n      submit.textContent = (0,_lib_string__WEBPACK_IMPORTED_MODULE_2__.getString)('product.coming_soon_full');\n      submit.disabled = true;\n    } else if (variant === null) {\n      submit.textContent = (0,_lib_string__WEBPACK_IMPORTED_MODULE_2__.getString)('product.select_size');\n      submit.disabled = true;\n    } else if (variant?.available && !hasSoldOutTag) {\n      submit.textContent = (0,_lib_string__WEBPACK_IMPORTED_MODULE_2__.getString)('product.add_to_cart');\n      submit.disabled = false;\n    } else {\n      submit.textContent = (0,_lib_string__WEBPACK_IMPORTED_MODULE_2__.getString)('product.sold_out');\n      submit.disabled = true;\n    }\n  });\n\n  node.addEventListener('submit', e => {\n    e.preventDefault();\n\n    if (!hasComingSoonTag && !hasSoldOutTag) {\n      submit.disabled = true;\n      submit.textContent = (0,_lib_string__WEBPACK_IMPORTED_MODULE_2__.getString)('product.adding_to_cart');\n      (0,_lib_cart__WEBPACK_IMPORTED_MODULE_0__.addVariant)(currentVariant, 1).then(({ error }) => {\n        // eslint-disable-next-line no-alert\n        if (error) alert(error);\n\n        submit.disabled = true;\n        submit.textContent = (0,_lib_string__WEBPACK_IMPORTED_MODULE_2__.getString)('product.added_to_cart');\n\n        setTimeout(() => {\n          if (!error) ctx.emit('cart:toggle', { cartOpen: true });\n        }, 0);\n\n        setTimeout(\n          () => {\n            submit.disabled = false;\n            submit.textContent = (0,_lib_string__WEBPACK_IMPORTED_MODULE_2__.getString)('product.add_to_cart');\n          },\n          error ? 0 : 1000\n        );\n      });\n    }\n  });\n}));\n\n\n//# sourceURL=webpack://leme-starter/./scripts/components/product/product-form.js?");

/***/ }),

/***/ "./scripts/components/product/product-selection.js":
/*!*********************************************************!*\
  !*** ./scripts/components/product/product-selection.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/options */ \"./scripts/lib/options.js\");\n/* harmony import */ var _lib_set_url_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/set-url-params */ \"./scripts/lib/set-url-params.js\");\n/* harmony import */ var _lib_update_prices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/update-prices */ \"./scripts/lib/update-prices.js\");\n/* harmony import */ var _lib_update_price_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/update-price-badge */ \"./scripts/lib/update-price-badge.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.component((node, ctx) => {\n  const opts = (0,_lib_options__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node);\n  const { product, selectedOrFirstAvailableVariant, currentVariant } = JSON.parse(\n    document.querySelector('.js-product-json').innerHTML\n  );\n  const onlyOneOption = product.variants.length === 1;\n  const { variants } = product;\n  /**\n   * Selected, or first available variants\n   * If none of these are the case, fallback\n   * to first variant in the array\n   */\n  // let variant =\n  //   variants.find(v => v.id === selectedOrFirstAvailableVariant) ||\n  //   variants.find(v => v.available) ||\n  //   variants[0];\n  let variant = onlyOneOption\n    ? variants.find(v => v.id === selectedOrFirstAvailableVariant)\n    : currentVariant;\n  ctx.emit('variant:change', null, variant);\n\n  opts.onUpdate(({ id }) => {\n    variant = variants.find(v => v.id === parseInt(id, 10));\n    (0,_lib_update_prices__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(variant, node);\n    (0,_lib_update_price_badge__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(variant);\n    (0,_lib_set_url_params__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([{ name: 'variant', value: id }]);\n    ctx.emit('variant:change', null, variant);\n  });\n}));\n\n\n//# sourceURL=webpack://leme-starter/./scripts/components/product/product-selection.js?");

/***/ }),

/***/ "./scripts/components/product/size-chart-picker.js":
/*!*********************************************************!*\
  !*** ./scripts/components/product/size-chart-picker.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.component((node, ctx) => {\n  window.addEventListener('load', () => {\n    const sizeSwitcher = document.getElementById('product__size-switches');\n    const raffleSizeSwitcher = document.getElementById('raffle__size-switches');\n    const usSizeSwitcher = document.getElementById('size-switch--us');\n    const euSizeSwitcher = document.getElementById('size-switch--eu');\n    const ukSizeSwitcher = document.getElementById('size-switch--uk');\n    const sizeLabels = document.querySelectorAll('.size-label');\n\n    const setSizes = region => {\n      const handleLabelColorReset = () => {\n        usSizeSwitcher.labels[0].classList.remove('text-black');\n        euSizeSwitcher.labels[0].classList.remove('text-black');\n        ukSizeSwitcher.labels[0].classList.remove('text-black');\n      };\n      switch (region) {\n        case 'us':\n          handleLabelColorReset();\n          usSizeSwitcher.labels[0].classList.add('text-black');\n          sizeLabels.forEach(label => {\n            label.innerHTML = label.dataset.usSize;\n          });\n          break;\n        case 'eu':\n          handleLabelColorReset();\n          euSizeSwitcher.labels[0].classList.add('text-black');\n          sizeLabels.forEach(label => {\n            label.innerHTML = label.dataset.euSize;\n          });\n          break;\n        case 'uk':\n          handleLabelColorReset();\n          ukSizeSwitcher.labels[0].classList.add('text-black');\n          sizeLabels.forEach(label => {\n            label.innerHTML = label.dataset.ukSize;\n          });\n          break;\n        default:\n      }\n    };\n\n    async function setSizesByLocale() {\n      const url = `${window.location.origin}/browsing_context_suggestions.json`;\n      const obj = await (await fetch(url)).json();\n      const locale = obj.detected_values.country.handle;\n      const usCountryCodes = [\n        'CG',\n        'ZA',\n        'RE',\n        'NG',\n        'EG',\n        'LS',\n        'SN',\n        'LR',\n        'AO',\n        'BF',\n        'BI',\n        'BJ',\n        'BW',\n        'CD',\n        'CF',\n        'CI',\n        'CM',\n        'CV',\n        'DJ',\n        'DZ',\n        'EH',\n        'ER',\n        'ET',\n        'GA',\n        'GH',\n        'GM',\n        'GN',\n        'GQ',\n        'GW',\n        'KE',\n        'KM',\n        'LY',\n        'MA',\n        'MG',\n        'ML',\n        'MR',\n        'MU',\n        'MW',\n        'MZ',\n        'NA',\n        'NE',\n        'RW',\n        'SC',\n        'SD',\n        'SH',\n        'SL',\n        'SO',\n        'SS',\n        'ST',\n        'SZ',\n        'TD',\n        'TG',\n        'TN',\n        'TZ',\n        'UG',\n        'YT',\n        'ZM',\n        'ZW',\n        'AQ',\n        'BV',\n        'GS',\n        'HM',\n        'TF',\n        'HK',\n        'JP',\n        'KR',\n        'SG',\n        'CN',\n        'AE',\n        'MY',\n        'TW',\n        'ID',\n        'PH',\n        'VN',\n        'MO',\n        'IL',\n        'TH',\n        'KW',\n        'MM',\n        'GE',\n        'BN',\n        'BH',\n        'SA',\n        'IN',\n        'LB',\n        'KZ',\n        'AF',\n        'AM',\n        'AZ',\n        'BD',\n        'BT',\n        'CC',\n        'IO',\n        'IQ',\n        'IR',\n        'JO',\n        'KG',\n        'KH',\n        'KP',\n        'LA',\n        'LK',\n        'MN',\n        'MV',\n        'NP',\n        'OM',\n        'PK',\n        'PS',\n        'QA',\n        'SY',\n        'TJ',\n        'TM',\n        'TR',\n        'UZ',\n        'YE',\n        'US',\n        'CA',\n        'MX',\n        'PR',\n        'GP',\n        'JM',\n        'MS',\n        'MF',\n        'AG',\n        'AI',\n        'AN',\n        'AW',\n        'BB',\n        'BL',\n        'BM',\n        'BQ',\n        'BS',\n        'BZ',\n        'CR',\n        'CU',\n        'CW',\n        'DM',\n        'DO',\n        'GD',\n        'GL',\n        'GT',\n        'HN',\n        'HT',\n        'KN',\n        'KY',\n        'LC',\n        'MQ',\n        'NI',\n        'PA',\n        'PM',\n        'SV',\n        'SX',\n        'TC',\n        'TT',\n        'VC',\n        'VG',\n        'VI',\n        'AU',\n        'NZ',\n        'FM',\n        'AS',\n        'CK',\n        'CX',\n        'FJ',\n        'GU',\n        'KI',\n        'MH',\n        'MP',\n        'NC',\n        'NF',\n        'NR',\n        'NU',\n        'PF',\n        'PG',\n        'PW',\n        'SB',\n        'TK',\n        'TL',\n        'TO',\n        'TV',\n        'VU',\n        'WF',\n        'WS',\n        'PN',\n        'UM',\n        'BR',\n        'CL',\n        'AR',\n        'BO',\n        'CO',\n        'EC',\n        'FK',\n        'GF',\n        'GY',\n        'PE',\n        'PY',\n        'SR',\n        'UY',\n        'VE',\n      ];\n      const ukCountryCodes = ['GB', 'IE'];\n\n      if (usCountryCodes.includes(locale)) {\n        usSizeSwitcher.checked = true;\n        setSizes('us');\n      } else if (ukCountryCodes.includes(locale)) {\n        ukSizeSwitcher.checked = true;\n        setSizes('uk');\n      } else {\n        euSizeSwitcher.checked = true;\n        setSizes('eu');\n      }\n    }\n    if (sizeSwitcher) {\n      sizeSwitcher.addEventListener('change', e => setSizes(e.target.value));\n      setSizesByLocale();\n    }\n    if (raffleSizeSwitcher) {\n      raffleSizeSwitcher.addEventListener('change', e => setSizes(e.target.value));\n      setSizesByLocale();\n    }\n  });\n}));\n\n\n//# sourceURL=webpack://leme-starter/./scripts/components/product/size-chart-picker.js?");

/***/ }),

/***/ "./scripts/lib/cart.js":
/*!*****************************!*\
  !*** ./scripts/lib/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addItemsById\": () => (/* binding */ addItemsById),\n/* harmony export */   \"addVariant\": () => (/* binding */ addVariant),\n/* harmony export */   \"clearCart\": () => (/* binding */ clearCart),\n/* harmony export */   \"fetchCart\": () => (/* binding */ fetchCart),\n/* harmony export */   \"fetchCartMarkup\": () => (/* binding */ fetchCartMarkup),\n/* harmony export */   \"removeAddon\": () => (/* binding */ removeAddon),\n/* harmony export */   \"updateAddon\": () => (/* binding */ updateAddon)\n/* harmony export */ });\nfunction fetchCart() {\n  return fetch(`${window.Phill.routes.cart}.js`, {\n    method: 'GET',\n    credentials: 'include',\n  }).then(res => res.json());\n}\n\nfunction fetchCartMarkup() {\n  return fetch(`${window.Phill.routes.cart}?sections=cart-drawer`, {\n    method: 'GET',\n    credentials: 'include',\n  }).then(res => res.json());\n}\n\nfunction changeAddon(id, quantity) {\n  window.app.emit('cart:updating');\n\n  return fetch(`${window.Phill.routes.cartChange}.js`, {\n    method: 'POST',\n    credentials: 'include',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ id, quantity, sections: 'cart-drawer' }),\n  })\n    .then(res => res.json())\n    .then(async cart => {\n      window.app.emit(['cart:updated', 'cart:render'], { cart });\n      return cart;\n    });\n}\n\nfunction clearCart() {\n  window.app.emit('cart:updating');\n\n  return fetch(`${window.Phill.routes.cartClear}.js`, {\n    method: 'POST',\n    credentials: 'include',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ sections: 'cart-drawer' }),\n  })\n    .then(r => r.json())\n    .then(cart => {\n      window.app.emit(['cart:updated', 'cart:render'], { cart });\n      return cart;\n    });\n}\n\nfunction addItemsById(items = []) {\n  window.app.emit('cart:updating');\n\n  return fetch(`${window.Phill.routes.cartAdd}.js`, {\n    method: 'POST',\n    credentials: 'include',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ items }),\n  })\n    .then(r => r.json())\n    .then(async item => {\n      if (item.status) {\n        window.app.emit(['cart:updated', 'cart:error'], null, item);\n        return { item, cart: window.app.getState().cart, error: item?.description };\n      }\n\n      const [cart, cartMarkup] = await Promise.all([fetchCart(), fetchCartMarkup()]);\n\n      cart.sections = cartMarkup;\n\n      window.app.emit(['cart:updated', 'cart:render'], { cart });\n\n      return {\n        item,\n        cart,\n      };\n    });\n}\n\nfunction addVariant(variant, quantity, properties = {}) {\n  return addItemsById([{ id: variant.id, quantity, properties }]);\n}\n\nfunction updateAddon(key, quantity) {\n  return changeAddon(key, quantity);\n}\n\nfunction removeAddon(key) {\n  return updateAddon(key, 0);\n}\n\n\n//# sourceURL=webpack://leme-starter/./scripts/lib/cart.js?");

/***/ }),

/***/ "./scripts/lib/choozy.js":
/*!*******************************!*\
  !*** ./scripts/lib/choozy.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable */\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(container = document.body, prefix = 'js-') {\n  const elements = [...container.querySelectorAll(!prefix ? '*' : `[class*=\"${prefix}\"]`)];\n  const property = !prefix ? 'dataset' : 'classList';\n  return elements.reduce((res, el) => {\n    [].slice.call(!prefix ? Object.entries(el[property]) : el[property]).forEach(property => {\n      let key;\n      if (prefix && property.slice(0, prefix.length) === prefix)\n        key = property.slice(prefix.length, property.length);\n      else if (!prefix) [key] = property;\n      if (key) {\n        res[key] = res.hasOwnProperty(key)\n          ? res[key].constructor === Array\n            ? res[key].concat(el)\n            : [res[key], el]\n          : el;\n      }\n    });\n    return res;\n  }, {});\n}\n\n\n//# sourceURL=webpack://leme-starter/./scripts/lib/choozy.js?");

/***/ }),

/***/ "./scripts/lib/currency.js":
/*!*********************************!*\
  !*** ./scripts/lib/currency.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatMoney\": () => (/* binding */ formatMoney)\n/* harmony export */ });\n/**\n * Currency Helpers\n * -----------------------------------------------------------------------------\n * A collection of useful functions that help with currency formatting\n *\n * Current contents\n * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.\n *\n */\n\n/**\n * Format money values based on your shop currency settings\n * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents\n * or 3.00 dollars\n * @param  {String} format - shop money_format setting\n * @return {String} value - formatted value\n */\n\n/* eslint-disable */\n\nfunction formatMoney(cents, format = window.Phill.money_format) {\n  if (typeof cents === 'string') {\n    cents = cents.replace('.', '');\n  }\n\n  let value = '';\n  const placeholderRegex = /\\{\\{\\s*(\\w+)\\s*\\}\\}/;\n\n  function formatWithDelimiters(number, precision, thousands, decimal) {\n    if (typeof precision == 'undefined') {\n      precision = 2;\n    }\n\n    thousands = window.Phill.money_separator;\n    decimal = thousands == ',' ? '.' : ',';\n\n    if (isNaN(number) || number == null) {\n      return 0;\n    }\n\n    number = (number / 100).toFixed(precision);\n\n    const parts = number.split('.');\n    const dollarsAmount = parts[0].replace(/(\\d)(?=(\\d\\d\\d)+(?!\\d))/g, '$1' + thousands);\n    const centsAmount = parts[1] ? decimal + parts[1] : '';\n\n    return dollarsAmount + centsAmount;\n  }\n\n  switch (format.match(placeholderRegex)[1]) {\n    case 'amount':\n      value = formatWithDelimiters(cents, 2);\n      break;\n    case 'amount_with_comma_separator':\n      value = formatWithDelimiters(cents, 2);\n      break;\n    case 'amount_no_decimals':\n      value = formatWithDelimiters(cents, 0);\n      break;\n    case 'amount_with_space_separator':\n      value = formatWithDelimiters(cents, 2);\n      break;\n    case 'amount_no_decimals_with_comma_separator':\n      value = formatWithDelimiters(cents, 0);\n      break;\n    case 'amount_no_decimals_with_space_separator':\n      value = formatWithDelimiters(cents, 0);\n      break;\n  }\n\n  return format.replace(placeholderRegex, value);\n}\n\n//# sourceURL=webpack://leme-starter/./scripts/lib/currency.js?");

/***/ }),

/***/ "./scripts/lib/options.js":
/*!********************************!*\
  !*** ./scripts/lib/options.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ productSelection)\n/* harmony export */ });\n/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio */ \"./scripts/lib/radio.js\");\n/* eslint-disable */\n\n\nfunction productSelection(node, opts) {\n  opts = {\n    select: '[data-option-select]',\n    radio: '[data-option-radio]',\n    main: '[data-option-main]',\n    ...opts,\n  };\n\n  const listeners = [];\n\n  const state = {\n    id: null,\n    options: [],\n  };\n\n  const selects = document.querySelectorAll(opts.select);\n  const radios = document.querySelectorAll(opts.radio);\n  const main = document.querySelector(opts.main);\n\n  if (!main || !main.length) throw 'data-option-main is missing';\n  if (radios.length > 3) throw 'you have more than three radio groups';\n  if (selects.length > 3) throw 'you have more than three select inputs';\n\n  const variants = [].slice.call(main.children).reduce((variant, child) => {\n    const obj = variant;\n    obj[child.innerHTML] = child.value;\n    return obj;\n  }, {});\n\n  function updateSelection() {\n    state.id = variants[state.options.join(' / ')];\n    main.value = state.id;\n    for (const fn of listeners) fn(state);\n  }\n\n  selects.forEach(select => {\n    if (select.nodeName !== 'SELECT')\n      throw 'data-option-select should be defined on the individual option selectors';\n\n    const index = Number(select.getAttribute('data-index'));\n\n    // set initial value\n    state.options[index] = select.value;\n\n    select.addEventListener('change', e => {\n      state.options[index] = e.target.value;\n      updateSelection();\n    });\n  });\n\n  radios.forEach(r => {\n    if (r.nodeName === 'INPUT')\n      throw 'data-option-radio should be defined on a parent of the radio group, not the inputs themselves';\n\n    const index = Number(r.getAttribute('data-index'));\n    const inputs = [].slice.call(r.getElementsByTagName('input'));\n\n    // set initial value\n    inputs.forEach(r => {\n      if (r.checked) state.options[index] = r.value;\n    });\n\n    (0,_radio__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputs, value => {\n      state.options[index] = value;\n      updateSelection();\n    });\n  });\n\n  updateSelection();\n\n  return {\n    get state() {\n      return state;\n    },\n    onUpdate(fn) {\n      listeners.indexOf(fn) < 0 && listeners.push(fn);\n      return () => listeners.splice(listeners.indexOf(fn), 1);\n    },\n  };\n}\n/* eslint-enable */\n\n\n//# sourceURL=webpack://leme-starter/./scripts/lib/options.js?");

/***/ }),

/***/ "./scripts/lib/radio.js":
/*!******************************!*\
  !*** ./scripts/lib/radio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ radio)\n/* harmony export */ });\nfunction radio(radios, cb) {\n  radios.map(r => (r.onclick = e => cb(e.target.value)));\n}\n\n\n//# sourceURL=webpack://leme-starter/./scripts/lib/radio.js?");

/***/ }),

/***/ "./scripts/lib/set-url-params.js":
/*!***************************************!*\
  !*** ./scripts/lib/set-url-params.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parameters => {\n  const url = new URL(window.location.href);\n  const params = new URLSearchParams(url.search.slice(1));\n\n  parameters.forEach(({ name, value }) => {\n    if (value !== '') params.set(name, encodeURIComponent(value));\n    else params.delete(name);\n  });\n\n  window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);\n});\n\n\n//# sourceURL=webpack://leme-starter/./scripts/lib/set-url-params.js?");

/***/ }),

/***/ "./scripts/lib/string.js":
/*!*******************************!*\
  !*** ./scripts/lib/string.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCamelCase\": () => (/* binding */ getCamelCase),\n/* harmony export */   \"getString\": () => (/* binding */ getString),\n/* harmony export */   \"toCamelCase\": () => (/* binding */ toCamelCase)\n/* harmony export */ });\nconst toCamelCase = function camalize(str) {\n  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());\n};\n\nconst getCamelCase = obj => {\n  return Object.entries(obj).reduce((o, [key, value]) => {\n    const object = o;\n    object[toCamelCase(key)] = value;\n    return object;\n  }, {});\n};\n\nconst getString = string => {\n  /**\n   * Get string from window.Phill.theme.strings\n   * @param {String} string seperate keys, by . just like in liquid\n   */\n\n  return (\n    string.split('.').reduce((obj, str) => obj?.[str], window?.Phill?.theme?.strings) ||\n    `Missing translation for ${string} in window.Phill`\n  );\n};\n\n\n//# sourceURL=webpack://leme-starter/./scripts/lib/string.js?");

/***/ }),

/***/ "./scripts/lib/update-price-badge.js":
/*!*******************************************!*\
  !*** ./scripts/lib/update-price-badge.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variant => {\n  const sizeSelected = variant.title;\n  const sizeInput = document.getElementById(sizeSelected);\n  const { badge, inventoryQuantity } = sizeInput.dataset;\n  const productBadges = document.querySelector('.product-price__badges');\n  const fewLeftBadge = document.getElementById('product-price-badge--few-left');\n  productBadges.classList.remove(\n    'new-arrivals',\n    'sold-out',\n    'coming-soon',\n    'store-exclusive',\n    'few-left',\n    'on-sale'\n  );\n\n  switch (badge) {\n    case 'few-left':\n      productBadges.classList.add('few-left');\n      fewLeftBadge.innerText = `${inventoryQuantity} left`;\n      break;\n    case 'new-arrivals':\n      productBadges.classList.add('new-arrivals');\n      break;\n    case 'store-exclusive':\n      productBadges.classList.add('store-exclusive');\n      break;\n    case 'sold-out':\n      productBadges.classList.add('sold-out');\n      break;\n    case 'on-sale':\n      productBadges.classList.add('on-sale');\n      break;\n    case 'coming-soon':\n      productBadges.classList.add('coming-soon');\n      break;\n    default:\n      break;\n  }\n});\n\n\n//# sourceURL=webpack://leme-starter/./scripts/lib/update-price-badge.js?");

/***/ }),

/***/ "./scripts/lib/update-prices.js":
/*!**************************************!*\
  !*** ./scripts/lib/update-prices.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _choozy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choozy */ \"./scripts/lib/choozy.js\");\n/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency */ \"./scripts/lib/currency.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((variant, element) => {\n  const { price, compareAtPrice } = (0,_choozy__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, null);\n  const { price: p, compare_at_price: cp } = variant;\n  price.innerHTML = (0,_currency__WEBPACK_IMPORTED_MODULE_1__.formatMoney)(p);\n  if (compareAtPrice) {\n    compareAtPrice.innerHTML = cp > p ? (0,_currency__WEBPACK_IMPORTED_MODULE_1__.formatMoney)(cp) : '';\n  }\n});\n\n\n//# sourceURL=webpack://leme-starter/./scripts/lib/update-prices.js?");

/***/ }),

/***/ "./scripts/util/product.js":
/*!*********************************!*\
  !*** ./scripts/util/product.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_product_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/product/components */ \"./scripts/components/product/components.js\");\n\n\nwindow.app.add(_components_product_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nwindow.app.mount();\n\n\n//# sourceURL=webpack://leme-starter/./scripts/util/product.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/util/product.js");
/******/ 	
/******/ })()
;