const assert = require('assert');
const LOCATIONS = require('./locations.js');

assert(Array.isArray(LOCATIONS) && LOCATIONS.length > 300, `expected 300+ locations, got ${LOCATIONS.length}`);
for (const loc of LOCATIONS) {
  assert(loc.n && typeof loc.n === 'string', `missing name: ${JSON.stringify(loc)}`);
  assert(loc.c && typeof loc.c === 'string', `missing category: ${loc.n}`);
  assert(typeof loc.lat === 'number' && loc.lat >= -90 && loc.lat <= 90, `bad lat: ${loc.n}`);
  assert(typeof loc.lng === 'number' && loc.lng >= -180 && loc.lng <= 180, `bad lng: ${loc.n}`);
}
console.log(`OK: ${LOCATIONS.length} locations validated`);
