export interface WeatherApiInterface {
    weather: Weather[];
    main: Main;
    name: string;
}

interface Weather {
    description: string;
    icon: string;
}

interface Main {
    temp: number;
    pressure: number;
    humidity: number;
}
//podstawowe elementy budujące cały interfejs naszego API do pogody