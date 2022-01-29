
(function(window) {

  var helloSpeaker = {};

  var speakWord = "Hello";
  helloSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;

}) (window);

//Shown next is the function for SpeakGoodbye. It shows error when open the developer tool. So I have to move it to this js document.

(function(window) {
  
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;
}) (window);
