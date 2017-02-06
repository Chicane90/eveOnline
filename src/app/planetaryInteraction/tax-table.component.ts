import { Component } from '@angular/core';
import { PicorptaxService } from '../picorptax/picorptax.service';
import { PiCorpTax } from '../picorptax/picorptax';
import {delay} from "rxjs/operator/delay";

@Component({
  selector: 'taxTable',
  templateUrl: './tax-table.component.html'
})
export class TaxTableComponent {

  isLoading = true;

  picorptax: PiCorpTax[] = [];

  constructor(private _picorptaxService: PicorptaxService) {

  }

  ngOnInit() {
      this._picorptaxService.getTopTaxBiller()
        .subscribe(res => {
          this.isLoading = false;
          this.picorptax = res;
        });
    }
  }

