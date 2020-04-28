export function datediff(date1: Date, date2: Date) {
  return Math.round((date2.valueOf() - date1.valueOf()) / 86400000);
}
