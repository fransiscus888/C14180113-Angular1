import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  player = 1
  baris: number
  kolom: number
  board: String[][] = [["*","*","*","*","*"], ["*","*","*","*","*"], ["*","*","*","*","*"], ["*","*","*","*","*"], ["*","*","*","*","*"]];

  play() {
    if(this.baris==null || this.kolom==null){
      alert("harus di isi")
    }else{
      if(this.baris<0 || this.baris>4 || this.kolom>4|| this.kolom <0){
         alert("Out of range")
      }else{
        if(this.board[this.baris][this.kolom]!="*"){
          alert("sudah di ambil")
        }else{
          this.board[this.baris][this.kolom]= this.player.toString()
        }
      }
    }
    if(this.checkwin()=="p1"){
      alert("player 1 Menang")
      this.board=[["*","*","*","*","*"], ["*","*","*","*","*"], ["*","*","*","*","*"], ["*","*","*","*","*"], ["*","*","*","*","*"]]
      this.player=1
      return 0
    }else if(this.checkwin()=="p2"){
      alert("player 2 Menang")
      this.board=[["*","*","*","*","*"], ["*","*","*","*","*"], ["*","*","*","*","*"], ["*","*","*","*","*"], ["*","*","*","*","*"]]
      this.player=1
      return 0
    }

    if(this.player==1){
      this.player=2
    }else{
      this.player=1
    }
  }
  checkwin(){
    var p1=0
    var p2=0
    //check horizontal
    for(var x=0;x<5;x++){
      for(var y=0;y<5;y++){
        if(p1==4){
          return "p1"
        }else if(p2==4){
          return "p2"
        }
        if(this.board[x][y]=="1"){
          p1++;
          if(p2>0){
            p2--;
          }
          console.log("p1: ",p1)
          console.log("p2: ",p2)
        }else if(this.board[x][y]=="2"){
          p2++;
          if(p1>0){
            p1--;
          }
          console.log("p1: ",p1)
          console.log("p2: ",p2)
        }else if(this.board[x][y]=="*"){
          if(p1>0){
            p1--
          }else if(p2>0){
            p2--
          }
        }
      }
      if(p1==4){
        return "p1"
      }else if(p2==4){
        return "p2"
      }else{
        p1=0;p2=0;
      }
    }
    p1=0
    p2=0
    //check vertical
    for(var x=0;x<5;x++){
      for(var y=0;y<5;y++){
        if(p1==4){
          return "p1"
        }else if(p2==4){
          return "p2"
        }
        if(this.board[y][x]=="1"){
          p1++;
          if(p2>0){
            p2--;
          }
        }else if(this.board[y][x]=="2"){
          p2++;
          if(p1>0){
            p1--;
          }
        }else if(this.board[x][y]=="*"){
          if(p1>0){
            p1--
          }else if(p2>0){
            p2--
          }
        }
      }
      if(p1==4){
        return "p1"
      }else if(p2==4){
        return "p2"
      }else{
        p1=0;p2=0;
      }
    }
    return "no"
  }
}
