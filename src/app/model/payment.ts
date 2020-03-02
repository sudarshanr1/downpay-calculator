export class Payment {
  year: number;
  interest: string;
  principal: number;
  month: number;
  amountPerMonth: number;
  constructor() {
    this.interest = "2.5%"; //Default value
  }
}
