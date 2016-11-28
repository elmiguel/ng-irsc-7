import { Component, OnInit} from '@angular/core'
import { PageScrollConfig, EasingLogic } from 'ng2-page-scroll/src/ng2-page-scroll-config'
import { SearchService } from '../services/search.service'
import { SearchResultsComponent } from '../page/search-results/search-results.component'
import { Router } from '@angular/router'
import { Cookie } from 'ng2-cookies'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // @Inject(forwardRef(() => SearchResultsComponent))
  searchResultsComponent: SearchResultsComponent

  constructor(
    private searchService: SearchService,
    private router: Router){
    PageScrollConfig.defaultScrollOffset = 50
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
          // easeInOutExpo easing
          if (t === 0) return b
          if (t === d) return b + c
          if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b
          return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
      }
    }
  }

  ngOnInit(){}

  search(value:string) {
    this.searchService
        .search(value)
        .subscribe(
          results => this.searchResultsComponent.searchResults$ = results,
          error => console.log('Subscribe Error')
        )
  }

}
