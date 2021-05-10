//tsc src/index.ts --outdir ./build
class App{
 data1Input: HTMLInputElement;
 data2Input: HTMLInputElement;
 data3Input: HTMLInputElement;
 data4Input: HTMLInputElement;

 minInput: HTMLInputElement;
 maxInput: HTMLInputElement;
 avgInput: HTMLInputElement;
 sumInput: HTMLInputElement;

 constructor(){
    this.Start();
 }
    Start() {
        this.GetInputs();
        this.WatchValues();
    }
    GetInputs() {
        this.data1Input = document.querySelector("#data1");
        this.data2Input = document.querySelector("#data2");
        this.data3Input = document.querySelector("#data3");
        this.data4Input = document.querySelector("#data4");
        this.maxInput = document.querySelector("#max");
        this.minInput = document.querySelector("#min");
        this.avgInput = document.querySelector("#avg");
        this.sumInput = document.querySelector("#sum");
    }
    WatchValues() {
        this.data1Input.addEventListener("input", () => this.ShowValue());
        this.data2Input.addEventListener("input", () => this.ShowValue());
        this.data3Input.addEventListener("input", () => this.ShowValue());
        this.data4Input.addEventListener("input", () => this.ShowValue());
    }
    ShowValue() {
        let data1 = +this.data1Input.value;
        let data2 = +this.data2Input.value;
        let data3 = +this.data3Input.value;
        let data4 = +this.data4Input.value;
        let sum = data1 + data2 + data3 + data4;
        let avg = sum/4;
        let min = Math.min(data1 , data2, data3, data4);
        let max = Math.max(data1, data2, data3, data4);
        
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }
}
new App();