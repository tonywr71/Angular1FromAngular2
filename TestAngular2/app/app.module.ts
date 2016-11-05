import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { Phone } from "./core/phone/phone.service";

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent ],
  bootstrap: [AppComponent],
  providers: [ Phone ]
})
export class AppModule { }

