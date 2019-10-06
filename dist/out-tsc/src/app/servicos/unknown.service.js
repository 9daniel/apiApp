import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
// HTTP Client correto para ionic 4. tem que ESCREVER
import { HttpClient } from '@angular/common/http';
let UnknownService = class UnknownService {
    constructor(http) {
        this.http = http;
        this.url = 'https://reqres.in/api/unknown';
    }
    getUnknowns(page = 1) {
        return this.http.get(`${this.url}?page=${page}`);
    }
    getUnknown(id) {
        return this.http.get(`${this.url}/${id}`);
    }
    SaveUnknown(user) {
        return this.http.post(this.url, user, {
            headers: {
                'Content-type': 'application/json; charset=utf-8',
                'Accept': 'application/json'
            }
        });
    }
};
UnknownService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], UnknownService);
export { UnknownService };
//# sourceMappingURL=unknown.service.js.map