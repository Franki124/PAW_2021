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
        this.maxInput = document.querySelector("#data1");
        this.minInput = document.querySelector("#data1");
        this.avgInput = document.querySelector("#data1");
        this.sumInput = document.querySelector("#data1");
    }
    WatchValues() {
        this.data1Input.addEventListener("input", () => this.ShowValue());
        this.data2Input.addEventListener("input", () => this.ShowValue());
        this.data3Input.addEventListener("input", () => this.ShowValue());
        this.data4Input.addEventListener("input", () => this.ShowValue());
    }
    ShowValue() {
        const data1 = +this.data1Input.value;
        const data2 = +this.data1Input.value;
        const data3 = +this.data1Input.value;
        const data4 = +this.data1Input.value;
        const sum = data1 + data2 + data3 + data4;
        const avg = sum/4;
        const min = Math.min(data1 , data2, data3, data4);
        const max = Math.max(data1, data2, data3, data4);
        
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }
}