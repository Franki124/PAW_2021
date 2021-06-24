import { Player } from "./player";
import { Sample } from "./sample";

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

    progressBar: HTMLProgressElement = document.getElementById('progress-bar') as HTMLProgressElement;
    recordButton: HTMLButtonElement = document.getElementById('record-button') as HTMLButtonElement;
    playButton: HTMLButtonElement = document.getElementById('play-button') as HTMLButtonElement;

    recorded: Sample[] = []; 

    player : Player = new Player();

    recording: boolean = false;
    playing: boolean = false;
    startedTimeStamp: number = 0;

    playTimer: any = null;

    constructor(){
        console.log('DrumKit started');
        this.setEventListeners();
    }

    private setEventListeners(){
        this.drumButton1.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase(), e.timeStamp));
        this.drumButton2.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase(), e.timeStamp));
        this.drumButton3.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase(), e.timeStamp));
        this.drumButton4.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase(), e.timeStamp));
        this.drumButton5.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase(), e.timeStamp));
        this.drumButton6.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase(), e.timeStamp));
        this.drumButton7.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase(), e.timeStamp));
        this.drumButton8.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase(), e.timeStamp));
        this.drumButton9.addEventListener('click', (e) => this.drumButtonClick((e.target as HTMLElement).innerText.toUpperCase(), e.timeStamp));

        document.addEventListener('keypress', (e) => this.drumButtonClick(e.key.toString().toUpperCase(), e.timeStamp));
        this.recordButton.addEventListener('click', (e) => this.startRecording());
        this.playButton.addEventListener('click', (e) => this.startPlayingRecorded());
    }

    private drumButtonClick(buttonLetter: string, timeStamp: number){
        console.log(buttonLetter);
        this.player.playSound(buttonLetter);

        if (this.recording){
            if (this.recorded.length == 0){
                this.recorded.push(new Sample(buttonLetter, timeStamp - this.startedTimeStamp));
            }
            else{
                this.recorded.push(new Sample(buttonLetter, (timeStamp - this.startedTimeStamp) - this.recorded[this.recorded.length - 1].delay));
            }
        }
    }

    private startRecording(){
        if (this.playing == false){
            if (this.recording == false){
                this.playButton.disabled = true;
                this.recorded = [];
                this.startedTimeStamp = performance.now();
                this.recording = true;
            }
            else{
                this.stopRecording();
            }

        }
    }

    private stopRecording(){
        this.recording = false;
        this.playButton.disabled = false;
    }

    private startPlayingRecorded(){
        if (this.recording == false){
            this.recordButton.disabled = true;
            this.playButton.disabled = true;
            this.playing = true;

            if (this.recorded.length > 0){
                this.playTimer = setTimeout(() => this.playSound(0), this.recorded[0].delay);
            }
            else{
                this.stopPlayingRecorded();
            }
        }
    }

    private playSound(soundNumber: number){
        if (soundNumber < this.recorded.length){
            this.player.playSound(this.recorded[soundNumber].buttonLetter);
        }

        clearTimeout(this.playTimer);

        if (soundNumber + 1 < this.recorded.length){
            this.playTimer = setTimeout(() => this.playSound(soundNumber + 1), this.recorded[soundNumber + 1].delay);
        }
        else{
            this.stopPlayingRecorded();
        }
    }

    private stopPlayingRecorded(){
        this.playing = false;
        this.recordButton.disabled = false;
        this.playButton.disabled = false;
    }

}

export {App}; 