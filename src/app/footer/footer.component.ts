import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  college = 'Indian River State College'
  copyright = `${this.college} ${new Date().getFullYear()}`

  constructor() { }

  ngOnInit() {
  }

}
