class Player{


    public playSound(buttonLetter: string){
        let audioElement: HTMLAudioElement | null = null;

        switch (buttonLetter) {
            case 'Q':
                audioElement = document.getElementById("sound1") as HTMLAudioElement;
                break;
            case 'W':
                audioElement = document.getElementById("sound2") as HTMLAudioElement;
                break;
            case 'E':
                audioElement = document.getElementById("sound3") as HTMLAudioElement;
                break;
            case 'R':
                audioElement = document.getElementById("sound4") as HTMLAudioElement;
                break;
            case 'T':
                audioElement = document.getElementById("sound5") as HTMLAudioElement;
                break;
            case 'A':
                audioElement = document.getElementById("sound6") as HTMLAudioElement;
                break;
            case 'S':
                audioElement = document.getElementById("sound7") as HTMLAudioElement;
                break;
            case 'D':
                audioElement = document.getElementById("sound8") as HTMLAudioElement;
                break;
            case 'F':
                audioElement = document.getElementById("sound9") as HTMLAudioElement;
                break;
            default:
                break;
        }

        if (audioElement != null){
            audioElement.currentTime = 0;
            audioElement.play();
        }

    }
}

export {Player} 