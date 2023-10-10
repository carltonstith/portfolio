import { Component, OnInit } from '@angular/core';
declare var $: any;
import { NavbarService } from '../../services/navbar.service';
import { FooterService } from '../../services/footer.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = "Carlton";
  title: string[] = [
    "Full-Stack Software Engineer",
    " Problem Solver",
    " Tinkerer",
    " Tech Enthusiast",
    " Family Man"
  ];
  subtitle: string = "Solving software problems, building websites, and applications several minutes outside of Philadelphia, PA.";
  isJqueryWorking: any;

  constructor(public nav: NavbarService, public footer: FooterService){}

  ngOnInit() {
    AOS.init();

    this.nav.show();
    this.footer.show();

    var index = 0;
    var interval = setInterval(() => {
      if (index === this.title.length) {
        index = 0;
      }
      this.title = this.title.slice(index, index + 1).concat(this.title.slice(0, index)).concat(this.title.slice(index + 1));
      index++;
    }, 3000);

    $(document).ready(() => {
      this.isJqueryWorking = 'Jquery is working !!!';
      console.log(this.isJqueryWorking);
  });
    // window.setInterval(() => {
    //   this.handleTitle();
    // }, 3000)
  }

  // handleTitle() {
  //   const setTitle = this.title.shift();
  //   this.title = this.title.concat(setTitle);
  // }
}
