import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { PiCorpTax } from './picorptax';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PicorptaxService {

  private _url = 'http://tomcat.chicane.at/webapp_eveonline-1.0.0/rest/planetaryInteraction/topTaxBiller';

  constructor(private _http: Http) {

  }

  getTopTaxBiller(): Observable<PiCorpTax[]> {
    return this._http.get(this._url)
      .map(res => res.json());
  }

  getTopTaxBillerInRange(startDate: Date, endDate: Date): Observable<PiCorpTax[]> {
    return this._http.get(this._url + startDate + endDate)
      .map(res => res.json());
  }

}
