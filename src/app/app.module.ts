import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CsvUploadPageModule } from './csvuploadpage'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CsvUploadPageModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
