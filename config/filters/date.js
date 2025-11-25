import { DateTime } from "luxon";

const timeZone = 'America/Phoenix';

const datePost = (date) => {
	const myDate = DateTime.fromISO(date.toISOString()).setZone(timeZone).toFormat('MM/dd/yyyy')
    return myDate;
}

// Sitemaps require the YYYY-MM-DD format
const dateSitemap = (date) => {
	const myDate = DateTime.fromISO(date.toISOString()).setZone(timeZone).toFormat('yyyy-MM-dd')
    return myDate;
}

export default {
	dateSitemap,
    datePost
};