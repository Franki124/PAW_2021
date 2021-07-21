import { WeatherApiInterface } from "./weatherApiInterface";

class NoteBuilder{

    private allWeathersBox: HTMLElement = document.getElementById('all-weathers') as HTMLElement;

    }

    addNote(){
        let item = document.createElement('div');
        item.className = 'note-item';

        let title = document.createElement('div');
        title.className = 'note-item-title';
        item.appendChild(title);

        let textfield = document.createElement('div')
        textfield.className = 'text-field'

        let removeButton = document.createElement('button');
        removeButton.className = 'weather-item-info-button';
        removeButton.innerHTML = 'Remove';

        let removeButtonDiv = document.createElement('div');
        removeButtonDiv.className = 'weather-item-info';
        removeButtonDiv.appendChild(removeButton);
        item.appendChild(removeButtonDiv);
    }
//Klasa budująca interfejs w strukturze DOM notatnika.
export {NoteBuilder} 