import { Component, OnInit } from '@angular/core';
import { CustomService } from '@app/custom.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishListComponent implements OnInit {
  constructor(public service: CustomService) {}

  ngOnInit() {}
}
