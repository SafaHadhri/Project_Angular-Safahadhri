import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtelierSafaHadhriRoutingModule } from './atelier-safa-hadhri-routing.module';
import { ListSafaHadhriComponent } from './List_SafaHadhri/list-safa-hadhri.component';
import { AddSafaHadhriComponent } from './Add_SafaHadhri/add-safa-hadhri.component';
import { DetailsSafaHadhriComponent } from './Details_SafaHadhri/details-safa-hadhri.component';
import { UpdateSafaHadhriComponent } from './Update_SafaHadhri/update-safa-hadhri.component';
import { DeleteSafaHadhriComponent } from './Delete_SafaHadhri/delete-safa-hadhri.component';

@NgModule({
  declarations: [
    ListSafaHadhriComponent,
    AddSafaHadhriComponent,
    DetailsSafaHadhriComponent,
    UpdateSafaHadhriComponent,
    DeleteSafaHadhriComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AtelierSafaHadhriRoutingModule
  ]
})
export class AtelierSafaHadhriModule { }
