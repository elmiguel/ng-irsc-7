import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule }   from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule, JsonpModule } from '@angular/http'

import { Ng2PageScrollModule } from 'ng2-page-scroll'
import { Ng2ScrollimateModule } from 'ng2-scrollimate'

import { AppComponent } from './app.component'
import { NavComponent } from './nav/nav.component'
import { PageComponent } from './page/page.component'
import { FooterComponent } from './footer/footer.component'

import { PageModule } from './page/page.module'

import { PageService } from './services/page.service'
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    Ng2PageScrollModule,
    Ng2ScrollimateModule,
    PageModule,
    RouterModule.forRoot([
      { path: '', component: PageComponent }
    ])
  ],
  providers: [
    PageService,
    SearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
