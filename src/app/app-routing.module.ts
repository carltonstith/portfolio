import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResumeLayoutComponent } from './layouts/resume-layout/resume-layout.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path: 'about',
    component : AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
