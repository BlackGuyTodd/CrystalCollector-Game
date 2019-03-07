// GLOBAL VARIABLES ===================================================
var winsCounter = 0;
var lossesCounter = 0;
var counter = 0;
var targetScore = Math.floor(Math.random() * 100) + 1;
var numberOptions = [5, 10, 11, 12];
var increment = numberOptions[Math.round(Math.random())];
var crystalValue = ($(this).attr("data-crystalvalue"));


// FOR LOOP =========================================================

//Remove images from html because they will be dynamically created below.
//Change image options to only a couple numbers probably just 4
window.onload = function () {
    for (var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "assets/images/blue_gem.jpg");
        imageCrystal.attr("data-crystal-value", numberOptions[i]);
        $(".testing").append(imageCrystal);

        imageCrystal.attr("src", "assets/images/green_gem.jpg");
        imageCrystal.attr("data-crystal-value", numberOptions[i]);
        $(".testing").append(imageCrystal);
    };

    $("#score-to-beat").text(targetScore);
    //CLICK EVENTS========================================================

    //When the gem images are clicked on this is what happens.
    $("#blue-gem").on("click", function () {
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        if (counter === targetScore) {
            alert("You Win!");
        }
        else if (counter >= targetScore) {
            alert("You Lose");
        }
    });

    $("#green-gem").on("click", function () {
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        if (counter === targetScore) {
            alert("You Win!");
        }
        else if (counter >= targetScore) {
            alert("You Lose");
        }
    });

    $("#pink-gem").on("click", function () {
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        if (counter === targetScore) {
            alert("You Win!");
        }
        else if (counter >= targetScore) {
            alert("You Lose");
        }
    });

    $("#yellow-gem").on("click", function () {
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        if (counter === targetScore) {
            alert("You Win!");
        }
        else if (counter >= targetScore) {
            alert("You Lose");
        }
    });

};

