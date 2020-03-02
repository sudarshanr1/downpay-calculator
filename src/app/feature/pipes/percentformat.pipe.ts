import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "percentformat"
})
export class PercentformatPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `${value
      .toString()
      .split("%")
      .join("")}%`;
  }
}
