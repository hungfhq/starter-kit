import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../get-data.service';

import { Logger } from 'app/core/logger.service';

const log = new Logger('DetailComponent');

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private link: any;

  constructor(private route: ActivatedRoute, public service: GetDataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      this.link = para.get('link');
    });
    console.log(this.service.getProductByLink(this.link));
  }

  getProduct() {
    return this.service.getProductByLink(this.link);
  }
}
