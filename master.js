// [1] Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// [2] Get Array From Letters
let lettersArray = Array.from(letters);

// [3] Select Letters Container
let lettersContainer = document.querySelector(".letters");

// [4] Generate Letters
lettersArray.forEach(letter => {

    // [5] Create Span
    let span = document.createElement("span");

    // [6] Create Letters Text Node
    let theLetter = document.createTextNode(letter);


    // [7] Append The Letter To Node
    span.appendChild(theLetter);

    // [8] Add Class On Span
    span.className = 'letter-box';

    // [9] Append Span To The Letter Container
    lettersContainer.appendChild(span);
});


// [10] Object Of Words + Categories
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
};

// [11] Get Random Property
let allKeys = Object.keys(words);

// [12] Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// [13] Category
let randomPropName = allKeys[randomPropNumber];

// [14] Category Words
let randomPropValue = words[randomPropName];

// [15] Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// [16] The Chosen Word
let randomValueValue = randomPropValue[randomValueNumber];

// [17] Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// [18] Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

// [19] Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);

// [20] Create Spans Depend On Word
lettersAndSpace.forEach(letter => {

    // [21] Create Empty Span
    let emptySpan = document.createElement("span");

    // [22] If Letter Is Space
    if (letter === ' ') {
        // [23] Add Class To The Span
        emptySpan.className = 'with-space';

    }

    // [24] Append Span To The Letters Guess Container
    lettersGuessContainer.appendChild(emptySpan);
});

// [30] Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// [34] Set Wrong Attempts
let wrongAttempts = 0;

// [35] Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

// [25] Handel Clicked On Letters
document.addEventListener("click", (e) => {

    // [32] Set The Chose Status
    let theStatus = false;

    // [26] Add Class Name Clicked To Letters Box
    if (e.target.className === 'letter-box') {



        e.target.classList.add("clicked");

        // [27] Get Clicked Letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        // [29] The Chosen Word
        theChoseWord= Array.from(randomValueValue.toLowerCase());

        // console.log(lettersAndSpace);  

        theChoseWord.forEach((wordLetter, WordIndex) => {

            // [28] If The Clicked Letter Equal To One Of The Chosen Word Letter
            if (theClickedLetter == wordLetter) {
                
                // [33] Set Status To Correct
                theStatus = true;

                // [31] Loop On All Guess Spans
                guessSpans.forEach((span, spanIndex) => {

                    if (WordIndex === spanIndex) {
                        span.innerHTML = theClickedLetter;
                    }
                });
            }
        });

        // [36] Outside Loop

        // [37] If Letters Is Wrong
        if (theStatus !== true) {

            // [38] Increase The Wrong Attempts
            wrongAttempts++;

            // [39] Add Class Wrong On The Draw Element
            theDraw.classList.add(`wrong-${wrongAttempts}`);
            
            // [40] Play Fail Sound
            document.getElementById("fail").play();

            if (wrongAttempts === 8) {

            endGame();

            lettersContainer.classList.add("finished");

            }

            } else {

            // [41] Play Success Sound
            document.getElementById("success").play();

        }

    }

});

// [42] End Game Function
function endGame() {

// [43] Create Popup Div
let div = document.createElement("div");

// [44] Create Text
let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

// [45] Append Text To Div
div.appendChild(divText);

// [46] Add Class On Div
div.className = 'popup';

// [47] Append To The Body
document.body.appendChild(div);

};

















