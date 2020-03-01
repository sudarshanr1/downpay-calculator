import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dollarformat"
})
export class DollarformatPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `$${value.toFixed(2)}`;
  }
}
