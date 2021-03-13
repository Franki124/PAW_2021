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
    WatchValues() {
        this.data1Input = document.querySelector("#data1");
        this.data2Input = document.querySelector("#data2");
        this.data3Input = document.querySelector("#data3");
        this.data4Input = document.querySelector("#data4");
        this.maxInput = document.querySelector("#data1");
        this.minInput = document.querySelector("#data1");
        this.avgInput = document.querySelector("#data1");
        this.sumInput = document.querySelector("#data1");
    }
    GetInputs() {
        throw new Error("Method not implemented.");
    }















    
}