import {Injectable} from '@angular/core';
import {DayPilot} from 'daypilot-pro-angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {

  resources: any[] = [
    { name: 'Projetos', id: 'GA', expanded: true, children: [
      { name: 'Projeto 1', id: 'R1' },
      { name: 'Projeto 2', id: 'R2' },
    ]},
  ];

  events: any[] = [
    {
      id: '1',
      resource: 'R2',
      start: '2019-09-02',
      end: '2019-09-02',
      text: '8h',
      barColor: '#990000'
    },
    {
      id: '2',
      resource: 'R2',
      start: '2019-09-05',
      end: '2019-09-05',
      text: '8h',
      barColor: '#b45f06'
    },
    {
      id: '3',
      resource: 'R2',
      start: '2019-09-08',
      end: '2019-09-08',
      text: '8h',
      barColor: '#bf9000'
    },
    {
      id: '4',
      resource: 'R1',
      start: '2019-09-03',
      end: '2019-09-03',
      text: '8h',
      barColor: '#38761d'
    },
    {
      id: '5',
      resource: 'R1',
      start: '2019-09-06',
      end: '2019-09-06',
      text: '8h',
      barColor: '#134f5c'
    },
    {
      id: '6',
      resource: 'R4',
      start: '2019-09-09',
      end: '2019-09-09',
      text: '8h',
      barColor: '#1155cc'
    },
  ];

  constructor(private http: HttpClient) {
  }

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.events);
      }, 200);
    });

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString());
  }

  getResources(): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.resources);
      }, 200);
    });

    // return this.http.get("/api/resources");
  }

}
