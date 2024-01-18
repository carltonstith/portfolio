import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { FooterService } from 'src/app/services/footer.service';
//import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  title: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'Angular',
    'React',
    'SQL',
    'C#',
    '.NET',
    'Ionic'
  ];
  constructor(
    public footer: FooterService,
    public nav: NavbarService
  ) {}

  ngOnInit(): void {
    // AOS.init();

    // this.nav.show();
    // this.footer.show();

    // var index = 0;
    // var interval = setInterval(() => {
    //   if (index === this.title.length) {
    //     index = 0;
    //   }
    //   this.title = this.title
    //     .slice(index, index + 1)
    //     .concat(this.title.slice(0, index))
    //     .concat(this.title.slice(index + 1));
    //   index++;
    // }, 3000);
  }

}
