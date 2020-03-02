import { TestBed } from "@angular/core/testing";

import { DownpayService } from "./downpay.service";
import { Payment } from "../model/payment";

describe("DownpayService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: DownpayService = TestBed.get(DownpayService);
    expect(service).toBeTruthy();
  });

  it("should return valid payment per month - 1", () => {
    const service: DownpayService = TestBed.get(DownpayService);
    let mockPayment: Payment = new Payment();
    mockPayment.interest = "2.5%";
    mockPayment.year = 20;
    mockPayment.principal = "$1500000";
    mockPayment.month = 1;
    mockPayment.amountPerMonth = "";
    expect(service.getMonthlyPayment(mockPayment)).toEqual(6406.25);
  });

  it("should return valid payment per month - 2", () => {
    const service: DownpayService = TestBed.get(DownpayService);
    let mockPayment: Payment = new Payment();
    mockPayment.interest = "2.5%";
    mockPayment.year = 10;
    mockPayment.principal = "$1500000";
    mockPayment.month = 1;
    mockPayment.amountPerMonth = "";
    expect(service.getMonthlyPayment(mockPayment)).toEqual(6406.25 * 2);
  });

  it("should return valid payment per month - 3", () => {
    const service: DownpayService = TestBed.get(DownpayService);
    let mockPayment: Payment = new Payment();
    mockPayment.interest = "2.5%";
    mockPayment.year = 20;
    mockPayment.principal = "$1500000";
    mockPayment.month = 5;
    mockPayment.amountPerMonth = "$10000";
    expect(service.getMonthlyPayment(mockPayment)).toEqual(6192.708333333333);
  });
});
