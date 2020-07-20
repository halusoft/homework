import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  count = Date.now();
  hidePanel = true;
  hasAddition = true;
  hasSubtraction = false;
  hasMultiplication = false;
  numEquations = 20;
  addMinLeft = 1;
  addMinRight = 1;
  addMaxLeft = 100;
  addMaxRight = 100;
  subMinLeft = 1;
  subMinRight = 1;
  subMaxLeft = 100;
  subMaxRight = 100;
  mulMinLeft = 1;
  mulMinRight = 1;
  mulMaxLeft = 10;
  mulMaxRight = 10;

  constructor() { }

  ngOnInit(): void {
  }

  getEquation = (i: number): string => {

    const sign = this.getSign(i);

    if(sign === "+")
    {
      return `${this.getNumberAsString(i, this.addMinLeft, this.addMaxLeft)} + ${this.getNumberAsString(i+10000, this.addMinRight, this.addMaxRight)} = `;
    }
    else if(sign === "-")
    {
      let left = this.getNumber(i, this.subMinLeft, this.subMaxLeft);
      let right = this.getNumber(i+10000, this.subMinRight, this.subMaxRight);
      if(left < right)
      {
        const t = left;
        left = right;
        right = t;
      }
      return `${this.getNumberString(left)} - ${this.getNumberString(right)} = `;
    }
    else// if(sign === "x")
    {
      return `${this.getNumberAsString(i, this.mulMinLeft, this.mulMaxLeft)} x ${this.getNumberAsString(i+10000, this.mulMinRight, this.mulMaxRight)} = `;
    }
  }

  getSign = (i: number): string =>
  {
    const signs = [];

    if(this.hasAddition)
    {
      signs.push("+");
    }

    if(this.hasSubtraction)
    {
      signs.push("-");
    }

    if(this.hasMultiplication)
    {
      signs.push("x");
    }

    if(signs.length === 0)
    {
      return "+";
    }
    else
    {
      return signs[this.getNumber(i, 0, signs.length)];
    }
  }

  getNumber = (seed: number, min: number, max: number): number =>
  {
    return min + Math.floor(this.getRandom(seed) * (max-min+1));
  }

  getNumberString = (num: number): string =>
  {
    if(num < 0)
    {
      return `(${num})`;
    }
    else
    {
      return `${num}`;
    }
  }

  getNumberAsString = (seed: number, min: number, max: number): string =>
  {
    return this.getNumberString(this.getNumber(seed, min, max));
  }


  getRandom = (seed: number): number =>
  {
    return (Math.sin(this.count + seed * seed - seed) + 1) / 2;
  }

  refresh = (): void =>
  {
    this.count++;
  }

  togglePanel = (): void =>
  {
    this.hidePanel = !this.hidePanel;
  }
}
