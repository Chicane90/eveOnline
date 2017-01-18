import { Component } from '@angular/core';
import { PicorptaxService } from './picorptax/picorptax.service';
import { OnInit } from '@angular/core';
import { Subscriber } from 'rxjs'
import { Observable } from 'rxjs/Observable';
import { PiCorpTax } from './picorptax/picorptax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  picorptax: PiCorpTax[] = [];
  
  constructor(private _picorptaxService: PicorptaxService) {

  }

  ngOnInit() {
      this._picorptaxService.getTopTaxBiller()
      .subscribe(res => this.picorptax = res );
  }
}
