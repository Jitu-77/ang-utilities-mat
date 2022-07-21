import { Component } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedDate: any;
  minDate = new Date()
  today = new Date()
  datesToHighlight = [
    '2019-01-22T18:30:00.000Z',
    '2019-01-22T18:30:00.000Z',
    '2019-01-24T18:30:00.000Z',
    '2019-01-28T18:30:00.000Z',
    '2019-01-24T18:30:00.000Z',
    '2019-01-23T18:30:00.000Z',
    '2019-01-22T18:30:00.000Z',
    '2019-01-25T18:30:00.000Z',
  ];

  constructor(public datepipe: DatePipe){
    let date :any= this.datepipe.transform(this.today, 'yyyy-MM-dd');
    console.log(date);
    this.minDate = new Date(date)
    console.log( this.minDate);
    this.selectedDate = this.minDate
  }

  ngOnInit() {
    this.datesToHighlight = []
    console.log();
    
    // this.datesToHighlight.push(this.minDate.toString())
  }

  onSelect(event:any) {
    console.log(event);
    this.selectedDate = event;
  }

  // dateClass() {
  //   console.log('HERE');
  //   return (date: Date): MatCalendarCellCssClasses => {
  //     const highlightDate = this.datesToHighlight
  //       .map((strDate) => new Date(strDate))
  //       .some(
  //         (d) =>
  //           d.getDate() === date.getDate() &&
  //           d.getMonth() === date.getMonth() &&
  //           d.getFullYear() === date.getFullYear()
  //       );

  //     return highlightDate ? 'special-date' : '';
  //   };
  // }
}
