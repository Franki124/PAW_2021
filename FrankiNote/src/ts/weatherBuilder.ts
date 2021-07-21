import { WeatherApiInterface } from "./weatherApiInterface";

class WeatherBuilder{

    private allWeathersBox: HTMLElement = document.getElementById('all-weathers') as HTMLElement;
    private refreshEvent: (city: string) => void;

    constructor(refreshEvent: (city: string) => void){
        this.refreshEvent = refreshEvent;
    }


    }
    //czyszczenie danych po odświeżeniu strony.
    addNote(){
        let item = document.createElement('div');
        item.className = 'note-item';

        let title = document.createElement('div');
        title.className = 'note-item-title';
        item.appendChild(title);


        let removeButton = document.createElement('button');
        removeButton.className = 'weather-item-info-button';
        removeButton.innerHTML = 'Remove';

        let removeButtonDiv = document.createElement('div');
        removeButtonDiv.className = 'weather-item-info';
        removeButtonDiv.appendChild(removeButton);
        item.appendChild(removeButtonDiv);
    }
//Klasa budująca interfejs w strukturze DOM pogodynki.
export {WeatherBuilder} 