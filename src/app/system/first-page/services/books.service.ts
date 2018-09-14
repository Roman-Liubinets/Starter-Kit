import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BooksService {

    constructor(private http: HttpClient) {}

    register(user) {
      return this.http.post('http://localhost:8081/api/user', user);
    }

    login(email) {
      return this.http.get(`http://localhost:8081/api/user-email/${email}`);
    }

}