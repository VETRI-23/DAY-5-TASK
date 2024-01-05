class person{
    constructor(name, height, weight, age, colour, qualification, city, state) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.colour = cplour;
        this.qualification = qualification;
        this.city = city;
        this.state = state;
    }
    details() {
      console.log(`
        name:${this.name}
        height:${this.height}
        weight:${this.weight}
        age:${this.age}
        color:${this.colour}
        qualification:${this.qualification}
        city:${this.city}
        state:${this.state}`)   
    }
}
let person1 = new person("Logan", "6.2", "85", "24", "Australian", "B.E", "chennai", "tamilnadu")
person1.details()
