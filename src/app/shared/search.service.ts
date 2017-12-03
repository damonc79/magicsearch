import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import "rxjs/RX";
import { SearchResult } from './search-result.model';

@Injectable()
export class SearchService {
  
  constructor(private http: Http) { }

  getResults(source){
    source = source || "/assets/wikipedia.json";

    return this.http.get(source).map(
      (resp: Response) =>  resp.json()
    )
  }

}
