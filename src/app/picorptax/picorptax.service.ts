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

  getTopTaxBillerInRange(startDate: String, endDate: String): Observable<PiCorpTax[]> {
    return this._http.get(this._url + '?startDate=' + startDate +  '&endDate=' + endDate)
      .map(res => res.json());
  }

  reloadEVEDatabase(): Observable<String> {
    return this._http.get(this._url + '?reloadEVEDatabase=true')
      .map(res => res.json());
  }


}
