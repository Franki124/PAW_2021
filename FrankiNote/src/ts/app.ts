//importujemy klasę obsługującą nasze API
import { NoteBuilder } from "./weatherBuilder";

class App{

    inputElement: HTMLInputElement = document.getElementById('note-input') as HTMLInputElement;
    addCityButton: HTMLButtonElement = document.getElementById('add-note-button') as HTMLButtonElement;
    //Selector'y do wyszukiwania elementów s trukturze DOM.
    noteArray: string[] = [];
    //tablica stringów do przechowywania nazw miast.
    constructor(){
        console.log("App started");
        this.loadFromLocalStorage();
    }

    // private refreshEvent(city: string){
    //     let cityName = city.toLowerCase();
    //     this.cityArray = this.cityArray.filter(x => x != cityName);
    //     this.saveToLocalStorage();
    // }

    //metoda do obsługi eventów
  

    //Metoda dodające miasta z pobraną informacją odnośnie pogody.
    private saveToLocalStorage(){
        localStorage.setItem("cityArray", JSON.stringify(this.noteArray));
    }
    //metoda do zapisywania dodanych miast do pliku LocalStorage.
    private async loadFromLocalStorage(){
        let citiesFromStorage = localStorage.getItem("cityArray");
        if (citiesFromStorage){
            this.noteArray = JSON.parse(citiesFromStorage);
        }
        else this.noteArray = [];
        //metoda do ładowania zapisanych elementów z pliku localStorage.
    }
}
export {App}; 