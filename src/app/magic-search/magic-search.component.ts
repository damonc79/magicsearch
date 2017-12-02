import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { SearchResult } from '../shared/search-result.model';

@Component({
  selector: 'magic-search',
  templateUrl: './magic-search.component.html',
  styleUrls: ['./magic-search.component.css']
})
export class MagicSearchComponent implements OnInit {
  searchResults: SearchResult[];
  showRecent: Boolean = false;
  @ViewChild('searchBox') searchbox;

  constructor(public search: SearchService) { }

  ngOnInit() {
    
  }

  fetchRecent(){
    this.showRecent = true;

    this.search.getResults("/assets/wikipedia.json", true).subscribe(
      data => {
        this.searchResults = data.slice(0,5);
        //console.log(this.searchResults);
      }
    );
  }

  fetchResults(value){
    this.showRecent = false;

    if(value != ""){
      this.search.getResults("/assets/wikipedia.json", true).subscribe(
        data => {
          this.searchResults = data;
          //console.log(value);
        }
      );
    } else {
      this.clearResults();
    }
  }

  clearResults(){
    this.showRecent = false;
    this.searchResults = [];
  }

}
