import { Component, OnInit, Input, forwardRef, Inject  } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs/Rx'
import { Animations } from '../animations';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from '../../services/search.service'
import { WikiData } from '../../services/wiki-data'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  host: { '[@routeAnimation]': 'true' },
  animations: Animations.page
})
export class SearchResultsComponent implements OnInit {
  // searchTerm: FormControl = new FormControl()
  searchTerm: string = ''
  showResults: boolean = false
  // searchResults$: Observable<Array<WikiData>>
  searchResults$: any

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute){ }

  ngOnInit() {
    this.searchResults$ = this.searchService.results
  }

  chunkResults(arr: any, size: number){
    var newArr = [];
    for (var i=0; i<arr.length; i+=size) {
      newArr.push(arr.slice(i, i+size));
    }
    return newArr;
  }
}
