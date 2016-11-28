import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { URLSearchParams, Jsonp, Response } from '@angular/http'
import { Cookie } from 'ng2-cookies'

import { Observable,ReplaySubject } from 'rxjs/Rx'

import { WikiData } from './wiki-data'
import { Location } from '@angular/common';
import { SearchResult } from './search-result'

import { RESULTS } from './mock-results'

@Injectable()
export class SearchService {
  private url: string = 'https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK'
  public results: ReplaySubject<any> = new ReplaySubject(1);

  public searchActive: boolean = false;

  constructor(
    private jsonp: Jsonp,
    private location: Location,
    private router: Router
  ) {
    this.location = location
  }

  getResults(){
      return this.results
  }

  search(term: string) {
    if(this.router.url != '/search'){
      this.searchActive = true
      Cookie.set('irsc-search', term)
      Cookie.set('irsc-search-active', 'true')

      this.router.navigateByUrl('/search')
    } else if(term.length == 0 && this.router.url == '/search') {
      this.searchActive = false
      Cookie.set('irsc-search-active', 'false')
      this.location.back()
    }
    // not sure if this is needed, leave for now
    this.searchActive = true
    Cookie.set('irsc-search', term)
    Cookie.set('irsc-search-active', 'true')


    let search = new URLSearchParams()
    search.set('action', 'opensearch')
    // search.set('search', term)
    search.set('search', Cookie.get('irsc-search'))
    search.set('format', 'json')


    return this.jsonp
               .get(this.url, { search })
               .map((res:any) => {
                 if (res.json()[0] != "" && res.json()[1] != null){
                   let wikiData: Array<WikiData> = []
                   let tags: string[] = res.json()[1]
                   let content: string[] = res.json()[2]
                   let links: string[] = res.json()[3]
                   for(let i = 0; i < tags.length -1; i++){
                     let wd = new WikiData()
                     wd.tag = tags[i]
                     wd.content = content[i]
                     wd.link = links[i]
                     wikiData.push(wd)
                   }
                   this.results.next(wikiData)
                   return wikiData
                 } else {
                   this.results.next([])
                   return []
                 }
               })
               .catch((error: Response) => {
                 console.log(error)
                 return Observable.throw("500 internal server error");
               })

    // return this.jsonp
    //            .get(this.url, { search })
    //            .map((res:any) => {
    //              if (res.json()[0] != "" && res.json()[1] != null){
    //                let wikiData: Array<WikiData> = []
    //                let tags: string[] = res.json()[1]
    //                let content: string[] = res.json()[2]
    //                let links: string[] = res.json()[3]
    //                for(let i = 0; i < tags.length -1; i++){
    //                  let wd = new WikiData()
    //                  wd.tag = tags[i]
    //                  wd.content = content[i]
    //                  wd.link = links[i]
    //                  wikiData.push(wd)
    //                }
    //                this.results.next(wikiData)
    //                return wikiData
    //              } else {
    //                this.results.next([])
    //                return []
    //              }
    //            })
    //            .catch((error: Response) => {
    //              console.log(error)
    //              return Observable.throw("500 internal server error");
    //            })
  }

}
