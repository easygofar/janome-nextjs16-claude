// URL slug for a machine model. Models such as "Jem Gold" or "SKYLINE S3"
// contain spaces, which are invalid in sitemap <loc> values and ugly in URLs.
// Case is kept so existing URLs (e.g. /MC500E/) do not change.
export const modelSlug = (model) => String(model).trim().replace(/\s+/g, "-");
