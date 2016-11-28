import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Ng2PageScrollModule } from 'ng2-page-scroll'
import { Ng2ScrollimateModule } from 'ng2-scrollimate'
import { Counto } from 'angular2-counto/angular2-counto'


import { GetStartedModule } from './get-started/get-started.module'
import { PageRoutingModule } from './page-routing.module'
import { DynamicModule } from './dynamic/dynamic.module'

import { PageComponent } from './page.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { SearchResultsComponent } from './search-results/search-results.component'
import { CardModule } from '../components/card/card.module'
import { GalleryModule } from '../components/gallery/gallery.module'

const COMPONENTS = [
  PageComponent,
  HomeComponent,
  AboutComponent,
  SearchResultsComponent,
  PageNotFoundComponent,
  Counto
]

@NgModule({
  imports: [
    CommonModule,
    Ng2PageScrollModule,
    Ng2ScrollimateModule,
    PageRoutingModule,
    GetStartedModule,
    DynamicModule,
    CardModule.forRoot(),
    GalleryModule.forRoot(),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class PageModule {}
