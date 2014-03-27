// boilerpipe-query.js
"use strict"
var request = require('superagent')
    , queryBoilerpipe



queryBoilerpipe = function (url, extractor, output, callback) {
  
  if (!url) { // No URL specified, nothing to do
    return ''
  }
  
  if (!extractor) { // Extraction strategy
    extractor = 'ArticleExtractor' // Default
  }
  
  if (!output) { // Output format
    output = 'html' // Default
  }
  
  if (!callback) {
    callback = function (response) {
      return console.log(response)
    }
  }
  
  return request.get('http://boilerpipe-web.appspot.com/extract')
    .query({ url: url })
    .query({ extractor: extractor }) // Most efficient / best results
    .query({ output: output }) // We only want the text back
    .end(callback)
  
}


exports.query = queryBoilerpipe