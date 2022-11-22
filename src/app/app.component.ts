import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerCountOne = 0;
  playerCountTwo = 0;
  disable = false;
  add = (player: number) => {
    if (this.playerCountTwo === 4 || this.playerCountOne === 4) {
      this.disable = true;
    }
    if (player === 1) {
      this.playerCountOne = this.playerCountOne + 1
    }
    if (player === 2) {
      this.playerCountTwo = this.playerCountTwo + 1
    }
  }
  reset = () => {
    this.disable = false;
    this.playerCountOne = 0;
    this.playerCountTwo = 0;
  }
}

//Answer for solution two

// function stringRepeat(a){
//   myString = a.toLowerCase()
//    .split("")
//    .filter((item, index, array) => array.indexOf(item) !== index)
//    .join("");
//    return myString;
// }
//
// console.log(stringRepeat('abbsxSX'));
