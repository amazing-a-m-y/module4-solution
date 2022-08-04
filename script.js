// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
;(function () {
  var names = [
    'Yaakov',
    'John',
    'Jen',
    'Jason',
    'Paul',
    'Frank',
    'Larry',
    'Paula',
    'Laura',
    'Jim',
  ]

  // STEP 10:
  // Loop over the names array and say either 'Hello' or "Good Bye"
  // STEP 11:
  // Retrieve the first letter of the current name in the loop.
  for (i = 0; i < names.length; i++) {
    // console.log(firstLetter, 'firstLetter')
    var firstLetter = names[i].charAt(0)
    // console.log(firstLetter.toLowerCase(), 'firstLetter.toLowerCase()')
    if (firstLetter.toLowerCase() === 'j') {
      // STEP 9: Expose the 'byeSpeaker' object to the global scope.
      byeSpeaker.speak(names[i])
    } else {
      // STEP 5: Expose the 'helloSpeaker' object to the global scope
      helloSpeaker.speak(names[i])
    }
  }
})()
