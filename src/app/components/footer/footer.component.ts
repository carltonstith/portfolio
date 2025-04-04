import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../services/footer.service';
declare var $: any;

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: false
})
export class FooterComponent implements OnInit {
  public currentYear: number;
  constructor(public footer: FooterService){
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {

  }

}
