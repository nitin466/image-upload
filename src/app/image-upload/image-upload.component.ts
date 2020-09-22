import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  fileList: any[] = [];
  localUrl: any;
  showUrl: any;
  constructor() { }

  ngOnInit() {
  }

  onFileChange(event) : void {
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (event : any) => {
      this.localUrl =  event.target.result;
      this.fileList.push({'file': file, 'imageData': event.target.result})
    }
    reader.readAsDataURL(event.target.files[0])
  }

  selectImg(imgData) {
    this.showUrl = imgData;
  }
  removeImg(index) : void {
    this.fileList.splice(index, 1);
  }
}

