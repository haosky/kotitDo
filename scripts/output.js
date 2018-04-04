if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
}
var output = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  function main(args) {
    println('Hello JavaScript!');
    ensureNotNull(window.document.getElementById('getMe')).innerHTML = ensureNotNull(window.document.getElementById('getMe')).innerHTML + '<br/>get me out !';
    println('debug point me \uFF01\uFF01');
    println('debug show me \uFF01\uFF01');
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('output', _);
  return _;
}(typeof output === 'undefined' ? {} : output, kotlin);

//# sourceMappingURL=output.js.map
