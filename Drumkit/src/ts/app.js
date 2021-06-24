"use strict";
exports.__esModule = true;
exports.App = void 0;
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
        console.log('DrumKit started');
        this.setEventListeners();
    }
    App.prototype.setEventListeners = function () {
        var _this = this;
        this.drumButton1.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase()); });
        this.drumButton2.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase()); });
        this.drumButton3.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase()); });
        this.drumButton4.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase()); });
        this.drumButton5.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase()); });
        this.drumButton6.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase()); });
        this.drumButton7.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase()); });
        this.drumButton8.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase()); });
        this.drumButton9.addEventListener('click', function (e) { return _this.drumButtonClick(e.target.innerText.toUpperCase()); });
        document.addEventListener('keypress', function (e) { return _this.drumButtonClick(e.key.toString().toUpperCase()); });
    };
    App.prototype.drumButtonClick = function (buttonLetter) {
        console.log(buttonLetter);
    };
    return App;
}());
exports.App = App;
