import { Injectable } from "@angular/core";
import { Payment } from "../model/payment";

@Injectable({
  providedIn: "root"
})
export class DownpayService {
  constructor() {}
  //Mock number of months(no API)
  getSavingMonths() {
    const months = [];
    const years = 5;
    for (let i = 0; i < years * 12; i++) {
      months[i] = i + 1;
    }
    return months;
  }

  //Mock pay period(no API)
  getPayPeriod() {
    const years = [];
    for (let i = 0; i < 5; i++) {
      years[i] = (i + 1) * 10;
    }
    return years;
  }

  /* Returns monthy payment amount for the payment information */
  getMonthlyPayment(paymentInfo: Payment) {
    let downPayAmount = 0;
    let monthlyPayment = 0;
    let principalAmount = 0;
    let totalAmount = 0;
    let interest = 0;
    if (paymentInfo.amountPerMonth && paymentInfo.month) {
      downPayAmount =
        Number(
          paymentInfo.amountPerMonth
            .toString()
            .split("")
            .splice(1)
            .join("")
        ) * paymentInfo.month;
    }

    if (paymentInfo.interest.toString().includes("%")) {
      paymentInfo.interest = paymentInfo.interest
        .toString()
        .split("%")
        .join("");
    }

    principalAmount =
      Number(
        paymentInfo.principal
          .toString()
          .split("")
          .splice(1)
          .join("")
      ) - downPayAmount;

    interest = (principalAmount * Number(paymentInfo.interest)) / 100;
    totalAmount = principalAmount + interest;
    monthlyPayment = totalAmount / (paymentInfo.year * 12);

    return monthlyPayment;
  }
}
