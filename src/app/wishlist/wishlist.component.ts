import { Component, OnInit } from '@angular/core';
import { CustomService } from '@app/custom.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishListComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    public service: CustomService
  ) {}

  ngOnInit() {}
  get username(): string | null {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/shop'], { replaceUrl: false }));
  }
}
