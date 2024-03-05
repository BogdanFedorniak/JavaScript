(function(window) {
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]); // Виклик методу з SpeakGoodBye.js
        } else {
            helloSpeaker.speak(names[i]); // Виклик методу з SpeakHello.js
        }
    }
})(window);
