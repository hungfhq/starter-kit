import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as data from '../db.json';

@Injectable({
  providedIn: 'root'
})
export class CustomService {
  constructor(private router: Router) {}

  getData() {
    return data.default;
  }

  getProductsByCatLink = (categoryLink: string) => {
    let products: Array<any> = [];
    this.getData().products.forEach((product: { clink: string }) => {
      if (product.clink === categoryLink) products.push(product);
    });
    return products;
  };

  getProductByLink = (productLink: string) => {
    let found;
    this.getData().products.forEach((product: { link: string }) => {
      if (product.link === productLink) found = product;
    });
    return found;
  };

  contain = (searchStr: string, str: string) => {
    return new RegExp(searchStr).test(str);
  };

  isLinkExisted = (link?: string) => {
    let existed;
    existed = this.getData().products.find((p: { link: string }) => link.includes(p.link));
    return existed ? true : false;
  };

  isCategoryExisted = (categoryLink?: string) => {
    let existed;
    existed = this.getData().products.find((p: { clink: string }) => categoryLink.includes(p.clink));
    return existed ? true : false;
  };

  isBrandExisted = (brandLink?: string) => {
    let existed;
    existed = this.getData().products.find((p: { blink: string }) => brandLink.includes(p.blink));
    return existed ? true : false;
  };
}
