import { NoteApiInterface } from "./weatherApiInterface";

class NoteBuilder{

    private allNotesBox: HTMLElement = document.getElementById('all-notes') as HTMLElement;
    // zmienna odwołująca się do elementu w strukturze DOM, dokładniej to do sekcji w której będą tworzone nasze notatki.
    private refreshEvent: (city: string) => void;

    constructor(refreshEvent: (city: string) => void){
        this.refreshEvent = refreshEvent;
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
        removeButton.className = 'note-item-info-button';
        removeButton.innerHTML = 'Remove';

        let removeButtonDiv = document.createElement('div');
        removeButtonDiv.className = 'note-item-info';
        removeButtonDiv.appendChild(removeButton);
        item.appendChild(removeButtonDiv);
    }
}
//Klasa budująca interfejs w strukturze DOM notatnika.
export {NoteBuilder} 