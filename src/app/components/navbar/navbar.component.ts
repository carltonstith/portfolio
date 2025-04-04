import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: false
})
export class NavbarComponent {

    constructor(public nav: NavbarService) { }

}
