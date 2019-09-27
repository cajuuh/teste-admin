import { Component } from "@angular/core";
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: "ngx-ecommerce-dialog-slider",
  templateUrl: "./dialog-slider-scheduler.component.html",
  styleUrls: ["./dialog-slider-scheduler.component.scss"]
})
export class DialogSliderSchedulerComponent {

  constructor(protected ref: NbDialogRef<DialogSliderSchedulerComponent>) {}

  cancel() {
    this.ref.close();
  }

  submit(value) {
    this.ref.close(value);
  }

  value = 25;

  get status() {
    if (this.value <= 25) {
      return 'danger';
    } else if (this.value <= 50) {
      return 'warning';
    } else if (this.value <= 75) {
      return 'info';
    } else {
      return 'success';
    }
  }

  get canIncrease(): boolean {
    return this.value < 100;
  }

  get canDecrease(): boolean {
    return this.value > 0;
  }

  decreaseValue() {
    if (this.value > 0) {
      this.value -= 25;
    }
  }

  increaseValue() {
    if (this.value < 100) {
      this.value += 25;
    }
  }
}
