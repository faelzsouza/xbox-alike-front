import { JwtHandler } from "../local-storage/jwt-handler";

export const Api = {
    baseUrl: [
        "https://pokeapi.co/api/v2/",
        "http://localhost:3000",
        "https://back-xboxalike.herokuapp.com",
    ],
    getAll: (tableName, auth) =>
        fetch(Api.baseUrl[1] + `/${tableName}`, getRequest(auth)),
    insert: (tableName, body, auth) =>
        fetch(Api.baseUrl[1] + `/${tableName}`, postRequest(body, auth)),
    login: (body) => fetch(Api.baseUrl[1] + "/login", postRequest(body)),
    authHeader: () => ({
        Authorization: "Bearer " + JwtHandler.getJwt(),
    }),
};

const getRequest = (auth) => ({
    method: "GET",
    headers: auth ? new Headers(Api.authHeader()) : undefined,
});

const postRequest = (body, auth) => ({
    method: "POST",
    headers: new Headers({
        "Content-type": "application/json",
        ...(auth ? Api.authHeader() : {}),
    }),
    body: JSON.stringify(body),
});

const patchRequest = (body, auth) => ({
    method: "PATCH",
    headers: new Headers({
        "Content-type": "application/json",
        ...(auth ? Api.authHeader() : {}),
    }),
    body: JSON.stringify(body),
});

const deleteRequest = (auth) => ({
    method: "DELETE",
    headers: auth ? new Headers(Api.authHeader()) : undefined,
});
