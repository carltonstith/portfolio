import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
declare var $: any;
import { NavbarService } from '../../services/navbar.service';
import { FooterService } from '../../services/footer.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  public title: string = 'Experience';
  public name: string = 'CARLTON';
  public surname: string = 'STITH';
  public address: string = 'Cheltenham, PA 19012 · (215) 896-4556 ·';
  public email: string = 'stith@temple.edu';
  public aboutMe: string =
    'Experienced Full-Stack Software Engineer seeking to work in an Agile Scrum environment with an awesome team making valuable things. ';
  public experience = [
    {
      position: 'Freelance Web Designer',
      company: 'CeeJayS Media',
      description:
        'Freelance web design services. Web content creation from wireframe to deployment. Graphic design services.',
      startDate: 'November 2013',
      endDate: 'Present',
    },
    {
      position: 'Application Developer',
      company: 'Dossier Systems, Inc',
      description: 'Contributed to the front-end development of a .NET based business software application querying a REST API using Javascript and Vue Kendo UI in an Agile environment. Provide updates using Git.',
      startDate: 'May 2018',
      endDate: 'October 2019'
    },
    {
      position: 'Junior Web Developer',
      company: 'NextGen Healthcare',
      description: 'Contributed to the development of .NET client web applications in an Agile environment. Provide updates to company WordPress websites. HTML email creation and maintenance. Collaborate with coworkers in an Agile environment using Perforce (version control system).',
      startDate: 'November 2015',
      endDate: 'April 2018'
    },
    {
      position: 'Income Maintenance Caseworker',
      company: 'Commonwealth of PA',
      description: 'Interviewed people applying for public assistance programs. Helped clients identify and remove barriers to financial self-sufficiency, determine the programs for which applicants qualify and make referrals for service.',
      startDate: 'April 2010',
      endDate: 'November 2015'
    }
  ];

  constructor(public nav: NavbarService, public footer: FooterService, private scroller: ViewportScroller) {}

  ngOnInit(): void {
    this.nav.hide();
    this.footer.hide();
  }

  goToAboutSection() {
    this.scroller.scrollToAnchor("about");
  }

  goToExperienceSection() {
    this.scroller.scrollToAnchor("experience");
  }

  goToEductionSection() {
    this.scroller.scrollToAnchor("education");
  }

  goToSkillsSection() {
    this.scroller.scrollToAnchor("skills");
  }

  goToVolunteerSection() {
    this.scroller.scrollToAnchor("volunteer")
  }
}
