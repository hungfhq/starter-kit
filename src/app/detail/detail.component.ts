import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomService } from '../custom.service';

import { Logger } from 'app/core/logger.service';

const log = new Logger('DetailComponent');

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  link: any;
  found: any;
  category: any;
  brand: any;
  isActive: boolean;

  constructor(private route: ActivatedRoute, private router: Router, public service: CustomService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      this.category = para.get('category');
      this.brand = para.get('brand');
      this.link = para.get('link');
    });
    console.log(
      this.service.isCategoryExisted(this.category),
      this.service.isBrandExisted(this.brand),
      this.service.isLinkExisted(this.link)
    );
    this.found = this.service.getData().products.find((data: { link: any }) => this.link.includes(data.link));
    this.service.isCategoryExisted(this.category) &&
    this.service.isBrandExisted(this.brand) &&
    this.service.isLinkExisted(this.link)
      ? this.router.navigate(['/shop', this.found.clink, this.found.blink, this.found.link])
      : this.router.navigate(['/pagenotfound']);
  }
}
