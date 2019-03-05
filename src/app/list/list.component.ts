import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public link: any;

  constructor(private route: ActivatedRoute, public service: GetDataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      this.link = para.get('category');
    });
  }
}
