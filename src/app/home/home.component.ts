import {AfterViewInit, Component, ViewChildren, Renderer} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})


// class SomeCmp implements AfterViewInit {

// }

export class HomeComponent {
  @ViewChildren('lessonContent') content;

  ngAfterViewInit() {
    console.log(this.content.toArray()[0])
  }

  constructor(public renderer: Renderer) {
  }

  getClass(foo) {
    if (foo['class']) {
      console.log("zomg foo")
      // console.log(foo['class'])
      return ["blob"].concat(foo['class'])
    }
    return ["blob"];
  };

  countdown = 0
  ngOnInit() {
    this.countdown = 0

    setInterval(()=> {
      this.countdown = this.countdown + 1

      for (var index in this.fooz) {
        if (this.fooz[index].hasOwnProperty('transitions') ) {
            let thing = (this.fooz[index] as any).transitions
            if (thing[this.countdown]) {
              console.log("snap it's countdown time!")
              console.log(this.content.toArray()[index])
              
              for (let cssClass of thing[this.countdown]) {
                this.content.toArray()[index].nativeElement.classList.toggle(cssClass)
              }
            }
          }
      }
    }, 1000);
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
      width: 100,
      height: 100,
      source: 'https://i.redd.it/b4beo8zdfjl31.jpg',
      class: ["med-transition", "far-left"],
      transitions: {
        5: ["far-left", "mid-left"],
        11: ["far-left", "mid-left"],
      },
      z: 3
    },
    {
      type: "image",
      source: "https://media.giphy.com/media/mXwxPJjb1SzlhwMHfd/giphy.gif",
      top: 250,
      z: 2
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
