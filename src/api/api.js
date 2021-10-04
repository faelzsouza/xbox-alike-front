export const Api = {
    baseUrl: ["https://pokeapi.co/api/v2/", "http://localhost:3000"],
    getAll: () => fetch(Api.baseUrl[1] + "/product")
}

/* "pokemon?offset=0&limit=50" */