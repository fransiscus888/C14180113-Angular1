import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  player = 1;
  baris: number;
  kolom: number;
  board: String[] = ["*****", "*****", "*****", "*****", "*****"];
  tes: number[][] = [[1, 2, 3], [4, 5, 6]];

  play() {
    this.board[0][0] = "a";
  }
}
