import { Component } from '@angular/core';
import { PicorptaxService } from './picorptax/picorptax.service';
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
