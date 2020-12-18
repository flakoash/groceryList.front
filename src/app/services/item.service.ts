import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Item, ItemCreate } from '../interfaces/item';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  baseURL = 'http://localhost:3000/item';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  getItems(): Observable<Item[]> {
    // let items: Item[] = [
    //   { _id: 1, name: 'item 1', created_at: new Date(), price: 10 },
    //   { _id: 2, name: 'item 2', created_at: new Date(), price: 10 },
    //   { _id: 3, name: 'item 3', created_at: new Date(), price: 10 },
    // ];
    // return of(items)
    let items = this.http.get<Item[]>(this.baseURL);
    return items;
  }

  saveItem(item: ItemCreate): Observable<Item> {
    console.log('post');
    let res = this.http
      .post<Item>(this.baseURL, item, this.httpOptions)
      .pipe(catchError(this.handleError));
    return res;
  }

  uploadFile(file: File) {
    const fd = new FormData();
    fd.append('image', file, file.name);
    let res = this.http.post(this.baseURL + '/uploadfile', fd);
    return res;
  }
}
