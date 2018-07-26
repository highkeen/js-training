var obj = Object.create({ name: 'samik' });
console.log(obj);

var obj = Object.defineProperties({}, {
        'PP1': {
            value: 'samik',
            writable: false,
            enumerable: false
        }
});