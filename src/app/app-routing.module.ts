import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UploadNewComponent } from './upload-new/upload-new.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllPeopleComponent } from './dashboard/all-people/all-people.component';
import { DetailPeopleComponent } from './dashboard/detail-people/detail-people.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "search", component: SearchComponent },
  { path: "detail/:iduser", component: DetailComponent },
  { path: "upload", component: UploadNewComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "dashboard", component: DashboardComponent, children: [
    { path: "", redirectTo: "all", pathMatch: "full" },
    { path: "all", component: AllPeopleComponent },
    { path: "detail/:id", component: DetailPeopleComponent },
  ]},
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
