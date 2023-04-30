# what is call bind apply

# what is curring javascript

# what is normal funciton differnce between arraow funciton

# how to improve the query performnce in mongodb index


    var person = {
        name: "A"
    }

    var new_person = person
    new_person.name = "B"

    console.log(new_person.name)
    console.log(person.name)

    const object= {
        name: "Arun",
        showName: function(){
            return this.name
        },
        show_name: () => {
            // console.log('this.name', object.name)
            return object.name
        }
    }

    console.log(object.showName())
    console.log(object.show_name())


    var person = {
        name: "A"
    }

    var new_person = person
    new_person.name = "B"

    console.log(new_person.name)
    console.log(person.name)


    let array = [1, 4, 7, 3, 2, 6]
    let Sum = 9;

    for(let i =0; i < array.length; i++) {
        for (let j =0; j < array.length; j++) {
            let a = array[i];
            let b = array[j]

            let c = a + b;
            if(c == Sum) {
                console.log("Pair number: ", a , b)
            }
        }
    }