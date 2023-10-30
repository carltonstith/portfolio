import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Posts } from 'src/app/interfaces/posts';
import { NavbarService } from 'src/app/services/navbar.service';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  title: string[] = [
    'Well Written Code, ',
    'Beautiful Design, ',
    'Good Typography, ',
    'Cool Technology, ',
    'Fast Cars',
  ];
  public posts: Posts[] = [];
  public rendered: [] = [];

  constructor(
    private service: BlogService,
    public footer: FooterService,
    public nav: NavbarService
  ) {}

  ngOnInit(): void {
    this.nav.show();
    this.footer.show();

    this.service.getAllPosts().subscribe((data: any) => {
      //console.log(data);

      // data.forEach((element: any) => {
      //   this.rendered = element.excerpt.rendered.replace(/(<([^>]+)>)/ig,"");

      // });

      this.posts = data;
    });

    var index = 0;
    var interval = setInterval(() => {
      if (index === this.title.length) {
        index = 0;
      }
      this.title = this.title
        .slice(index, index + 1)
        .concat(this.title.slice(0, index))
        .concat(this.title.slice(index + 1));
      index++;
    }, 3000);
  }
}
