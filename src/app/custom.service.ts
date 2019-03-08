import { Injectable } from '@angular/core';
import * as data from '../db.json';

@Injectable({
  providedIn: 'root'
})
export class CustomService {
  getWishlist: any;
  constructor() {
    this.getWishlist = this.getData().wishlist.map(s => this.getData().products.find(x => x.id == s.id));
  }
  // get data from db file
  getData() {
    return data.default;
  }

  // get products by category
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

  addItemToWishlist(product: any) {
    this.getWishlist.push(product);
  }

  removeItemOutOfWishlist(productId: string) {
    this.getWishlist.splice(this.getWishlist.indexOf(productId), 1);
  }

  isExistedInWishlist(productId: string) {
    return this.getWishlist.find(x => x.id === productId) ? true : false;
  }

  getProductById(productId?: string) {
    return this.getData()
      .products.map(p => p)
      .find((x: { id: string }) => x.id === productId);
  }

  // contain = (searchStr: string, str: string) => {
  //   return new RegExp(searchStr).test(str);
  // };

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
