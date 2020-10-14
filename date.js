var d = new Date(); // getting whatever right nows timestamp
d = new Date(2020, 10, 14);
d = new Date('2020/10/14');
d = new Date('10/14/2020');
d = new Date('Oct 14, 2020 1:00:45 PM');

/**
 * 10/10/2020 

10/10/2020 11:30

10/10/2020 13:00

10/10/2020 13:30:45

October 10, 2020 11:00 PM

Oct 10, 2020 11:00 PM 

Oct 10 20 1:00:15 AM

10 10 20 1:00:15 AM
 */

console.log(d);

console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getTime());
d.setDate(15);
console.log(d.getDate());

var dateStr = '10/14/2050';
var dateObj = Date.parse(dateStr);
console.log(dateObj);
