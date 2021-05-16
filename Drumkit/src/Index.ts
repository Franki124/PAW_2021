const channel1: any[] = [];
const clapAudio : HTMLAudioElement = document.querySelector('[data-sound = "clap"')!;
document.body.addEventListener('keypress', onKeyDown);

const playChannel1Btn: HTMLButtonElement = document.querySelector("playChannel1")!;
playChannel1Btn.addEventListener('click', onPlayChannel1);

function onKeyDown(ev: KeyboardEvent):void {
    const key = ev.key;
    const time = ev.timeStamp;
    
    channel1.push({key,time});
    
    playSound(key);
}
function playSound(key:string) {
    clapAudio.currentTime = 0;
    clapAudio.play();
}

function onPlayChannel1(): void{
   playChannel1();
}
   

function playChannel1() {
        let prevTime = 0;
        channel1.forEach(sound => {
            const timeOut = sound.time - prevTime;
            setTimeout(() => playSound(sound.key), timeOut);
        });
    }