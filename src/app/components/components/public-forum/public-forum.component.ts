import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-public-forum',
  templateUrl: './public-forum.component.html',
  styleUrls: ['./public-forum.component.scss']
})
export class PublicForumComponent implements OnInit {
  imageUrl=true ;
  imageUrll: any;
  comiForm!: FormGroup;
  fileToUpload: any;
  fileName = 'Select File';


  constructor() { }

  ngOnInit(): void {
    this.comiForm = new FormGroup({
      imageURL: new FormControl('', [
        Validators.required
      ]),
      comment: new FormControl('', [
        Validators.required
      ]),
    });
  }

  handleFileInput(file: any) {
    this.fileToUpload = file.files.item(0);
    console.log(file)
    console.log(file.files)
    console.log(file.files.item(0))
    console.log(this.fileToUpload)
    // Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrll = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    // this.imageUrl = this.fileToUpload.name;
    console.log(this.imageUrll);
    this.fileName = this.fileToUpload.name;
    console.log(this.fileName)
  }

  addComment() {

  }
}
