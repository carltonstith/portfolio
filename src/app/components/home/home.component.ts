import { Component, OnInit } from '@angular/core';
declare var $: any;
import { NavbarService } from '../../services/navbar.service';
import { FooterService } from '../../services/footer.service';
import { TypewriterService } from 'src/app/services/typewriter.service';
import { map } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {
  typedText$:any;
  name: string = 'Carlton Stith';
  titles: string[] = [
    'Full-Stack Software Engineer',
    ' Problem Solver',
    ' Tinkerer',
    ' Tech Enthusiast',
    ' Family Man',
  ];
  subtitle: string =
    'Solving software problems, building sophisticated applications, and creating things for the web several minutes outside of Philadelphia, PA.';
  isJqueryWorking: any;

  constructor(
    public nav: NavbarService,
    public footer: FooterService,
    public typewriterService: TypewriterService
  ) {}

  ngOnInit() {

    this.nav.show();
    this.footer.show();

    this.typedText$ = this.typewriterService.getTypewriterEffect(this.titles).pipe(map((text:string) => text.toUpperCase()));

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

    $(document).ready(() => {
      this.isJqueryWorking = 'Jquery is working !!!';
      // console.log(this.isJqueryWorking);
    });
  }
}
