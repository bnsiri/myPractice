class Siriaddition3 {

    add(a, b) {
        this.a = a;
        this.b = b;
        this.c = a + b;
    }

}

let k = new Siriaddition3();
k.add(2, 3);
console.log(this.a);

//

class Siris {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

}

let emp1 = new Siris(90,30);

console.log (emp1.a)