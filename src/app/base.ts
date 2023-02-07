import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from './Shared/snack/snack.component';

@Injectable({
    providedIn: 'root',
})
export class Base {
    public appName = 'سامانه'
    public version = '1.1.1'

    public setTitle(pageName: string) {
        return pageName + ' | ' + this.appName
    }



    constructor(private snackBar: MatSnackBar) { }
    durationInSeconds = 3;

    fakeCode = [
        '0000000000',
        '1111111111',
        '2222222222',
        '3333333333',
        '4444444444',
        '5555555555',
        '6666666666',
        '7777777777',
        '8888888888',
        '9999999999',
    ];

    public checkMeliCode(code:any) {
        let Arr = Array(code);
        if (this.fakeCode.some((e) => e == code)) {
            return false;
        } else if (Arr.length != 10) {
            return false;
        } else {
            let Sum: number = 0;
            let Last: number;

            for (let i = 0; i < 9; i++) {
                Sum += +Arr[i] * (10 - i);
            }
            let divideRemaining = Sum % 11;
            if (divideRemaining < 2) {
                Last = divideRemaining;
            } else {
                Last = 11 - divideRemaining;
            }
            let n = Arr[9];
            return Last == n;
        }
    }

    public openSnackBar(msg: string, type: msgType) {
        let style = 'blue-snackbar';

        switch (type) {
            case 0:
                style = 'green-snackbar';
                break;
            case 1:
                style = 'red-snackbar';
                break;
            case 2:
                style = 'orange-snackbar';
                break;
            case 3:
                style = 'blue-snackbar';
                break;
            default:
                break;
        }
        this.snackBar.openFromComponent(SnackComponent, {
            duration: this.durationInSeconds * 1000,
            data: msg,
            panelClass: [style],
        });
    }
}

export enum msgType {
    success,
    error,
    warn,
    info,
}
