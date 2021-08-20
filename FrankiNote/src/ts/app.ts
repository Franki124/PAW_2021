//importujemy klasę obsługującą nasze API
import { NoteBuilder } from "./frankiNoteBuilder";

class App{

    weatherBuilder: NoteBuilder = new NoteBuilder((x) => this.refreshEvent(x));

    inputElement: HTMLInputElement = document.getElementById('note-input') as HTMLInputElement;
    addNoteButton: HTMLButtonElement = document.getElementById('add-note-button') as HTMLButtonElement;
    //Selector'y do wyszukiwania elementów s trukturze DOM.
    noteArray: string[] = [];
    //tablica stringów do przechowywania nazw miast.
    constructor(){
        console.log("App started");
        //this.loadFromLocalStorage();
        this.createEventListeners();
    }

    private refreshEvent(city: string){
        let cityName = city.toLowerCase();
        this.noteArray = this.noteArray.filter(x => x != cityName);
        // this.saveToLocalStorage();
    }

    private createEventListeners(){
        this.addNoteButton.addEventListener('click', () => this.addNote());
    }
   //metoda dodająca notatkę
    private addNote(){

        this.weatherBuilder.addNote(this.inputElement.value);

        // let note
        // console.log("note")

        // if (note != null){
        //     this.saveToLocalStorage();
        // }
    }

    //Metoda dodające miasta z pobraną informacją odnośnie pogody.
    // private saveToLocalStorage(){
    //     localStorage.setItem("noteArray", JSON.stringify(this.noteArray));
    // }
    //metoda do zapisywania dodanych miast do pliku LocalStorage.
    // private async loadFromLocalStorage(){
    //     let notesFromStorage = localStorage.getItem("noteArray");
    //     if (notesFromStorage){
    //         this.noteArray = JSON.parse(notesFromStorage);
    //     }
    //     else this.noteArray = [];
    //     //metoda do ładowania zapisanych elementów z pliku localStorage.
    // }
}
export {App}; 