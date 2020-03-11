import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UploadFile } from 'ng-zorro-antd/upload';
import { EnrollService } from '../../service/enroll.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  avatarUrl: string;

  uploading = false;

  value: string;

  fileList: UploadFile[] = [];

  uid: number = 1;

  constructor(
    private http: HttpClient, 
    private msg: NzMessageService,
    private enrollService: EnrollService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.uid = parseInt(this.activatedRoute.snapshot.queryParamMap.get("uid"));
  }

  getBase64(img, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  beforeUpload = (file: UploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    this.getBase64(this.fileList[0], img => {
      this.avatarUrl = img;
    })
    return false;
  };

  handleUpload(): void {
    const time = new Date().getTime() + "";
    this.enrollService.referee(this.uid, time, this.value, this.avatarUrl).subscribe(resp => {
      console.log(resp);
    });
  }

}
