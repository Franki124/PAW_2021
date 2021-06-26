import { Api } from "./api";
//importujemy klasę obsługującą nasze API
class App{

    api: Api = new Api();

    cityArray: string[] = [];
    //tablica stringów do przechowywania nazw miast.
    constructor(){
        console.log("App started");
    }
    // Na początku jakiś log żebym wiedział że tutaj czegoś nie spiepszyłem.
    

    private saveToLocalStorage(){
        localStorage.setItem("cityArray", JSON.stringify(this.cityArray));
    }
    //metoda do przechowywania
    private loadFromLocalStorage(){
        let citiesFromStorage = localStorage.getItem("cityArray");
        if (citiesFromStorage){
            this.cityArray = JSON.parse(citiesFromStorage);
        }
        else this.cityArray = [];
        //metoda do ładowania zapisanych miast.
        this.refreshWeatherData();
    }
    //metoda odświeżająca aktualne informację o pogodzie dla określonego miasta
    private refreshWeatherData(){
        this.cityArray.forEach(element => {
            let weather = this.api.getWeather(element);
            if (weather != null){
                console.log(weather);
            }
        });
    }
}
export {App}; 