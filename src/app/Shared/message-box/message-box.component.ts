import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { msgType } from 'src/app/base';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css'],
})
export class MessageBoxComponent implements OnInit, AfterViewInit {
  _msg  = '';
  _color = 'gray';
  _textcolor = 'white';

  constructor(private ref: ChangeDetectorRef) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  public clear() {
    setTimeout(() => {
      //code for your new value.
      this._msg = '';
      this._color = this.initRowColor(4);
      return true;
    });
  }

  public setMessage(type: msgType, text: string) {
    setTimeout(() => {
      //code for your new value.
      this._msg = text;
      this._color = this.initRowColor(type);
      return true;
    });
  }

  initRowColor(statid: number) {
    //1 success,
    //2 error,
    //3 warn,
    //4

    switch (statid) {
      case 0:
        return 'green';
      case 1:
        return 'red';
      case 2:
        return 'orange';
      case 3:
        return 'skyblue';
      case 4:
        return 'white';
      default:
        return 'gray';
        break;
    }
  }
}
