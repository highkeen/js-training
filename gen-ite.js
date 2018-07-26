class RangeGenerator {
    constructor(max) {
        this.max = max;
        this.count = 0;
    }
    next() {
        this.count++;
        return {
            value: this.count <= this.max ? this.count : undefined,
            done: this.count >this.max
        }
    }
}

var rg = new RangeGenerator(10);

while (true) {
    var n = rg.next();
    if (n.done) break;
    console.log(n.value);
}

