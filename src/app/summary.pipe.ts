import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {  // this class should have the same form as the PipeForm interface
  transform(value: string, limit?: number) {
    if (!value) return null;
    console.log(value);

    let actualLimit = (limit) ? limit : 50;
    return value.substr(0, actualLimit) + '...';

  }
}
