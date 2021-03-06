import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {}

  books = [];

  login(email) {
    return this.http.get(`http://localhost:8081/api/user-email/${email}`);
  }

  addBook(book) {
    return this.http.post(`http://localhost:8081/api/book`, book);
  }

  deleteBook(id) {
    return this.http.delete(`http://localhost:8081/api/delete/${id}`);
  }

  editeBook(book) {
    return this.http.put(`http://localhost:8081/api/editBook`, book);
  }

  getBooks() {
    return this.http.get("http://localhost:8081/api/books");
  }
}
