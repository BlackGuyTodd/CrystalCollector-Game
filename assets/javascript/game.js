// GLOBAL VARIABLES ===================================================
var winsCounter = 0;
var lossesCounter = 0;
var counter = 0;
var targetScore;
var numberOptions = [5, 10, 11, 12];
var imgOptions = ["assets/images/blue_gem.jpg", "assets/images/green_gem.jpg", "assets/images/pink_gem.jpg", "assets/images/yellow_gem.jpg"];
var increment = numberOptions[Math.round(Math.random())];
var crystalValue = ($(this).attr("data-crystalvalue"));


// FOR LOOP =========================================================

//Remove images from html because they will be dynamically created below.
//Change image options to only a couple numbers probably just 4
$(document).ready(function () {
    function createButtons() {
        $(".testing").html("");
        targetScore = Math.floor(Math.random() * 100) + 20;
        $("#score-to-beat").text(targetScore);
        counter = 0;
        $("#player-score").text(counter);
        for (var i = 0; i < imgOptions.length; i++) {
            console.log(imgOptions[i])
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal");
            imageCrystal.attr("src", imgOptions[i]);
            imageCrystal.attr("data-crystal-value", (Math.floor(Math.random() * 12) + 1));
            $(".testing").append(imageCrystal);

        };

        $("img.crystal").on("click", function () {
            console.log($(this).attr("data-crystal-value"));
            checkScore($(this).attr("data-crystal-value"));
        });
    }

    
    //CLICK EVENTS========================================================

    //When the gem images are clicked on this is what happens.
    function checkScore(value) {
        counter += parseInt(value);
        $("#player-score").text(counter);

        if (counter === targetScore) {
            alert("You Win!");
            winsCounter++
            $("#wins").text(winsCounter);
            createButtons();
        }
        else if (counter > targetScore) {
            alert("You Lose");
            lossesCounter++
            $("#losses").text(lossesCounter);
            createButtons();
        }
    }


    createButtons();

    // $("#blue-gem").on("click", function () {
    //     crystalValue = parseInt(crystalValue);
    //     counter += crystalValue;
    //     if (counter === targetScore) {
    //         alert("You Win!");
    //     }
    //     else if (counter >= targetScore) {
    //         alert("You Lose");
    //     }
    // });

    // $("#green-gem").on("click", function () {
    //     crystalValue = parseInt(crystalValue);
    //     counter += crystalValue;
    //     if (counter === targetScore) {
    //         alert("You Win!");
    //     }
    //     else if (counter >= targetScore) {
    //         alert("You Lose");
    //     }
    // });

    // $("#pink-gem").on("click", function () {
    //     crystalValue = parseInt(crystalValue);
    //     counter += crystalValue;
    //     if (counter === targetScore) {
    //         alert("You Win!");
    //     }
    //     else if (counter >= targetScore) {
    //         alert("You Lose");
    //     }
    // });

    // $("#yellow-gem").on("click", function () {
    //     crystalValue = parseInt(crystalValue);
    //     counter += crystalValue;
    //     if (counter === targetScore) {
    //         alert("You Win!");
    //     }
    //     else if (counter >= targetScore) {
    //         alert("You Lose");
    //     }
    // });

});

