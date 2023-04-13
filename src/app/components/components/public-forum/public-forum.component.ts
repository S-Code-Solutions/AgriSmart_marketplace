import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ForumService} from "../../services/forum.service";
import {Subscription} from "rxjs";

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
  imageUrls: any;
  newsList!: any[];
  private allCropsSub!: Subscription;


  constructor(private forumService:ForumService) { }

  ngOnInit(): void {
    this.comiForm = new FormGroup({
      imageURL: new FormControl('', [
        Validators.required
      ]),
      comment: new FormControl('', [
        Validators.required
      ]),
    });

    this.getNews();
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

  getNews(){

    this.allCropsSub = this.forumService.getAllNews()
      // .pipe(timeout(4000))
      .subscribe(result => {
        console.log(result)
        // this.dataSource = result.content;
        this.newsList = result.articles;
      }, error => {
        console.log(error);
      });
  }
}
