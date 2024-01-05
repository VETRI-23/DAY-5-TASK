class Uber_price{
    constructor(distance) {
        this.distance = distance;

    }
    getprice() {
        return (this.distance ) * 20;
    }
}
let uber = new Uber_price(10);
console.log(uber.getprice());
