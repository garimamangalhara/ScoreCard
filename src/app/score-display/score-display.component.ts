import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.css']
})
export class ScoreDisplayComponent implements OnInit {
  public verbalCurrent: any;
  public verbalTarget: any;
  public quantCurrent: any;
  public quantTarget: any;
  public totalCurrent: any;
  public totalTarget: any;
  public graphDisabled: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  submit() {
    this.graphDisabled = false;
    //verbal Score
    let verbalBlue = this.verbalCurrent * 8
    document.getElementById('verbalBlue').style.width = verbalBlue + "px";
    document.getElementById('verbalBlueArrow').style.left = verbalBlue + 10 + "px"


    let verbalYellow = this.verbalTarget * 8
    document.getElementById('verbalYellow').style.width = verbalYellow + "px";
    document.getElementById('verbalYellowArrow').style.left = verbalYellow + 10 + "px";

    if (Math.abs(this.verbalCurrent - this.verbalTarget) <= 3) {
      document.getElementById('verbalYellowArrow').className = "arrow-up-yellow";
    }
    else {
      document.getElementById('verbalYellowArrow').className = "arrow-down-yellow";
    }

    //Quant Score

    let quantBlue = this.quantCurrent * 8
    document.getElementById('quantBlue').style.width = quantBlue + "px";
    document.getElementById('quantBlueArrow').style.left = quantBlue + 10 + "px"

    let quantYellow = this.quantTarget * 8
    document.getElementById('quantYellow').style.width = quantYellow + "px";
    document.getElementById('quantYellowArrow').style.left = quantYellow + 10 + "px"

    if (Math.abs(this.quantCurrent - this.quantTarget) <= 3) {
      document.getElementById('quantYellowArrow').className = "arrow-up-yellow";
    }
    else {
      document.getElementById('quantYellowArrow').className = "arrow-down-yellow";
    }

    //Total Score

    let totalCurrent = 200 + (parseInt(this.verbalCurrent) + parseInt(this.quantCurrent)) * 5;
    this.totalCurrent = totalCurrent
    let totalTarget = 200 + (parseInt(this.verbalTarget) + parseInt(this.quantTarget)) * 5
    this.totalTarget = totalTarget

    document.getElementById('totalBlue').style.width = totalCurrent + "px";
    document.getElementById('totalBlueArrow').style.left = totalCurrent + 10 + "px"

    document.getElementById('totalYellow').style.width = totalTarget + "px";
    document.getElementById('totalYellowArrow').style.left = totalTarget + 10 + "px"
    if (Math.abs(totalCurrent - totalTarget) <= 20) {
      document.getElementById('totalYellowArrow').className = "arrow-up-yellow";
    }
    else {
      document.getElementById('totalYellowArrow').className = "arrow-down-yellow";
    }


  }
}
