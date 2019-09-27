import { Component } from "@angular/core";
import {
  NbSortDirection,
  NbSortRequest,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
  NbDialogRef
} from "@nebular/theme";
import { DialogSliderSchedulerComponent } from '../dialog-slider-scheduler/dialog-slider-scheduler.component';

@Component({
  selector: "ngx-ecommerce-scheduler",
  templateUrl: "./scheduler.component.html",
  styleUrls: ["./scheduler.component.scss"]
})
export class SchedulerComponent {

  constructor(protected ref: NbDialogRef<DialogSliderSchedulerComponent>) {}

  // mocking data
  thisDate = new Date();
  months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  weekDays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
  ];

  projetos = [
    {
      nome: "Projeto 1",
      value: [
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8
      ]
    },
    {
      nome: "Projeto 2",
      value: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ];

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length - 1);
    }
  }

  getDaysInMonth() {
    var daysInMonth = 0;
    var year = new Date().getFullYear();
    var month = new Date().getMonth();

    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        daysInMonth = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        daysInMonth = 30;
        break;
      case 2:
        if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
          daysInMonth = 29;
        } else {
          daysInMonth = 28;
        }
        break;
      default:
        console.log("Invalid month");
        break;
    }

    return daysInMonth;
  }

  openSlider(){

  }


  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }

}
