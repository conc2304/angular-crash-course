import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'titleCase'
})

export class TitlePipe implements PipeTransform {  // this class should have the same form as the PipeForm interface
  transform(str: string) {
    if (!str) return null;
    console.log(str);

    let toLower: Array<string>;
    let toUppers: Array<string>;

    str = str.replace(/([^\W_]+[^\s-]*) */g, function (txt: string) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    // Certain minor words should be left lowercase unless
    // they are the first or last words in the string
    toLower = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
      'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
    for (let i = 0; i < toLower.length; i++)
      str = str.replace(new RegExp('\\s' + toLower[i] + '\\s', 'g'),
        function (txt) {
          return txt.toLowerCase();
        });

    // Certain words such as initialisms or acronyms should be left uppercase
    toUppers = ['Id', 'Tv'];
    for (let i = 0; i < toUppers.length; i++)
      str = str.replace(new RegExp('\\b' + toUppers[i] + '\\b', 'g'),
      toUppers[i].toUpperCase());
      console.log('BANBANAN');

    return str;
  }
}
