import { Injectable } from '@angular/core';
import * as data from '../db.json';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor() {}

  getData() {
    return data.default;
  }

  getProductsByCatLink(cat_link: string) {
    let products: Array<any> = [];
    this.getData().products.forEach((_product: { clink: string }) => {
      if (_product.clink === cat_link) products.push(_product);
    });
    return products;
  }

  getProductByLink(p_link: string) {
    let found;
    this.getData().products.forEach((product: { link: string }) => {
      if (product.link == p_link) {
        found = product;
      }
    });
    return found;
  }

  getCategoryLinkById(cat_id: string) {
    let link;
    if (cat_id) {
      this.getData().categories.forEach((_cat: { cid: string; link: any }) => {
        if (_cat.cid === cat_id) {
          link = _cat.link;
        }
      });
    }
    return link;
  }

  getBrandLinkById(brand_id: string) {
    let link;
    if (brand_id) {
      this.getData().brands.forEach((_brand: { bid: string; link: any }) => {
        if (_brand.bid === brand_id) {
          link = _brand.link;
        }
      });
    }
    return link;
  }
}
