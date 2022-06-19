console.log("Hi, this is a joke.");

// get the button
var button = document.getElementById("ask");

// add event listener
button.addEventListener("click", function() {
    // get the input
    let input = document.getElementById("question");
    // get the output
    let output = document.getElementById("answer");

    let question = input.value;

    // remove question mark from the question
    question = question.replace("?", "");
    // remove '[Aa]re\s[Yy]ou\s\(.*\)' from the question
    question = question.replace(/[Aa]re\s[Yy]ou\s\(.*\)/, "");

    console.log(question.replace(/[Aa]re\s[Yy]ou\s\(.*\)/g, ""));
});