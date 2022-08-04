// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE

;(function (window) {
  // STEP 7: Create an object, called 'byeSpeaker' to which you will attach

  var byeSpeaker = {}
  var speakWord = 'Good Bye'
  // STEP 8: Rewrite the 'speak' function such that it is attached to the
  // byeSpeaker object instead of being a standalone function.
  byeSpeaker.speak = function (name) {
    console.log(speakWord + ' ' + name)
  }
  window.byeSpeaker = byeSpeaker
})(window)
