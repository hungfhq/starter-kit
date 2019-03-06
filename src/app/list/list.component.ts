import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomService } from '../custom.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  categoryLink: any;
  found: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public service: CustomService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(para => {
      this.categoryLink = para.get('category');
      this.found = this.service
        .getData()
        .categories.find((data: { link: any }) => this.categoryLink.includes(data.link));
      // if(this.found.hasOwnProperty('link'))
      //   this.router.navigate(['/shop', this.found.link])
      // else
      //   this.router.navigate(['/shop'])
    });
    !this.found ? this.router.navigate(['/shop']) : this.router.navigate(['/shop', this.found.link]);
  }
}
