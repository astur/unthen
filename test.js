const test = require('ava');
const unthen = require('.');
const type = v => ({}).toString.call(v).slice(8, -1);

test('error', async t => {
    const p = unthen(new Error());
    t.is(type(p), 'Promise');
    const r = await p;
    t.deepEqual(r, [new Error()]);
});

test('not promise', async t => {
    const p = unthen(1);
    t.is(type(p), 'Promise');
    const r = await p;
    t.deepEqual(r, [null, 1]);
});

test('resolve', async t => {
    const p = unthen(Promise.resolve(1));
    t.is(type(p), 'Promise');
    const r = await p;
    t.deepEqual(r, [null, 1]);
});

test('reject', async t => {
    const p = unthen(Promise.reject(new Error()));
    t.is(type(p), 'Promise');
    const r = await p;
    t.deepEqual(r, [new Error()]);
});
