module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last': 0, // 禁止文件末尾不加回车
    'space-before-function-paren': 0, // 禁止函数后不加空格
    'no-console': 'off', // 禁止console报错
    'no-irregular-whitespace': 'off' // 禁止空格报错
  }
}
