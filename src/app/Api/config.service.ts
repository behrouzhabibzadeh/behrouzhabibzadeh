import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  appConfig: any;
  ServerUrl: string | undefined;

  constructor(private http: HttpClient) {}

  loadConfig() {
    return this.http
      .get('./assets/config/config.json')
      .toPromise()
      .then((res: any) => {
        this.appConfig = res;
        this.ServerUrl = this.appConfig.apiUrl;
      });
  }

  loadFile(fullname:any) {
    return this.http
      .get('./assets/files/' + fullname ,  {responseType: "text"})

  }

  getConfig() {
    return this.appConfig;
  }

  getServerURL() {
    return this.getConfig().apiUrl + '/api';
  }

  getAssetURL() {
    return this.getConfig().assetUrl;
  }
}
