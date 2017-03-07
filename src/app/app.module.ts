import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {AlertModule} from "ng2-bootstrap";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./hunter/login/login.component";
import {AppRoutingModule} from "./app.routes";
import {HunterComponent} from "./hunter/hunter.component";
import {CompanyComponent} from "./hunter/company/company.component";
import {ComsumeComponent} from "./hunter/comsume/comsume.component";
import {AssignComponent} from "./hunter/assign/assign.component";
import {SettingComponent} from "./hunter/setting/setting.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HunterComponent,
    CompanyComponent,
    ComsumeComponent,
    AssignComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
