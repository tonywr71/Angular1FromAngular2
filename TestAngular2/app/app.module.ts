import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';
import { ng2AppComponent } from "./ng2.app.component";
import { AppComponent } from "./app.component";
import { Phone } from "./core/phone/phone.service";
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { CheckmarkPipe } from "./core/checkmark/checkmark.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent, PhoneListComponent, PhoneDetailComponent, CheckmarkPipe, ng2AppComponent],
  bootstrap: [ng2AppComponent],
  providers: [ Phone ]
})
export class AppModule { }

