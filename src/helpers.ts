export function datediff(date1: Date, date2: Date) {
  return Math.round((date2.valueOf() - date1.valueOf()) / 86400000);
}

export function changeTimezone(date: Date, newTimezone: string) {
  var invdate = new Date(
    date.toLocaleString("pt-BR", {
      timeZone: newTimezone,
    })
  );

  var diff = date.getTime() - invdate.getTime();

  return new Date(date.getTime() + diff);
}
