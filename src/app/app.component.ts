import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Yu-Gi-Oh-CardsApp';
  imgYuGi = "assets/images/1.png";

  ngOnInit() {
    this.getYuGiImg();
  }

  getYuGiImg() {
    let random = Math.random() * 11 + 1;
    random = Math.floor(random);
    this.imgYuGi = `assets/images/${random}.png`;
  }
}
