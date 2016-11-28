import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate} from '@angular/core'

import { ScrollimateService } from 'ng2-scrollimate'

let elementTriggerDefault = [
  state('inactive', style({
    opacity: '0',
    transform: 'translateY(20%)'
  })),
  state('active', style({
    opacity: '1',
    transform: 'translateY(0%)'
  })),
  transition('* => active', [
    animate('500ms ease-in')
  ]),
  transition('* => inactive', [
    animate('500ms ease-out')
  ]),
]

let animationDefault = {
    currentState: "inactive", //currentState is required
    states: [
        {
            method: "percentTotal", //this will be true when x% or more of the page has been scrolled in total
            value: 2,
            state: "active",
        },
        {
            method: "default",
            state: "inactive",
        }
    ]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('toTopState', elementTriggerDefault),
  ]
})

export class AppComponent implements OnInit {
  scrollimateOptions: any = {
    toTop: Object.assign({},animationDefault),
  }
  constructor(){}

  ngOnInit(){}
}
