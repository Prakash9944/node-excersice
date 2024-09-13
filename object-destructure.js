/*
    * Object destructuring allows you to extract values from objects and assign them to variables in a concise way. It helps to simplify the process of accessing and using object properties.
*/

//1. Basic Object Destructuring

    const person = { name: "alice", age: 25, city: "New York" }
    const { name, age } = person;
    console.log("Name: ", name);
    console.log("Age: ", age)

// 2. Destructuring with Renaming Variables

    const car = { carName: "BMW", price: 25, model: 2015 }
    const { price: carPrice, carName: carBrandName } = car;
    console.log("Car Object ", carBrandName, carPrice);

// 3. Destructuring Nested Objects

    const employee = {
        employeeName: "Prakash",
        info: {
            country: "India",
            education: "Degree",
            professional: "IT"
        }
    }

    const { employeeName, info: { country, education, professional } } = employee;
    console.log("EMPLOYEENAME", employeeName)
    console.log("country", country)
    console.log("education", education)
    console.log("professional", professional)

// 4. Destructuring with the Rest Operator (...rest)
    // Rest operator (...rest) to collect remaining properties into a new object after Destructuring.
    const languages = { lang: "Tamil", level: "Read", state: "TamilNadu"};
    const { lang, ...otherProperties } = languages;
    console.log("Languages ", lang)
    console.log("Other props ", otherProperties)