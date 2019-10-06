import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
// HTTP Client correto para ionic 4. tem que ESCREVER
import { HttpClient } from '@angular/common/http';
let UsersService = class UsersService {
    //private url = 'https://reqres.in//api/unknown'
    constructor(http) {
        this.http = http;
        this.url = 'https://reqres.in/api/users';
    }
    getUsers(page = 1) {
        return this.http.get(`${this.url}?page=${page}`);
    }
    getUser(id) {
        return this.http.get(`${this.url}/${id}`);
    }
    SaveUser(user) {
        return this.http.post(this.url, user, {
            headers: {
                'Content-type': 'application/json; charset=utf-8',
                'Accept': 'application/json'
            }
        });
    }
};
UsersService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map