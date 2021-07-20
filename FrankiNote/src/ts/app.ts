//importujemy klasę obsługującą nasze API
import { WeatherBuilder } from "./weatherBuilder";

class App{

    weatherBuilder: WeatherBuilder = new WeatherBuilder((x) => this.refreshEvent(x));

    inputElement: HTMLInputElement = document.getElementById('city-input') as HTMLInputElement;
    addCityButton: HTMLButtonElement = document.getElementById('add-city-button') as HTMLButtonElement;
    //Selector'y do wyszukiwania elementów s trukturze DOM.
    cityArray: string[] = [];
    //tablica stringów do przechowywania nazw miast.
    constructor(){
        console.log("App started");
        this.loadFromLocalStorage();
    }

    private refreshEvent(city: string){
        let cityName = city.toLowerCase();
        this.cityArray = this.cityArray.filter(x => x != cityName);
        this.saveToLocalStorage();
    }

    //metoda do obsługi eventów
  

    //Metoda dodające miasta z pobraną informacją odnośnie pogody.
    private saveToLocalStorage(){
        localStorage.setItem("cityArray", JSON.stringify(this.cityArray));
    }
    //metoda do przechowywania
    private async loadFromLocalStorage(){
        let citiesFromStorage = localStorage.getItem("cityArray");
        if (citiesFromStorage){
            this.cityArray = JSON.parse(citiesFromStorage);
        }
        else this.cityArray = [];
        //metoda do ładowania zapisanych miast.
    }
    //metoda odświeżająca aktualne informację o pogodzie dla określonego miasta
}
export {App}; 