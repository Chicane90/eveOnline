import { Component } from '@angular/core';
import { PicorptaxService } from '../picorptax/picorptax.service';
import { PiCorpTax } from '../picorptax/picorptax';

@Component({
  selector: 'taxTable',
  templateUrl: './tax-table.component.html'
})
export class TaxTableComponent {

  picorptax: PiCorpTax[] = [];

  constructor(private _picorptaxService: PicorptaxService) {

  }

  ngOnInit() {
    this._picorptaxService.getTopTaxBiller()
      .subscribe(res => this.picorptax = res );
  }
}
