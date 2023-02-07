import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  dateControl:any;
  @Input() lable = 'تاریخ';
  @Output() selected = new EventEmitter<string>();
  private _date:any;
  showSpinners = true;
  showSeconds = true;
  stepHour = true;
  stepMinute = true;
  stepSecond = true;
  _readOnly:any;

  _initnull = false;

  @Input() set initNull(value: boolean) {
    this._initnull = value;
  }


  @Input() set selectedDate(value: string) {

    if (value) {
      this._date = value;
      const date = moment.from(this._date, 'en').utc(true).toJSON();
      this.dateControl = date.toString().split('T')[0].replace('"', '');
      this.selected.emit(this.dateControl);
    }

  }

  @Input() set readonly(value: boolean) {
    this._readOnly = value;
    console.log(this._readOnly);
  }

  constructor() { }
  ngOnInit(): void { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.fill();
      return;
    }, 0);
  }

  fill() {
    if (!this._initnull && !this._date) {
      if (!this._date) this._date = new Date();
      const date = moment.from(this._date, 'en').utc(true).toJSON();
      this.dateControl = date.toString().split('T')[0].replace('"', '');
      this.selected.emit(this.dateControl);
    }
  }

  onChange(event: MatDatepickerInputEvent<Date>) {
    const date = moment.from(this.dateControl, 'en').utc(true).toJSON();
    this.selected.emit(
      JSON.stringify(date).toString().split('T')[0].replace('"', '')
    );
  }
}
