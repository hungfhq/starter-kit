import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  version: string = environment.version;

  product_name: string = 'A';
  constructor() {
    console.log('AboutComponent is constructing');
  }

  ngOnInit() {
    console.log('AboutComponent is initing');
  }

  ngAfterViewInit() {
    console.log('AboutComponent after view init');
  }

  ngAfterContentInit() {
    console.log('AboutComponent after content init');
  }

  ngOnDestroy() {
    console.log('AboutComponent is destroying');
  }

  changeValue() {
    this.product_name += 'A';
    console.log(this.product_name);
  }

  toggle(text: string) {
    console.log('Toggled');
    console.log(text);
  }
}
