import {Component} from "@angular/core";
import {PiCorpTax} from "../picorptax/picorptax";
import {PicorptaxService} from "../picorptax/picorptax.service";

@Component({
  selector: 'planetaryInteraction',
  templateUrl: './planetaryInteraction.component.html'
})
export class PlanetaryInteractionComponent {

  picorptax: PiCorpTax[] = [];
  isLoading = true;

  constructor(private _picorptaxService: PicorptaxService) {

  }

  reloadTaxTable($event) {

    console.log("Processing reloadTaxTable()");
    console.log($event);

    this.isLoading = true;

    this._picorptaxService.getTopTaxBiller()
      .subscribe(res => {
        this.isLoading = false;
        this.picorptax = res;
      });
  }

}
