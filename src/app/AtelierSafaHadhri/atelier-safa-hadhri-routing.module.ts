import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSafaHadhriComponent } from './List_SafaHadhri/list-safa-hadhri.component';
import { AddSafaHadhriComponent } from './Add_SafaHadhri/add-safa-hadhri.component';
import { DetailsSafaHadhriComponent } from './Details_SafaHadhri/details-safa-hadhri.component';
import { UpdateSafaHadhriComponent } from './Update_SafaHadhri/update-safa-hadhri.component';
import { DeleteSafaHadhriComponent } from './Delete_SafaHadhri/delete-safa-hadhri.component';

const routes: Routes = [
  { path: 'list', component: ListSafaHadhriComponent },
  { path: 'add', component: AddSafaHadhriComponent },
  { path: 'details/:id', component: DetailsSafaHadhriComponent },
  { path: 'update/:id', component: UpdateSafaHadhriComponent },
  { path: 'delete/:id', component: DeleteSafaHadhriComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtelierSafaHadhriRoutingModule { }
