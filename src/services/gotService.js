export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        };
        return await res.json();
    }

    async getAllCharacters() {
        const result = await this.getResource('/characters?page=5&pageSize=11');
        return result.map(this._transformCharacter)
    }
    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character)
    }

    getAllHouses(){
        return this.getResource('/houses/');
    }
    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }

    getAllBooks(){
        return this.getResource('/books/');
    }
    getBook(id) {
        return this.getResource(`/books/${id}`);
    }

    _transformCharacter({name, gender, culture, born, died}) {
        return {
            name: name,
            gender: gender,
            culture: culture,
            born: born,
            died: died,
        }
    }

    _transformHouse({name, region, words, houseitles, overlord, ancestralWeapons}) {
        return {
            name: name,
            region: region,
            words: words,
            titles: houseitles,
            overlord: overlord,
            ancestralWeapons: ancestralWeapons
        }
    }

    _transformBook({name, numberOfPages, publister, released}) {
        return {
            name: name,
            numberOfPages: numberOfPages,
            publister: publister,
            released: released
        }
    }
};