
(function(window) {

  var helloSpeaker = {};

  var speakWord = "Hello";
  helloSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;

}) (window);

(function(window) {
  
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;
}) (window);
