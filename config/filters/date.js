import { DateTime } from "luxon";

const timeZone = 'America/Phoenix';

const toISO = (date) => {
    return (date instanceof Date)
        ? date.toISOString()
        : DateTime.fromISO(date).toISO();
};

const datePost = (date) => {
    const iso = toISO(date);
    return DateTime
        .fromISO(iso)
        .setZone(timeZone)
        .toFormat('MM/dd/yyyy');
};

// Sitemaps require the YYYY-MM-DD format
const dateSitemap = (date) => {
    const iso = toISO(date);
    return DateTime
        .fromISO(iso)
        .setZone(timeZone)
        .toFormat('yyyy-MM-dd');
}

export default {
    dateSitemap,
    datePost
};