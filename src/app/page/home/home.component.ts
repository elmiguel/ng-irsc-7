import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate} from '@angular/core'
import { ScrollimateService } from 'ng2-scrollimate'
import { Animations } from '../animations'

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
            method: "percentElement", //this will be true when x% or more of the element are currently in the viewport
            value: 25,
            state: "active",
        },
        {
            method: "default",
            state: "inactive",
        }
    ]
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { '[@routeAnimation]': 'true' },
  animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
      ]),
      transition('* => void',
        animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)', style({
          transform: 'translateX(100%)',
          opacity: 0
        }))
      )
    ]),
    trigger('factsState', elementTriggerDefault),
    trigger('stepsState', elementTriggerDefault),
    trigger('galleryState', elementTriggerDefault),
  ],
  providers: [ScrollimateService]
})

export class HomeComponent implements OnInit {
  scrollimateOptions: any = {
    facts: Object.assign({},animationDefault),
    steps: Object.assign({},animationDefault),
    gallery: Object.assign({},animationDefault),
  }

  constructor() {}

  ngOnInit() {}
}
