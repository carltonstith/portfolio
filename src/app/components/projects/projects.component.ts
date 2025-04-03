import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { FooterService } from 'src/app/services/footer.service';
import { TypewriterService } from 'src/app/services/typewriter.service';
import { map } from 'rxjs';
//import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  typedText$:any;
  titles: string[] = [
    'is a full-stack software engineer solving problems with code.',
    // 'CSS',
    // 'JavaScript',
    // 'Angular',
    // 'React',
    // 'SQL',
    // 'C#',
    // '.NET',
    // 'Ionic'
  ];
  constructor(
    public footer: FooterService,
    public nav: NavbarService,
    public typewriterService: TypewriterService
  ) {}

  ngOnInit(): void {
    this.typedText$ = this.typewriterService.getTypewriterEffect(this.titles).pipe(map((text:string) => text.toUpperCase()));
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
