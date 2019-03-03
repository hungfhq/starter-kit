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

  constructor(private route: ActivatedRoute, private service: GetDataService) {}

  ngOnInit() {
    // console.log(this.getProducts());
    this.route.paramMap.subscribe(para => {
      this.link = para.get('category');
    });
  }
  getProducts() {
    return this.service.getData().find(data => data.link === this.link);
  }
}
