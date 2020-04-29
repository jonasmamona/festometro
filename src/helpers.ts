export function datediff(date1: Date, date2: Date) {
  console.log("data 1 " + date1);
  console.log("data 2 " + date2);

  let result = Math.round((date2.valueOf() - date1.valueOf()) / 86400000);

  if (isNaN(result)) {
    return 0;
  }

  return result;
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
