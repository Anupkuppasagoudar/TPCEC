import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Remove AppComponent from here
  ],
  imports: [
    BrowserModule,
    AppComponent // Move it here because Standalone components act like modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
