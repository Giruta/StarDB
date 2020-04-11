// этот класс для инкапсуляции и изоляции сетевого кода(код который работает с сетью)
// от остальных частей приложения
// Клас-Сервис - здесь весь код работы с данными
//для остального приложения этот класс - асинхронный источник данных

export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}/`);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}/`);
    }
}


// const swapi = new SwapiService();
//
// swapi.getAllPeople().then((body) => {
//     people.forEach((p) => {
//         console.log(p.name);  // имена персонажей
//     });
// });
//
// swapi.getPerson(3).then((p) => {
//     console.log(p.name);  // имя 3-ого персонажа
// });

// getResource('https://swapi.co/api/people/1/')
//     .then((body) => {
//         console.log(body);
//     })
//     .catch((err) => {
//         console.error('Could not fetch', err);
//     });
