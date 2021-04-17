//This first step is meant to go into a program that can run JavaScript.
//At the bottom of this code is where you copy and paste (or type) the Japanese sentence to be output as code for an HTML document.
//After pasting the output from the JavaScript console.log into an HTML document, the output in the HTML document should be code that can be used in another HTML document to put Japanese ruby above the kanji in the sentence(s) originally put into the console.log here.
//This output can be useful for people who want to show ruby code, as well as people who want to have Japanese sentences with ruby above it in their HTML documents or OnsenUI applications.
//Additional credit goes to Sean Roche (https://github.com/sean0x72) and Ting Hao Chang for helping with the code.

var obj = {
  "{": '&lt;ruby&gt;',
  "}": '&lt;/ruby&gt;',
  "[": '&lt;rb&gt;',
  "]": '&lt;/rb&gt;',
  "(": '&lt;rt&gt;',
  ")": '&lt;/rt&gt;',
}

function transferKanjiToHtml (str) {
  var kanjiWithBrackets = str.split('').map(function(char) {
    if (char.match(/[\u4e00-\u9faf\u3400-\u4dbf]/g)) {
        return `[${char}]`
    } else {
      return char
    }
  }).join('')

  var kanjiWithCurlyBrackets = kanjiWithBrackets.split('[').map(function(sentance, index) {
    if (index === 0) {
        return ''
    } else {
      return `{[${sentance}}`
    }
  }).join('')

  return kanjiWithCurlyBrackets.split('').map(function(char) {
    if (char in obj) {
      return obj[char]
    } else {
      return char
    }
  }).join('')
}

//copy and paste Japanese sentence into the console.log part below where the sample sentence is.

console.log(transferKanjiToHtml('私は寿司が好きです。'))
