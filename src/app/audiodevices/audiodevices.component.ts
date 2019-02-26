import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReaddataService } from '../readdata.service';

@Component({
  selector: 'app-audiodevices',
  templateUrl: './audiodevices.component.html',
  styleUrls: ['./audiodevices.component.scss']
})
export class AudiodevicesComponent implements OnInit {
  items: Observable<any>;
  constructor(private readdata: ReaddataService) {
    this.items = readdata.readData('products');
  }

  ngOnInit() {}
}
