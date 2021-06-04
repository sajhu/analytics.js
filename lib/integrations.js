/* eslint quote-props: 0 */
'use strict';

/*
 Add or remove all integrations you want to be bundled into your analytics.js & analytics.min.js file here.
 Integration repos: https://github.com/segment-integrations?utf8=%E2%9C%93&query=analytics.js
 Make sure that any integrations you have added are also installed and saved as a devDependencies in the package.json
 */
module.exports = {

  'amplitude': require('@segment/analytics.js-integration-amplitude'),
  //'google-analytics': require('@segment/analytics.js-integration-google-analytics'),
  'google-adwords-new': require('@segment/analytics.js-integration-google-adwords-new'),
  //'datagran': require('@foodylatam/analytics.js-integration-datagran-legacy'),
  'segmentio': require('@segment/analytics.js-integration-segmentio'),

  'customerio': require('@segment/analytics.js-integration-customerio')
};
