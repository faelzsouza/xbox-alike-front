import { JwtHandler } from "../local-storage/jwt-handler";

export const Api = {
    urlList: [
        "http://localhost:3000",
        "https://back-xboxalike.herokuapp.com",
    ],
    baseUrl: "https://back-xboxalike.herokuapp.com",

    getAll: (tableName, auth) =>
        fetch(Api.baseUrl + `/${tableName}`, getRequest(auth)),

    getProfilesByUserId: (userId, auth) =>
        fetch(Api.baseUrl + `/profiles/byUserId/${userId}`, getRequest(auth)),

    getById: (tableName, id, auth) =>
        fetch(Api.baseUrl + `/${tableName}/${id}`, getRequest(auth)),

    insert: (tableName, body, auth) =>
        fetch(Api.baseUrl + `/${tableName}`, postRequest(body, auth)),

    login: (body) => fetch(Api.baseUrl + "/login", postRequest(body)),

    update: (tableName, id, body, auth) => fetch(Api.baseUrl + `/${tableName}/${id}`, patchRequest(body, auth)),

    authHeader: () => ({
        Authorization: "Bearer " + JwtHandler.getJwt(),
    }),
};

// REQUEST BUILDS

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
