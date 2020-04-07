import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "./error/error.component";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationModule} from "./authentication/authentication.module";
import {MatTableModule} from "@angular/material/table";
import {SharedModule} from "./shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {DashboardModule} from "./dashboard/dashboard.module";
import { GroupModule } from './group/group.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    AuthenticationModule,
    DashboardModule,
    MatTableModule,
    SharedModule,
    MatButtonModule,
    GroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
