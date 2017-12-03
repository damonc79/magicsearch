import { Component, OnInit, ViewChild, Input } from '@angular/core';
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
  @Input() source: string;
  @ViewChild('searchBox') searchbox;

  constructor(public search: SearchService) { }

  ngOnInit() {
    
  }

  fetchRecent(){
    if(this.searchbox.nativeElement.value.length >= 1){
      this.showRecent = false;
      this.fetchResults(this.searchbox.nativeElement.value);
    } else {
      this.showRecent = true;
      this.search.getResults(this.source).subscribe(
        data => {
          this.searchResults = data.slice(0,5);
          //console.log(this.searchResults);
        }
      );
    }
  }

  fetchResults(value){
    this.showRecent = false;

    if(value != ""){
      this.search.getResults(this.source).subscribe(
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
    setTimeout(() => {
      this.showRecent = false;
      this.searchResults = [];
    }, 100);
  }

}
