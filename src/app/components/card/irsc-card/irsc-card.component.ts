import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'irsc-card',
  templateUrl: './irsc-card.component.html',
  styleUrls: ['./irsc-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IrscCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
