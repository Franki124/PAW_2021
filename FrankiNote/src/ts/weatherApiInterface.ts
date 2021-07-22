export interface NoteApiInterface {
    weather: Weather[];
    name: string;
}

interface Weather {
    description: string;
}
//podstawowe elementy budujące cały interfejs naszego API do pogody