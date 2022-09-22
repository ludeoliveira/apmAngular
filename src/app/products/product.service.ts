import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './product';
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable( {providedIn: 'root'} )
export class ProductService {

  private productUrl = 'api/products/products.json'

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      // pipe é um metodo do observable para especificar chamadas de metodos. tap acessa o dado emitido sem modificá-lo
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An Error occured: ${err.error.message}`
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }
    console.error(errorMessage)
    return throwError(() => errorMessage)
  }
}
