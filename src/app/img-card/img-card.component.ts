import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  private image: CatImage = {
    message: 'PROGRESSIVE WEB CAT',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  public button: Button = {
    text: 'Give me another cat',
    color: 'primary',
    disabled: false
  };

  public src: string;

  constructor() { }

  ngOnInit() {
    this.generateSrc();
    if (!navigator.onLine) {
      this.botton.text = 'Sorry, you\'re offline';
      this.button.disabled = true;
    }
  }

  generateSrc(): void {
    this.src = this.image.api + this.image.message
      + '?size=' + this.image.fontsize
      + '&ts=' + Date.now();
  }
}

class CatImage {
  message: string;
  api: string;
  fontsize: number;
}

class Button {
  color: string;
  disabled: boolean;
  text: string;
}
