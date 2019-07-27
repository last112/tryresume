import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper'; // for stepper of angular material
import {MatFormFieldModule, MatInputModule, MatTabsModule, MatListModule} from '@angular/material'; // angular material fields

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BuildResumeComponent } from './build-resume/build-resume.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResumeTemplateComponent } from './resume-template/resume-template.component';
import { CurrentOpeningsComponent } from './current-openings/current-openings.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: HomeComponent },
  { path: 'resumetemplate', component: ResumeTemplateComponent },
  { path: 'resumebuild', component: BuildResumeComponent },
  { path: 'openings', component: CurrentOpeningsComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    BuildResumeComponent,
    HomeComponent,
    NavbarComponent,
    ResumeTemplateComponent,
    CurrentOpeningsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    MatFormFieldModule,
    MatTabsModule // we need import and at the same time we need to export the same
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
