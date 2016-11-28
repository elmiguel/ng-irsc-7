import { Component, OnInit } from '@angular/core'
import { Animations }  from './animations'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  host: { '[@routeAnimation]': 'true' },
  animations: Animations.page,
  providers: [Animations]
})
export class PageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
