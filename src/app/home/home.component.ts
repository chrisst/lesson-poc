import {Component} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})



export class HomeComponent {
  getClass(foo) {
    if (foo['class']) {
      console.log("zomg foo")
      console.log(foo['class'])
      return ["blob"].concat(foo['class'])
    }
    return ["blob"];
 }

  fooz = [
    {
      type: "text",
      text: "first element and other ",
      left: 10,
      top: 20,
      width: 100,
      height: 50,
      appear: 2,
      class: ["b1"],
    },
    {
      type: "text",
      text: "second element text",
      left: 30,
      top: 0,
      style: "width: 200px; height: 500px;",
      class: ["b2"],
      appear: 10,
    },
    {
      type: "text",
      text: "third element here",
      // class: ["b2"],
      appear: 10,
      top: 100,
    },
    {
      type: "image",
      text: "holy crap an image",
      left: 200,
      top: 200,
      width: 100,
      height: 100,
      source: 'https://i.redd.it/b4beo8zdfjl31.jpg',
      // class: ["b2"],
      z: 3
    },
    {
      type: "image",
      source: "https://media.giphy.com/media/mXwxPJjb1SzlhwMHfd/giphy.gif",
      top: 250,
      z: 2
    },
    {
      type: "text",
      text: "* pain has probably prevented.... you enjoy",
      class: ["bullet"],
      start_time: 10,
      top: 100,
    },
    {
      type: "text",
      text: "* pain releif is right around the corner",
      class: ["bullet", "blue"],
      start_time: 12,
      top: 100,
    },
    {
      type: "html",
      text: "* it is important to be physically",
      class: ["bullet"],
      start_time: 15,
      top: 100,
    },
  ]

  get foozValue () {
    return JSON.stringify(this.fooz, null, 2);
  }

  set foozValue (v) {
    try{
    this.fooz = JSON.parse(v);}
    catch(e) {
      console.log('error occored while you were typing the JSON');
    };
  }
}
