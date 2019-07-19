'use strict'

const path = require('path')

module.exprots = {
  entry: [
    path.resolve(__dirname, 'src/js/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist')
  }
}