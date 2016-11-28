import { Component, OnInit } from '@angular/core'
import { Animations } from '../animations'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: { '[@routeAnimation]': 'true' },
  animations: Animations.page
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
