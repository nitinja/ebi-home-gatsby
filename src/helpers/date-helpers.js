export function formatISODate(isoInputDate, intlDateFormatType = "long") {
  const intl = new Intl.DateTimeFormat(undefined, {
    dateStyle: intlDateFormatType,
  });
  return intl.format(new Date(isoInputDate));
}

export function parseISODateFromTimeHtml(timeHtml) {
  return timeHtml.match(/\d{4}[\d-:T]*Z/)?.[0];
}

export function parseDateFromTimeHtml(timeHtml) {
  return new Date(timeHtml.match(/\d{4}[\d-:T]*Z/)?.[0]);
}
