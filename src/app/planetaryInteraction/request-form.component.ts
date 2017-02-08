import {Component, Output, EventEmitter} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'request-form',
  templateUrl: './request-form.component.html'
})
export class RequestFormComponent {

  @Output() buttonSubmitClicked = new EventEmitter();

  buttonSubmit(form: NgForm) {
    console.log(form);
    this.buttonSubmitClicked.emit(  {
                                      startDate: form.value.startDate,
                                      endDate: form.value.endDate
                                    } );
  }

  buttonEVE() {

  }

}
