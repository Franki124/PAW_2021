import { Api } from "./api";
//importujemy klasę obsługującą nasze API
class App{

    api: Api = new Api();

    inputElement: HTMLInputElement = document.getElementById('city-input') as HTMLInputElement;
    addCityButton: HTMLButtonElement = document.getElementById('add-city-button') as HTMLButtonElement;
    //Selector'y do wyszukiwania elementów s trukturze DOM.
    cityArray: string[] = [];
    //tablica stringów do przechowywania nazw miast.
    constructor(){
        console.log("App started");
        this.loadFromLocalStorage();
        this.createEventListeners();
    }

    private createEventListeners(){
        this.addCityButton.addEventListener('click', () => this.addCity());
    }
    //metoda do obsługi eventów
    private async addCity(){
        let weather = await this.api.getWeather(this.inputElement.value);
            if (weather != null){
                this.cityArray.push(this.inputElement.value);
                this.saveToLocalStorage();
                await this.refreshWeatherData();
            }
    }
    // Na początku jakiś log żebym wiedział że tutaj czegoś nie spiepszyłem.
    

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
        await this.refreshWeatherData();
    }
    //metoda odświeżająca aktualne informację o pogodzie dla określonego miasta
    private async refreshWeatherData(){
        this.cityArray.forEach(async element => {
            let weather = await this.api.getWeather(element);
            if (weather != null){
                console.log(weather);
            }
        });
    }
}
export {App}; 