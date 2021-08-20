import { NoteApiInterface } from "./frankiNoteApiInterface";

class NoteBuilder{

    private allNotesBox: HTMLElement = document.getElementById('all-notes') as HTMLElement;
    // zmienna odwołująca się do elementu w strukturze DOM, dokładniej to do sekcji w której będą tworzone nasze notatki.
    private refreshEvent: (city: string) => void;

    constructor(refreshEvent: (city: string) => void){
        this.refreshEvent = refreshEvent;
    }


    addNote(title_note: string){
        let item = document.createElement('div');
        item.className = 'note-item';
        //dodać 

        let title = document.createElement('div');
        title.className = 'note-item-title';
        title.innerHTML = title_note;
        item.appendChild(title);

        let textfield = document.createElement('div')
        textfield.className = 'text-field'

        let inputfield = document.createElement('input')
        inputfield.className = 'input-text'
        inputfield.innerHTML = "Text"
        textfield.appendChild(inputfield);
        item.appendChild(textfield);        

        let removeButton = document.createElement('button');
        removeButton.className = 'note-item-remove-button';
        removeButton.innerHTML = 'Remove';

        let removeButtonDiv = document.createElement('div');
        removeButtonDiv.className = 'note-item-info';
        removeButtonDiv.appendChild(removeButton);
        item.appendChild(removeButtonDiv);

        this.allNotesBox.appendChild(item);

        removeButton.addEventListener('click', (e) => this.removeNote(e))
    }

    private removeNote(event: Event){
        let cityNote = ((event.currentTarget as HTMLElement).parentElement?.parentElement?.firstChild as HTMLElement).innerText;

        let elementToRemove = (event.currentTarget as HTMLElement).parentElement?.parentElement;
        elementToRemove?.parentElement?.removeChild(elementToRemove);

        this.refreshEvent(cityNote)
    }
}
//Klasa budująca interfejs w strukturze DOM notatnika.
export {NoteBuilder} 