const test = require('ava');
const unthen = require('.');

test('unthen', t => {
    t.true(true);
    t.is(unthen, unthen);
});
