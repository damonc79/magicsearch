import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import "rxjs/RX";
import { SearchResult } from './search-result.model';

@Injectable()
export class SearchService {
  newResult: SearchResult[];

  constructor(private http: Http) { }

  getResults(source, recent){
    source = source || "/assets/wikipedia.json";
    recent = recent || true;

    return this.http.get(source).map(
      (resp: Response) =>  resp.json()
    )
  }

}
