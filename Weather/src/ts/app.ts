
class App{

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
        // przy okazji odwśieża informację po załadowaniu strony.
    }
}
export {App}; 