import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Posts } from 'src/app/interfaces/posts';
import { NavbarService } from 'src/app/services/navbar.service';
import { FooterService } from 'src/app/services/footer.service';
import { TypewriterService } from 'src/app/services/typewriter.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  typedText$:any;
  titles: string[] = [
    'Is a strong believer in easy to read, well written code. '
  ];
  subtitle: string = "I'm a full-stack software engineer solving problems with code right outside the city of Philadelphia, PA."
  public posts: Posts[] = [];
  public rendered: [] = [];

  constructor(
    private service: BlogService,
    public footer: FooterService,
    public nav: NavbarService,
    public typewriterService: TypewriterService
  ) {}

  ngOnInit(): void {
    this.nav.show();
    this.footer.show();

    this.typedText$ = this.typewriterService.getTypewriterEffect(this.titles).pipe(map((text:string) => text.toUpperCase()));

    this.service.getAllPosts().subscribe((data: any) => {
      //console.log(data);

      data.forEach((element: any) => {
        this.rendered = element.excerpt.rendered.replace(/(<([^>]+)>)/ig,"");

      });

      this.posts = data;
    });

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
