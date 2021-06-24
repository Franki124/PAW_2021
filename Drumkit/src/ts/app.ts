class App{

    drumButton1: HTMLButtonElement = document.getElementById('drum-button-1') as HTMLButtonElement;
    drumButton2: HTMLButtonElement = document.getElementById('drum-button-2') as HTMLButtonElement;
    drumButton3: HTMLButtonElement = document.getElementById('drum-button-3') as HTMLButtonElement;
    drumButton4: HTMLButtonElement = document.getElementById('drum-button-4') as HTMLButtonElement;
    drumButton5: HTMLButtonElement = document.getElementById('drum-button-5') as HTMLButtonElement;
    drumButton6: HTMLButtonElement = document.getElementById('drum-button-6') as HTMLButtonElement;
    drumButton7: HTMLButtonElement = document.getElementById('drum-button-7') as HTMLButtonElement;
    drumButton8: HTMLButtonElement = document.getElementById('drum-button-8') as HTMLButtonElement;
    drumButton9: HTMLButtonElement = document.getElementById('drum-button-9') as HTMLButtonElement;

    constructor(){
        console.log('DrumKit started');
        this.setEventListeners();
    }

    private setEventListeners(){
        this.drumButton1.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase()));
        this.drumButton2.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase()));
        this.drumButton3.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase()));
        this.drumButton4.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase()));
        this.drumButton5.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase()));
        this.drumButton6.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase()));
        this.drumButton7.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase()));
        this.drumButton8.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase()));
        this.drumButton9.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase()));

        document.addEventListener('keypress', (e) => this.drumButtonClick(e.key.toString().toUpperCase()));
    }

    private drumButtonClick(buttonLetter: string){
        console.log(buttonLetter);
    }
}

export {App}; 