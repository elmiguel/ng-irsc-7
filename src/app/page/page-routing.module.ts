import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router'

import { GetStartedModule } from './get-started/get-started.module'
import { PageComponent } from './page.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { SearchResultsComponent } from './search-results/search-results.component'

// import { PageService } from '../services/page.service'

@NgModule({
  imports: [
    CommonModule,
    GetStartedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageComponent,
        children: [
          { path: '', component: HomeComponent },
          { path: 'home', component: HomeComponent },
          { path: 'about', component: AboutComponent },
          { path: 'search', component: SearchResultsComponent },
          { path: '**', component: PageNotFoundComponent },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],

})

export class PageRoutingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PageRoutingModule,
      providers: [
        // PageService,
      ]
    };
  }

}
