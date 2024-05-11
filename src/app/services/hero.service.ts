import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http:HttpClient) { }

  baseurl = "https://coding-is-fun.onrender.com/api/v1/";
  // getCategories = "get-all-categories";

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.baseurl}/get-all-categories`);
  }

}


// import { Component, Injectable, OnInit } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class HeroService {

//   constructor(private http: HttpClient) { }

//   baseurl = "https://coding-is-fun.onrender.com/api/v1/";

//   getAllCategories(): Observable<any[]> {
//     return this.http.get<any[]>(this.baseurl + "get-all-categories").pipe(
//       catchError(this.handleError)
//     );
//   }

//   private handleError(error: HttpErrorResponse) {
//     let errorMessage = 'Unknown error!';
//     if (error.error instanceof ErrorEvent) {
//       errorMessage = `Error: ${error.error.message}`;
//     } else {
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     console.error(errorMessage);
//     return throwError(errorMessage);
//   }
// }

// @Component({
//   selector: 'app-categories',
//   template: `
//     <div *ngIf="categories.length > 0">
//       <h2>Categories</h2>
//       <ul>
//         <li *ngFor="let category of categories">{{ category.name }}</li>
//       </ul>
//     </div>
//     <div *ngIf="errorMessage">
//       <h2>Error</h2>
//       <p>{{ errorMessage }}</p>
//     </div>
//   `,
//   styleUrls: ['./categories.component.css']
// })
// export class CategoriesComponent implements OnInit {
//   categories: any[] = [];
//   errorMessage: string = '';

//   constructor(private heroService: HeroService) { }

//   ngOnInit(): void {
//     this.heroService.getAllCategories().subscribe(
//       (data) => {
//         this.categories = data;
//       },
//       (error) => {
//         this.errorMessage = 'An error occurred while fetching categories.';
//         console.error(error);
//       }
//     );
//   }
// }
