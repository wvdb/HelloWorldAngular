import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CsvFileService } from '../services';
import { CsvUploadPageComponent as CsvUploadPageComponent } from './csv-upload-page.component';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [
    CsvUploadPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputSwitchModule,
    FileUploadModule
  ],
  entryComponents: [
    CsvUploadPageComponent
  ],
  providers: [
    CsvFileService
  ],
  exports: [
    CsvUploadPageComponent
  ]
})

export class CsvUploadPageModule {
}
