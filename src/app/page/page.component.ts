import { Component, OnInit } from '@angular/core'
import {Animations} from './animations'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  host: { '[@routeAnimation]': 'true' },
  animations: Animations.page
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
