import {of as observableOf,  Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
// import { Properties } from '../../shared/models';
// import { PropertyService} from '../../shared/services';
// import { AuthService, BaseService } from '@tvbuild/angular-components';

@Injectable()
export class CsvFileService {
  private UPLOAD_CSV_FILE_BASE_URL: string = '/customerDNA/uploadCsvFile';

  constructor(httpClient: HttpClient) { 
    // super(httpClient);
  }

  public fileUpload(file: any, separator: string, fileType: string, validate: boolean, header: boolean): any {
    // return this.propertyService.properties.pipe(switchMap((properties: Properties) => {
    //   const url = `${properties.managementServiceVipEndpoint}${this.UPLOAD_CSV_FILE_BASE_URL}?separator=${separator}&fileType=${fileType}&validate=${validate}&header=${header}`;
    //   const formData: FormData = new FormData();
    //   formData.append('csvFile', file, file.name);
    //   return this.postJsonResponse<void>(url, formData, {
    //       headers: this.authService.authorizationHeaders.delete('Content-Type')
    //   });
    // }));
  }

}
