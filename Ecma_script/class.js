class VechileContainer  {
    name = '';
    age = '';
    address = '';
    sampleArray = [];

    Constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getPrint() {
        console.log(this.name + this.age + this.address)
        return this.name + this.age + this.address;
    }

    getSampleArray () {
        return this.sampleArray;
    }
}

var vechicle = new VechileContainer('Prakash', '26', 'asdas');
console.log('vechicle.getPrint()', vechicle.name)


class car extends VechileContainer {
    price = "";

    Constructor(name, age, address, price) {
        super();
    }

    getArray ()
}

var car = new Car('data', 'sd', 'sd', '123');