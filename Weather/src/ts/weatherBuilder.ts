import { WeatherApiInterface } from "./weatherApiInterface";

class WeatherBuilder{

    private allWeathersBox: HTMLElement = document.getElementById('all-weathers') as HTMLElement;
    private refreshEvent: (city: string) => void;

    constructor(refreshEvent: (city: string) => void){
        this.refreshEvent = refreshEvent;
    }

    clearAllWeathers(){
        while (this.allWeathersBox.hasChildNodes()) {
            this.allWeathersBox.removeChild(this.allWeathersBox.lastChild as Node)
        }
    }
    //czyszczenie danych po odświeżeniu strony.
    addWeather(weather: WeatherApiInterface){
        let item = document.createElement('div');
        item.className = 'weather-item';

        let title = document.createElement('div');
        title.className = 'weather-item-title';
        title.innerText = weather.name;
        item.appendChild(title);

        let img = document.createElement('img');
        img.className = 'weather-item-info-image';
        img.src = './media/image.png'.replace('image', weather.weather[0].icon);

        let imageDiv = document.createElement('div');
        imageDiv.className = 'weather-item-image';
        imageDiv.appendChild(img);
        item.appendChild(imageDiv);

        let temperature = document.createElement('div');
        temperature.className = 'weather-item-info';
        temperature.innerText = 'Temperature: ' + weather.main.temp + ' st. C';
        item.appendChild(temperature);

        let humidity = document.createElement('div');
        humidity.className = 'weather-item-info';
        humidity.innerText = 'Humidity: ' + weather.main.humidity + '%';
        item.appendChild(humidity);

        let pressure = document.createElement('div');
        pressure.className = 'weather-item-info';
        pressure.innerText = 'Pressure: ' + weather.main.pressure + ' hPa';
        item.appendChild(pressure);

        let removeButton = document.createElement('button');
        removeButton.className = 'weather-item-info-button';
        removeButton.innerHTML = 'Remove';

        let removeButtonDiv = document.createElement('div');
        removeButtonDiv.className = 'weather-item-info';
        removeButtonDiv.appendChild(removeButton);
        item.appendChild(removeButtonDiv);

        this.allWeathersBox.appendChild(item);
        
        removeButton.addEventListener('click', (e) => this.removeWeather(e))
    }

    private removeWeather(event: Event){
        let cityName = ((event.currentTarget as HTMLElement).parentElement?.parentElement?.firstChild as HTMLElement).innerText;

        let elementToRemove = (event.currentTarget as HTMLElement).parentElement?.parentElement;
        elementToRemove?.parentElement?.removeChild(elementToRemove);

        this.refreshEvent(cityName)
    }
}
//Klasa budująca interfejs w strukturze DOM pogodynki.
export {WeatherBuilder} 