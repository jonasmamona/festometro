export function datediff(date1: Date, date2: Date) {
  const millisecondsInADay = 86400000;
  return Math.floor((date2.valueOf() - date1.valueOf()) / millisecondsInADay);
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
