/* eslint-env node */
const path = require('path')

const eslintCommand = filenames =>
  `next lint --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`

const formatCommand = 'prettier --write'
const stylelintCommand = 'stylelint --allow-empty-input "**/*.css"'

module.exports = {
  '!*.{js,jsx,ts,tsx,css}': [formatCommand],
  '*.{js,jsx,ts,tsx}': [formatCommand, eslintCommand],
  '*.css': [formatCommand, stylelintCommand],
}
