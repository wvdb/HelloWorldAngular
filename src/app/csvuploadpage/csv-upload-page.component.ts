import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectorRef, ViewChild, AfterViewChecked } from '@angular/core';
import { FileType } from '../models';
import { CsvFileService } from '../services';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'mde-csv-upload-page',
  templateUrl: './csv-upload-page.component.html',
})

export class CsvUploadPageComponent implements OnInit {
  csvFileUploadForm: FormGroup;
  title: string;

  // default to 50MB - actual value should be retrieved from MS-backend 
  maxUploadSize: number = 1024 * 1024 * 50;
  maxUploadSizeInMb: number;

  timeSpinners: boolean;
  fileTypes: Array<FileType>;
  state: string = 'CANCEL';

  @Output() onUpload: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('csvFileUpload')
  private csvFileUpload: FileUpload;

  constructor(
              // private csvFileService: CsvFileService,
              private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.fileTypes = new Array<FileType>();
    this.timeSpinners = false;
    this.title = 'Upload CSV-file';
    this.setup();
  }

  private setup(): void {
    this.fileTypes.push({ id: 1, name: 'RECOMMENDATIONS_V1'});
    this.fileTypes.push({ id: 2, name: 'ZIP_CODE'});
    this.buildCsvUploadForm();
  }

  private buildCsvUploadForm(): void {
    this.csvFileUploadForm = this.formBuilder.group({
      fileType: [undefined, [Validators.required]],
      validate: [true, Validators.required],
      header: [true, Validators.required],
      separator: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]]
    });
  }

  csvFileUploader($event: any): void {
    this.csvUpload($event.files, this.csvFileUpload, this.onUpload);
  }

  isFileUploadAllowed(): boolean {
    return this.separator.value && this.fileType.value;
  }

  get separator(): AbstractControl {
    return this.csvFileUploadForm.get('separator');
  }

  get fileType(): AbstractControl {
    return this.csvFileUploadForm.get('fileType');
  }

  compareFileType(fileType1: FileType, fileType2: FileType): boolean {
    return fileType1 && fileType2 ? fileType1.id === fileType2.id : fileType1 === fileType2;
  }

  private csvUpload(files: any, fileUpload: FileUpload, onUpload: EventEmitter<boolean>) {
    this.timeSpinners = false;

    let seperator: string = this.separator.value;
    let fileTypeName: string = this.fileType.value.name;
    console.log('fileTypeName = ' + fileTypeName);
    let validate: boolean = this.csvFileUploadForm.get('validate').value;
    let header: boolean = this.csvFileUploadForm.get('header').value;
    let summary: string = validate ? 'Validation completed' : 'Upload started'; 

    if (files != undefined && files.length > 0) {
      for (let file of files) {
        onUpload.emit(true);
        // this.csvFileService.fileUpload(file, seperator, fileTypeName, validate, header).subscribe(response => {
        //   // console.log('okResponse:' + JSON.stringify(response));
        //   if (validate) {
        //     let detail = Array.isArray(response) ? ' - ' + ((<Array<any>><unknown>response).length == 0 ? 'Goooood Job! File is entirely valid! You are awesome.' : (<Array<any>> <unknown>response).length + ' lines are not valid and won\'t be processed.') : file.name;
        //     fileUpload.msgs.push({
        //       severity: 'success',
        //       summary: summary,
        //       detail: detail
        //     });
        //   }
        //   else {
        //     fileUpload.msgs.push({
        //       severity: 'success',
        //       summary: summary,
        //       detail: file.name
        //     });
        //   }
        //   onUpload.emit(false);
        //   this.state = 'UPLOAD';
        // }, (errorResponse) => {
        //   // console.log('errorResponse:' + JSON.stringify(errorResponse));
        //   fileUpload.msgs.push({
        //     severity: 'error',
        //     summary: 'Upload failed',
        //     detail: errorResponse.error.message
        //   });
        //   onUpload.emit(false);
        // });
      }   
    }

    this.timeSpinners = true;
  }

}
