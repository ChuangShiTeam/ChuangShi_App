const path = require('path');
const fs = require('fs');

const defaultVars = require('antd-mobile/lib/style/themes/default');
const customVars = require('../theme');
const themePath = path.resolve(require.resolve('antd-mobile'), '../style/themes/default.js');

const themeVars = Object.assign({}, defaultVars, customVars);

if (fs.statSync(themePath).isFile()) {
    fs.writeFileSync(
        themePath,
        'var brandPrimary = "#c81623"; var brandPrimaryTap = "#d40c1a";module.exports = ' + JSON.stringify(themeVars)
    );
}