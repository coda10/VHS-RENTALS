import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard.component';
import { RouterModule } from '@angular/router';
import { AdminlayoutModule } from 'src/app/adminlayout/adminlayout.module';
import { AdmincomponentsModule } from 'src/app/admincomponents/admincomponents.module';



@NgModule({
  declarations: [
    AdmindashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminlayoutModule,
    AdmincomponentsModule
  ]
})
export class AdmindashboardModule { }
