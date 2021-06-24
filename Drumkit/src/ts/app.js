"use strict";
exports.__esModule = true;
exports.App = void 0;
var player_1 = require("./player");
var sample_1 = require("./sample");
var App = /** @class */ (function () {
    function App() {
        this.drumButton1 = document.getElementById('drum-button-1');
        this.drumButton2 = document.getElementById('drum-button-2');
        this.drumButton3 = document.getElementById('drum-button-3');
        this.drumButton4 = document.getElementById('drum-button-4');
        this.drumButton5 = document.getElementById('drum-button-5');
        this.drumButton6 = document.getElementById('drum-button-6');
        this.drumButton7 = document.getElementById('drum-button-7');
        this.drumButton8 = document.getElementById('drum-button-8');
        this.drumButton9 = document.getElementById('drum-button-9');
        this.progressBar = document.getElementById('progress-bar');
        this.recordButton = document.getElementById('record-button');
        this.playButton = document.getElementById('play-button');
        this.recorded = [];
        this.player = new player_1.Player();
        this.recording = false;
        this.playing = false;
        this.startedTimeStamp = 0;
        this.playTimer = null;
        console.log('DrumKit started');
        this.setEventListeners();
    }
    App.prototype.setEventListeners = function () {
        var _this = this;
        this.drumButton1.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase(), e.timeStamp); });
        this.drumButton2.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase(), e.timeStamp); });
        this.drumButton3.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase(), e.timeStamp); });
        this.drumButton4.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase(), e.timeStamp); });
        this.drumButton5.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase(), e.timeStamp); });
        this.drumButton6.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase(), e.timeStamp); });
        this.drumButton7.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase(), e.timeStamp); });
        this.drumButton8.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase(), e.timeStamp); });
        this.drumButton9.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase(), e.timeStamp); });
        document.addEventListener('keypress', function (e) { return _this.drumButtonClick(e.key.toString().toUpperCase(), e.timeStamp); });
        this.recordButton.addEventListener('click', function (e) { return _this.startRecording(); });
        this.playButton.addEventListener('click', function (e) { return _this.startPlayingRecorded(); });
    };
    App.prototype.drumButtonClick = function (buttonLetter, timeStamp) {
        console.log(buttonLetter);
        this.player.playSound(buttonLetter);
        if (this.recording) {
            if (this.recorded.length == 0) {
                this.recorded.push(new sample_1.Sample(buttonLetter, timeStamp - this.startedTimeStamp));
            }
            else {
                var allPreviousDelays_1 = 0;
                this.recorded.forEach(function (element) {
                    allPreviousDelays_1 = allPreviousDelays_1 + element.delay;
                });
                this.recorded.push(new sample_1.Sample(buttonLetter, (timeStamp - this.startedTimeStamp) - allPreviousDelays_1));
            }
        }
    };
    App.prototype.startRecording = function () {
        if (this.playing == false) {
            if (this.recording == false) {
                this.playButton.disabled = true;
                this.recorded = [];
                this.startedTimeStamp = performance.now();
                this.recording = true;
            }
            else {
                this.stopRecording();
            }
        }
    };
    App.prototype.stopRecording = function () {
        this.recording = false;
        this.playButton.disabled = false;
    };
    App.prototype.startPlayingRecorded = function () {
        var _this = this;
        if (this.recording == false) {
            this.recordButton.disabled = true;
            this.playButton.disabled = true;
            this.playing = true;
            this.progressBar.value = 0;
            if (this.recorded.length > 0) {
                this.playTimer = setTimeout(function () { return _this.playSound(0); }, this.recorded[0].delay);
            }
            else {
                this.stopPlayingRecorded();
            }
        }
    };
    App.prototype.playSound = function (soundNumber) {
        var _this = this;
        if (soundNumber < this.recorded.length) {
            this.player.playSound(this.recorded[soundNumber].buttonLetter);
            this.progressBar.value = (soundNumber / this.recorded.length) * 100;
        }
        clearTimeout(this.playTimer);
        if (soundNumber + 1 < this.recorded.length) {
            this.playTimer = setTimeout(function () { return _this.playSound(soundNumber + 1); }, this.recorded[soundNumber + 1].delay);
        }
        else {
            this.stopPlayingRecorded();
        }
    };
    App.prototype.stopPlayingRecorded = function () {
        this.playing = false;
        this.recordButton.disabled = false;
        this.playButton.disabled = false;
        this.progressBar.value = 100;
    };
    return App;
}());
exports.App = App;
