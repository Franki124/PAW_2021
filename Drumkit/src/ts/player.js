"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.playSound = function (buttonLetter) {
        var audioElement = null;
        switch (buttonLetter) {
            case 'Q':
                audioElement = document.getElementById("sound1");
                break;
            case 'W':
                audioElement = document.getElementById("sound2");
                break;
            case 'E':
                audioElement = document.getElementById("sound3");
                break;
            case 'R':
                audioElement = document.getElementById("sound4");
                break;
            case 'T':
                audioElement = document.getElementById("sound5");
                break;
            case 'A':
                audioElement = document.getElementById("sound6");
                break;
            case 'S':
                audioElement = document.getElementById("sound7");
                break;
            case 'D':
                audioElement = document.getElementById("sound8");
                break;
            case 'F':
                audioElement = document.getElementById("sound9");
                break;
            default:
                break;
        }
        if (audioElement != null) {
            audioElement.currentTime = 0;
            audioElement.play();
        }
    };
    return Player;
}());
exports.Player = Player;
