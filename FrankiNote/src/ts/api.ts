import { WeatherApiInterface } from "./weatherApiInterface";
//importujemy interfejs API
class Api{

    private urlWeather = 'http://api.openweathermap.org/data/2.5/weather?q=city&appid=ddf4fde3d437e8aa8e7663c93e444434&units=metric&lang=pl';

    async getWeather(city: string): Promise<WeatherApiInterface | null>{
        let urlRequest = this.urlWeather.replace('city', city);

        let response = await fetch(urlRequest);

        if (response.ok){
            return await response.json() as WeatherApiInterface;
        }
        else{
            return null;
        }
    }
}
// podstawowa klasa do pobierania dany z API z obsługą sytuacji w razie wypadku brak odpowiedzi.
export {Api} 