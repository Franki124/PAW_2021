var App = /** @class */ (function () {
    function App() {
        this.Start();
    }
    App.prototype.Start = function () {
        this.GetInputs();
        this.WatchValues();
    };
    App.prototype.GetInputs = function () {
        this.data1Input = document.querySelector("#data1");
        this.data2Input = document.querySelector("#data2");
        this.data3Input = document.querySelector("#data3");
        this.data4Input = document.querySelector("#data4");
        this.maxInput = document.querySelector("#data1");
        this.minInput = document.querySelector("#data1");
        this.avgInput = document.querySelector("#data1");
        this.sumInput = document.querySelector("#data1");
    };
    App.prototype.WatchValues = function () {
        var _this = this;
        this.data1Input.addEventListener("input", function () { return _this.ShowValue(); });
        this.data2Input.addEventListener("input", function () { return _this.ShowValue(); });
        this.data3Input.addEventListener("input", function () { return _this.ShowValue(); });
        this.data4Input.addEventListener("input", function () { return _this.ShowValue(); });
    };
    App.prototype.ShowValue = function () {
        var data1 = +this.data1Input.value;
        var data2 = +this.data1Input.value;
        var data3 = +this.data1Input.value;
        var data4 = +this.data1Input.value;
        var sum = data1 + data2 + data3 + data4;
        var avg = sum / 4;
        var min = Math.min(data1, data2, data3, data4);
        var max = Math.max(data1, data2, data3, data4);
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    };
    return App;
}());
