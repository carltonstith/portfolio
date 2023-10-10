import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { FooterService } from '../../services/footer.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  constructor(public nav: NavbarService, public footer: FooterService){}

  ngOnInit() {
    AOS.init();

    this.nav.show();
    this.footer.show();
  }
}
