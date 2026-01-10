import { DateTime } from "luxon";

const timeZone = "America/Phoenix";

const toDateTime = (date) => {
return date instanceof Date 
    ? DateTime.fromJSDate(date, { zone: timeZone }) 
    : DateTime.fromISO(date, { zone: timeZone });
};

const datePost = (date) => {
  return toDateTime(date)
    .startOf("day")
    .toFormat("MM/dd/yyyy");
};

// Sitemaps require the YYYY-MM-DD format
const dateSitemap = (date) => {
  return toDateTime(date)
    .startOf("day")
    .toFormat("yyyy-MM-dd");
};

export default {
  dateSitemap,
  datePost
};