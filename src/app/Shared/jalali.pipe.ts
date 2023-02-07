import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jalali'
})
export class JalaliPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return '-';

    let d = new Date(value);

    if (!args || args == 'undefined') {
      return d.toLocaleDateString('fa-IR');
    }

    switch (args) {
      case 'showtime':
        return (
          d.toLocaleTimeString('fa-IR', {
            hour: '2-digit',
            minute: '2-digit',
          }) +
          ' ' +
          d.toLocaleDateString('fa-IR')
        );
        break;

      default:
        break;
    }

    //  let m = moment(value);
    // m.locale('fa').utc(true);
    //  return m.format('YYYY/MMMM/D');

    //   console.log(today);
  }

}
