var jokes = [
    'q: what kind of music do mummies listen to? wrap music',
    'q: why did the tomato blush? because it saw the salad dressing',
    'q: what is Forrest Gump\'s password? 1forrest1',
    'q: what did the buffalo say to his son at school dropoff? bison',
    'q: what did the bread say to the angry bread? why you sour dough?',
    'q: want to hear a joke about paper? nevermind, it\'s tearable',
]

function newJoke() {
    var randomNumber = Math.floor(Math.random() * (jokes.length));
    document.getElementById('jokeDisplay').innerHTML = jokes[randomNumber];
}

window.onload = choosePic;

var dadPix = new Array("dad photos/lightbulb.jpg", "dad photos/tie.jpg", "dad photos/grandpa.jpg", "dad photos/thumbs.jpg")

function choosePic() {
    var randomNum = Math.floor(Math.random() * dadPix.length);
    document.getElementById("dadPhoto").src = dadPix[randomNum];
}s

// $(document).ready(function(){
//     $("#hide").click(function(){
//         $("p").hide();
//     });
//     $("#show").click(function(){
//         $("p").show();
//     });
// });