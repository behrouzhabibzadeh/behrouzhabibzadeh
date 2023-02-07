import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Base, msgType } from 'src/app/base';
import { ApiService } from 'src/app/Api/api.service';
import { AppError } from 'src/app/Models/AppError';

@Component({
    selector: 'app-app-error-dialog',
    templateUrl: './app-error-dialog.component.html',
    styleUrls: ['./app-error-dialog.component.css']
})
export class AppErrorDialogComponent implements OnInit {
    title = 'تاریخچه خطا';
    isEdit = false;
    isLoadingResults = true;
    model: any = {};

    constructor(
        private api: ApiService,
        private base: Base,
        public dialogRef: MatDialogRef<AppErrorDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data:any) {
        if (data.parent) {
            this.model.appId = data.parent.id;
        }
    }

    ngOnInit(): void {
        if (this.data.rowid) {
            this.api.getAppErrorByID(this.data.rowid)
                .subscribe(
                    (response: AppError) => {
                        this.model = response;
                        this.isLoadingResults = false;
                        this.isEdit = true;
                    });
        } else {
            this.isEdit = false;
            this.isLoadingResults = false;
        }
    }

    onSubmit() {
        if (this.isEdit) {
            this.onPut(this.model);
        } else {
            this.onPost(this.model);
        }
    }

    onPost(entity:any) {

    }

    onPut(entity: any) {

    }

    onIdSelected(id:any) {
        this.model.id = id;
    }

    onTimeSelected(id:any) {
        this.model.time = id;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
