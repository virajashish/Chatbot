document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
        }
    });
});

function output(input) {
    let result;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "").trim();
    text = text
            .replace(/ a /g, " ")
            .replace(/i feel /g, "")
            .replace(/whats/g, "what is")
            .replace(/please /g, "")
            .replace(/ please/g, "")
            .replace(/ u/g, " you")
            .replace(/ r/g, " are");

    result = compare(text);
    if (result == ""){
        if (text.match(/thank/gi)) {
            result = "You're welcome!"
        } else {
            result = alternative[Math.floor(Math.random() * alternative.length)];
        }
    }
    var reply = document.getElementById('messages');
    reply.innerHTML = result;
}

function compare(text) {
    var outputField = "";
    var flag = 0;
    var promptSize = prompts.length;
    for(let i = 0; i < promptSize; ++i){
        var size = prompts[i].length;
        for(let j = 0; j < size; ++j){
            if(prompts[i][j] == text){
                let rand = replies[i];
                outputField = rand[Math.floor(Math.random() * rand.length)];
                flag = 1;
                break;
            }
        }
        if(flag) break;
    }
    return outputField;
}

const prompts = [
    ["hi", "hii", "hey", "hello", "good morning", "good afternoon"],
    ["how are you", "how is life", "how are things"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["i miss you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    ["your name please", "your name", "may i know your name", "what is your name", "what call yourself"],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "yes", "ok", "okay", "nice"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["no","not sure","maybe","no thanks"],
    [""],
    ["haha","ha","lol","hehe","funny","joke"]
]

const replies = [
    ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
    ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
    ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
    ["I am infinite"],
    ["Mee too"],
    ["I am just an AI", "I am an AI. Who are you?"],
    ["The one true God, JavaScript"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["Sushi", "Pizza"],
    ["Bro!"],
    ["Great question"],
    ["That's ok","I understand","What do you want to talk about?"],
    ["Please say something :("],
    ["Haha!","Good one!"]
]

const alternative = [
    "Go on...",
    "I'm not getting",
    "I'm listening...",
    "I don't understand"
]
