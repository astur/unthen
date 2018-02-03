module.exports = p =>
    p instanceof Error ? Promise.resolve([p]) : typeof p.then === 'function' ? p.then(r => [null, r], e => [e]) : Promise.resolve([null, p]);
