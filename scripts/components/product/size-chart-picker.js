export default window.component((node, ctx) => {
  window.addEventListener('load', () => {
    const sizeSwitcher = document.getElementById('product__size-switches');
    const raffleSizeSwitcher = document.getElementById('raffle__size-switches');
    const usSizeSwitcher = document.getElementById('size-switch--us');
    const euSizeSwitcher = document.getElementById('size-switch--eu');
    const ukSizeSwitcher = document.getElementById('size-switch--uk');
    const sizeLabels = document.querySelectorAll('.size-label');

    const setSizes = region => {
      const handleLabelColorReset = () => {
        usSizeSwitcher.labels[0].classList.remove('text-black');
        euSizeSwitcher.labels[0].classList.remove('text-black');
        ukSizeSwitcher.labels[0].classList.remove('text-black');
      };
      switch (region) {
        case 'us':
          handleLabelColorReset();
          usSizeSwitcher.labels[0].classList.add('text-black');
          sizeLabels.forEach(label => {
            label.innerHTML = label.dataset.usSize;
          });
          break;
        case 'eu':
          handleLabelColorReset();
          euSizeSwitcher.labels[0].classList.add('text-black');
          sizeLabels.forEach(label => {
            label.innerHTML = label.dataset.euSize;
          });
          break;
        case 'uk':
          handleLabelColorReset();
          ukSizeSwitcher.labels[0].classList.add('text-black');
          sizeLabels.forEach(label => {
            label.innerHTML = label.dataset.ukSize;
          });
          break;
        default:
      }
    };

    async function setSizesByLocale() {
      const url = `${window.location.origin}/browsing_context_suggestions.json`;
      const obj = await (await fetch(url)).json();
      const locale = obj.detected_values.country.handle;
      const usCountryCodes = [
        'CG',
        'ZA',
        'RE',
        'NG',
        'EG',
        'LS',
        'SN',
        'LR',
        'AO',
        'BF',
        'BI',
        'BJ',
        'BW',
        'CD',
        'CF',
        'CI',
        'CM',
        'CV',
        'DJ',
        'DZ',
        'EH',
        'ER',
        'ET',
        'GA',
        'GH',
        'GM',
        'GN',
        'GQ',
        'GW',
        'KE',
        'KM',
        'LY',
        'MA',
        'MG',
        'ML',
        'MR',
        'MU',
        'MW',
        'MZ',
        'NA',
        'NE',
        'RW',
        'SC',
        'SD',
        'SH',
        'SL',
        'SO',
        'SS',
        'ST',
        'SZ',
        'TD',
        'TG',
        'TN',
        'TZ',
        'UG',
        'YT',
        'ZM',
        'ZW',
        'AQ',
        'BV',
        'GS',
        'HM',
        'TF',
        'HK',
        'JP',
        'KR',
        'SG',
        'CN',
        'AE',
        'MY',
        'TW',
        'ID',
        'PH',
        'VN',
        'MO',
        'IL',
        'TH',
        'KW',
        'MM',
        'GE',
        'BN',
        'BH',
        'SA',
        'IN',
        'LB',
        'KZ',
        'AF',
        'AM',
        'AZ',
        'BD',
        'BT',
        'CC',
        'IO',
        'IQ',
        'IR',
        'JO',
        'KG',
        'KH',
        'KP',
        'LA',
        'LK',
        'MN',
        'MV',
        'NP',
        'OM',
        'PK',
        'PS',
        'QA',
        'SY',
        'TJ',
        'TM',
        'TR',
        'UZ',
        'YE',
        'US',
        'CA',
        'MX',
        'PR',
        'GP',
        'JM',
        'MS',
        'MF',
        'AG',
        'AI',
        'AN',
        'AW',
        'BB',
        'BL',
        'BM',
        'BQ',
        'BS',
        'BZ',
        'CR',
        'CU',
        'CW',
        'DM',
        'DO',
        'GD',
        'GL',
        'GT',
        'HN',
        'HT',
        'KN',
        'KY',
        'LC',
        'MQ',
        'NI',
        'PA',
        'PM',
        'SV',
        'SX',
        'TC',
        'TT',
        'VC',
        'VG',
        'VI',
        'AU',
        'NZ',
        'FM',
        'AS',
        'CK',
        'CX',
        'FJ',
        'GU',
        'KI',
        'MH',
        'MP',
        'NC',
        'NF',
        'NR',
        'NU',
        'PF',
        'PG',
        'PW',
        'SB',
        'TK',
        'TL',
        'TO',
        'TV',
        'VU',
        'WF',
        'WS',
        'PN',
        'UM',
        'BR',
        'CL',
        'AR',
        'BO',
        'CO',
        'EC',
        'FK',
        'GF',
        'GY',
        'PE',
        'PY',
        'SR',
        'UY',
        'VE',
      ];
      const ukCountryCodes = ['GB', 'IE'];

      if (usCountryCodes.includes(locale)) {
        usSizeSwitcher.checked = true;
        setSizes('us');
      } else if (ukCountryCodes.includes(locale)) {
        ukSizeSwitcher.checked = true;
        setSizes('uk');
      } else {
        euSizeSwitcher.checked = true;
        setSizes('eu');
      }
    }
    if (sizeSwitcher) {
      sizeSwitcher.addEventListener('change', e => setSizes(e.target.value));
      setSizesByLocale();
    }
    if (raffleSizeSwitcher) {
      raffleSizeSwitcher.addEventListener('change', e => setSizes(e.target.value));
      setSizesByLocale();
    }
  });
});
