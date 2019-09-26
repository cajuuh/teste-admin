import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {DayPilot, DayPilotSchedulerComponent} from 'daypilot-pro-angular';
import SchedulerPropsAndEvents = DayPilot.SchedulerPropsAndEvents;
import { DataService } from './data.service';


@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {

  // @ViewChild('scheduler', {static: false})
  // scheduler: DayPilotSchedulerComponent;

  // events: any[] = [];

  // config: SchedulerPropsAndEvents = {
  //   timeHeaders: [{"groupBy":"Month"},{"groupBy":"Day","format":"d"}],
  //   scale: "Day",
  //   days: 30,
  //   startDate: "2019-09-01",
  //   eventHeight: 50,
  //   cellWidth: 50,
  //   timeRangeSelectedHandling: "Enabled",
  //   durationBarVisible: true,
  //   onTimeRangeSelected: function (args) {
  //     var dp = this;
  //     DayPilot.Modal.prompt("Create a new event:", "Event 1").then(function(modal) {
  //       dp.clearSelection();
  //       if (!modal.result) { return; }
  //       dp.events.add(new DayPilot.Event({
  //         start: args.start,
  //         end: args.end,
  //         id: DayPilot.guid(),
  //         resource: args.resource,
  //         text: modal.result
  //       }));
  //     });
  //   },
  //   treeEnabled: true,
  // };

  // constructor(private ds: DataService) {
  // }


  // ngAfterViewInit(): void {
  //   this.ds.getResources().subscribe(result => this.config.resources = result);

  //   const from = this.scheduler.control.visibleStart();
  //   const to = this.scheduler.control.visibleEnd();
  //   this.ds.getEvents(from, to).subscribe(result => {
  //     this.events = result;
  //   });
  // }

}
