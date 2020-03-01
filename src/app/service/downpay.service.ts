import { Injectable } from "@angular/core";
import { Payment } from "../model/payment";

@Injectable({
  providedIn: "root"
})
export class DownpayService {
  constructor() {}

  getSavingMonths() {
    const months = [];
    const years = 5;
    for (let i = 0; i < years * 12; i++) {
      months[i] = i + 1;
    }
    return months;
  }

  getPayPeriod() {
    const years = [];
    for (let i = 0; i < 5; i++) {
      years[i] = (i + 1) * 10;
    }
    return years;
  }

  getMonthlyPayment(paymentInfo: Payment) {
    let downPayAmount = 0;
    let monthlyPayment = 0;
    let principalAmount = 0;
    let totalAmount = 0;
    let interest = 0;
    if (paymentInfo.amountPerMonth && paymentInfo.month) {
      downPayAmount = paymentInfo.amountPerMonth * paymentInfo.month;
    }

    principalAmount = paymentInfo.principal - downPayAmount;
    interest = (principalAmount * paymentInfo.interest) / 100;
    totalAmount = principalAmount + interest;
    monthlyPayment = totalAmount / (paymentInfo.year * 12);

    return monthlyPayment;
  }
}
