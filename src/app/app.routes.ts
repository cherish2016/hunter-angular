import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./hunter/login/login.component";
import {HunterComponent} from "./hunter/hunter.component";
import {CompanyComponent} from "./hunter/company/company.component";
import {ComsumeComponent} from "./hunter/comsume/comsume.component";
import {AssignComponent} from "./hunter/assign/assign.component";
import {SettingComponent} from "./hunter/setting/setting.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'hunter-index', component: HunterComponent},
  {path: 'companyList', component: CompanyComponent},
  {path: 'consumeList', component: ComsumeComponent},
  {path: 'jobAssign', component: AssignComponent},
  {path: 'setting', component: SettingComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
