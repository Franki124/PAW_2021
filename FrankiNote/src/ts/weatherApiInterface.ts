export interface NoteApiInterface {
    note: Note[];
    name: string;
}

interface Note {
    description: string;
}
//podstawowe elementy budujące cały interfejs naszego API do pogody