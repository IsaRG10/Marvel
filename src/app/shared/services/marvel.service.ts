import { Injectable } from '@angular/core';
import {Md5} from "md5-typescript";
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private publicApiKey = 'c591101aa51fe60d1a2b6c76ad81fd7d';
  private privateApiKey = '439d7d9b198cf3c45f3c97f8f8ec18bbb063f91b';
  private ts = new Date().getTime();
  private stringToHash = this.ts + this.privateApiKey + this.publicApiKey;
  private hash = Md5.init(this.stringToHash);
  private limit = 21;
  private marvelApiURL = 'https://gateway.marvel.com:443/v1/public/';

  constructor(private http: HttpClient) { }

  getAllCharacters():Observable<any>{
    return this.http.get(this.marvelApiURL + 'characters?limit=3' + '&ts=' + this.ts + '&apikey=' + this.publicApiKey + '&hash=' + this.hash)
    .pipe(map(res => res))
    .pipe(catchError(error => this.errorHandler(error)));
  }

  getCharacter = (id:number):Observable<any> => {
    return this.http.get(this.marvelApiURL + "characters/" + `${id}` + "?limit="+ this.limit + '&ts=' + this.ts + '&apikey=' + this.publicApiKey + '&hash=' + this.hash)
    .pipe(res => res)
    .pipe(catchError(error => this.errorHandler(error)));
  }

  getAllComics = ():Observable<any> => {
    return this.http.get(this.marvelApiURL + 'comics?limit=3' + '&ts=' + this.ts + '&apikey=' + this.publicApiKey + '&hash=' + this.hash)
    .pipe(map(res => res))
    .pipe(catchError(error => this.errorHandler(error)));
  }

  private errorHandler = (error: HttpErrorResponse) => {
    return throwError(error.message || 'Server error');
  }
}
