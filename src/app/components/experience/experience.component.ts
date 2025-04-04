import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
declare var $: any;
import { NavbarService } from '../../services/navbar.service';
import { FooterService } from '../../services/footer.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css'],
    standalone: false
})
export class ExperienceComponent implements OnInit {
  public title: string = 'Experience';
  public firstName: string = 'Carlton';
  public lastName: string = 'Stith';
  public address: string = 'Cheltenham, PA 19012 · (215) 896-4556 ·';
  public email: string = 'carlton215@gmail.com';
  public aboutMe: string =
    'Experienced Full-Stack Software Engineer seeking to work in an Agile Scrum environment with an awesome team making valuable things. ';
  public experience = [
    // {
    //   position: 'Freelance Web Designer',
    //   company: 'CeeJayS Media',
    //   description:
    //     'Freelance web design services. Web content creation from wireframe to deployment. Graphic design services.',
    //   startDate: 'November 2013',
    //   endDate: 'Present',
    // },
    {
      position: 'Application Developer 2',
      company: 'The Commonwealth of Pennsylvania - PA State Police',
      description:
        'Proficient full-stack Microsoft stack development, maintenance, and debugging of numerous .NET Framework enterprise software applications hosted in Microsoft Azure. Application development of new features using Visual Basic and SQL Server stored procedures. Web Forms and WCF application maintenance. Azure DevOps version control.',
      startDate: 'February 2024',
      endDate: 'Present',
    },
    {
      position: 'Full Stack Developer',
      company: 'New Ocean Health Solutions',
      description:
        'Successful front-end UI conversion to Ionic 6, maintenance, and debugging of an Ionic Angular enterprise software application hosted in Microsoft Azure. Application development of new features using SQL Server stored procedures. Created a cohesive modern mobile application UI in a Scrum Agile environment. CI/CD pipelines and Git version control.',
      startDate: 'February 2023',
      endDate: 'September 2023',
    },
    {
      position: 'Software Developer',
      company: 'Alarm Connections',
      description:
        'Full-stack development, maintenance, and debugging of a .NET Core 3.1 enterprise software application hosted in Microsoft Azure using Software Development Lifecycle principles. Application development using SQL Server tables and stored procedures. REST API development using .NET Core Web API to query a SQL Server database. Javascript, Kendo UI, and Angular used to create a modern UI in a Scrum Agile environment. Git version control and updates using Azure Repos.',
      startDate: 'June 2020',
      endDate: 'November 2022',
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
    // {
    //   position: 'Income Maintenance Caseworker',
    //   company: 'Commonwealth of PA',
    //   description: 'Interviewed people applying for public assistance programs. Helped clients identify and remove barriers to financial self-sufficiency, determine the programs for which applicants qualify and make referrals for service.',
    //   startDate: 'April 2010',
    //   endDate: 'November 2015'
    // }
  ];
  public volunteer = [
    {
      position: 'Volunteer Web Developer',
      company: 'CeeJayS Media',
      description: 'Developed and maintained a WordPress website for a local non-profit organization.',
      startDate: 'November 2013',
      endDate: 'Present'
    },
    {
      position: 'Barcamp Philly Volunteer',
      company: 'Barcamp Philly',
      description: 'Volunteered at Barcamp Philly 2019. Helped with setup and breakdown of the event.',
      startDate: 'November 2014'
    },
    {
      position: 'Barcamp Philly Volunteer',
      company: 'Barcamp Philly',
      description: 'Volunteered at Barcamp Philly 2019. Helped with setup and breakdown of the event.',
      startDate: 'November 2015'
    },
    {
      position: 'Barcamp Philly Volunteer',
      company: 'Barcamp Philly',
      description: 'Volunteered at Barcamp Philly 2019. Helped with setup and breakdown of the event.',
      startDate: 'November 2018'
    },
    {
      position: 'Barcamp Philly Volunteer',
      company: 'Barcamp Philly',
      description: 'Volunteered at Barcamp Philly 2019. Helped with setup and breakdown of the event.',
      startDate: 'November 2019'
    },
    {
      position: 'Barcamp Philly Volunteer',
      company: 'Barcamp Philly',
      description: 'Volunteered at Barcamp Philly 2019. Helped with setup and breakdown of the event.',
      startDate: 'November 2023'
    },
    {
      position: 'Barcamp Philly Volunteer',
      company: 'Barcamp Philly',
      description: 'Volunteered at Barcamp Philly 2019. Helped with setup and breakdown of the event.',
      startDate: 'November 2024'
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
