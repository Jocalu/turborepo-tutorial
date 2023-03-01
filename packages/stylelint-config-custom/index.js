module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-concentric-order'],
  rules: {
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'color-function-notation': null,
    'order/order': ['custom-properties', 'declarations', 'at-rules', 'rules']
  }
}
