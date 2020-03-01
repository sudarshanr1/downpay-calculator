import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-downpay-calculator",
  templateUrl: "./downpay-calculator.component.html",
  styleUrls: ["./downpay-calculator.component.scss"]
})
export class DownpayCalculatorComponent implements OnInit {
  constructor() {}
  public monthlyPayment: number;
  ngOnInit() {
    this.monthlyPayment = 0;
  }
  updateMonthlyPayment(data) {
    this.monthlyPayment = data;
  }
}
