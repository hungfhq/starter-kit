import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../get-data.service';
import { anyTypeAnnotation } from 'babel-types';

import { Logger } from 'app/core/logger.service';

const log = new Logger('DetailComponent');

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public link: any;
  public brand: any;
  category: any;
  dataServe: Array<any>;
  product: any;

  constructor(private route: ActivatedRoute, public service: GetDataService) {}

  ngOnInit() {
    console.log(this.service.getData());

    // get data from service
    this.dataServe = this.service.getData();
    log.debug(this.dataServe);

    // observe route change, if there is changes, load product from this data service match link
    this.route.paramMap.subscribe(para => {
      this.brand = para.get('brand');
      this.link = para.get('link');
      this.category = para.get('category');

      log.debug(this.link);

      // this.getProductByLink(this.link, this.dataServe);

      log.debug(this.product);

      this.product = this.service
        .getData()
        .find(x => x.link == this.category)
        .brand.find(s => s.link == this.brand)
        .products.find(z => z.link == this.link);
      console.log(this.dataServe);
    });
  }

  getProducts() {
    return this.service.getData().find(data => data.brand == this.brand);
  }

  getProduct() {
    // return this.getProducts().find(this.link);
  }

  getProductByLink(link: string, data: any) {
    // log.debug(data);
    if (data) {
      data.forEach(category => {
        // log.debug(category);
        if (category) {
          let brand = category.brand;
          if (brand) {
            brand.forEach(brandItem => {
              // log.debug(branditem);
              let products = brandItem.products;
              if (products) {
                products.forEach(product => {
                  // log.debug(product);
                  if (product.link == link) {
                    // return product;
                    log.debug('found');
                    this.product = product;
                  }
                });
              }
            });
          }
        }
      });
    }
  }
}
