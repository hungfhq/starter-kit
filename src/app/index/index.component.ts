import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReaddataService } from '../readdata.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  items: Observable<any>;
  constructor(private readdata: ReaddataService) {
    this.items = readdata.readData('categories');
  }

  ngOnInit() {}
}
