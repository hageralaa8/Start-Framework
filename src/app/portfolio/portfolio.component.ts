import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  isclicked: boolean = false
  imagesrc: String = ''
  open(image: string) {
    this.isclicked = true
    this.imagesrc ="assets/images/" + image
    console.log(this.imagesrc); //at2kd mn asm el sora

  }
  close() {
    this.isclicked = false
  }
}
