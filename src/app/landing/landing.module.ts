import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [HomeComponent, AssignmentComponent]
})
export class LandingModule { }
