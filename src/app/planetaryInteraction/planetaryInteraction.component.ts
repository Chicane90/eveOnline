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

  private startDate: String = '';
  private endDate: String = '';

  private message: String;

  constructor(private _picorptaxService: PicorptaxService) {

  }

  reloadTaxTable($event) {

    this.isLoading = true;
    console.log("Processing reloadTaxTable()");
    console.log($event);

    console.log($event.startDate.formatted);
    console.log($event.endDate.formatted);

    if ($event.startDate != '') {
      this.startDate = $event.startDate.formatted;
    }

    if ($event.endDate != '') {
      this.endDate = $event.endDate.formatted;
    }

    if (this.startDate != '' && this.endDate != '') {
      this._picorptaxService.getTopTaxBillerInRange(this.startDate, this.endDate)
        .subscribe(res => {
          this.isLoading = false;
          this.picorptax = res;
        });
    }
    else {
      this._picorptaxService.getTopTaxBiller()
        .subscribe(res => {
          this.isLoading = false;
          this.picorptax = res;
        });
    }

  }

  updateEVEDatabase() {
    this._picorptaxService.reloadEVEDatabase()
      .subscribe(res => {
        this.isLoading = false;
        this.message = res;
      });
  }


}
