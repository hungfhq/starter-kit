import { Component, OnInit } from '@angular/core';
import { CustomService } from '@app/custom.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  constructor(public service: CustomService) {}

  ngOnInit() {}
}
