import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { FooterService } from '../../services/footer.service';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css'],
    standalone: false
})
export class NotFoundComponent implements OnInit {
  constructor(public nav: NavbarService, public footer: FooterService){}

  ngOnInit() {

    this.nav.show();
    this.footer.show();
  }
}
