import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getStartDetails(){
    return ({
      slidesStore: [
        {
          id: "1",
          src: 'https://i.ibb.co/wsdhfY4/ezgif-com-webp-to-jpg-1-01.jpg',
          alt: 'Image_1',
          title: 'Image_1'
        },
        {
          id: "2",
          src: 'https://gaviaspreview.com/wp/orgarium/wp-content/uploads/2022/01/slider-3.jpg',
          alt: 'Image_2',
          title: 'Image_3'
        },
        {
          id: "3",
          src: 'https://gaviaspreview.com/wp/orgarium/wp-content/uploads/2022/01/slider-4.jpg',
          alt: 'Image_3',
          title: 'Image_3'
        },
        {
          id: "4",
          src: 'https://gaviaspreview.com/wp/orgarium/wp-content/uploads/2022/05/slider-6.jpg',
          alt: 'Image_4',
          title: 'Image_4'
          // https://gaviaspreview.com/wp/orgarium/wp-content/uploads/2022/06/slider-7.jpg
          // https://gaviaspreview.com/wp/orgarium/wp-content/uploads/2022/06/slider-8.jpg
        }
      ]
    })

  }

  getNewsDetails(){
    return ({
      newsStore : [
        {
          id:"1",
          src:'https://i.ibb.co/jwPhb9z/event2-01.png',
          alt:'Image_1',
          title:'Image_1',
          headone:'Organized By Freshio',
          subhead:'Paddy Fields research Event'
        },
        {
          id:"2",
          src:'https://i.ibb.co/9G3t7B5/event3-01.png',
          alt:'Image_2',
          title:'Image_3',
          headone:'Organized By Freshio',
          subhead:'Corn Fields Workshop'
        },
        {
          id:"3",
          src:'https://i.ibb.co/CQK4tLX/event4-01.png',
          alt:'Image_3',
          title:'Image_3',
          headone:'Organized By Freshio',
          subhead:'Compost Fertilizing'
        },
        {
          id:"4",
          src:'https://i.ibb.co/ssJ3bBL/event1-01.png',
          alt:'Image_1',
          title:'Image_1',
          headone:'Organized By Freshio',
          subhead:'Tube Well Event'
        },
        {
          id:"5",
          src:'https://i.ibb.co/jwPhb9z/event2-01.png',
          alt:'Image_2',
          title:'Image_3',
          headone:'Organized By Freshio',
          subhead:'Paddy Fields research Event'
        },
        {
          id:"6",
          src:'https://i.ibb.co/9G3t7B5/event3-01.png',
          alt:'Image_3',
          title:'Image_3',
          headone:'Organized By Freshio',
          subhead:'Corn Fields Workshop'
        },
      ]
    })
  }
}
