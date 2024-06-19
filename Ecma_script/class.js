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
        console.log('asdadadssad', this.name)
        return this.name + this.age + this.address;
    }

    getSampleArray () {
        return this.sampleArray;
    }
}

var vechicle = new VechileContainer('Prakash', '26', 'asdas');
console.log('vechicle.getPrint()', vechicle.getPrint())


// class car extends VechileContainer {
//     price = "";

//     Constructor(name, age, address, price) {
//         super();
//     }

//     getArray ()
// }

// var car = new Car('data', 'sd', 'sd', '123');