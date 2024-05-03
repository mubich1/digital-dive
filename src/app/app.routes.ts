import { Routes } from '@angular/router';
import { InfoListComponent } from './info-list/info-list.component';
import { AddEditInfoComponent } from './add-edit-info/add-edit-info.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "info-list",
    pathMatch: "full",

  },
  {
    path: "info-list",
    component: InfoListComponent
  },
  {
    path: "add-info",
    component: AddEditInfoComponent
  },
  {
    path: "add-info/:id",
    component: AddEditInfoComponent
  }

];
