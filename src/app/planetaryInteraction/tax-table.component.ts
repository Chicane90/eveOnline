import {Component, Input} from '@angular/core';
import { PicorptaxService } from '../picorptax/picorptax.service';
import { PiCorpTax } from '../picorptax/picorptax';

@Component({
  selector: 'taxTable',
  templateUrl: './tax-table.component.html'
})
export class TaxTableComponent {

  @Input() isLoading = true;
  @Input() picorptax: PiCorpTax[] = [];

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

