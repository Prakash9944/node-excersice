### What is a Collection in MongoDB

    1 A collection in MongoDB is a group of documents. If a document is the MongoDB analog of a row in a relational database

### MongoDB stages

    1. Mongodb stages are independent and all stage operator prepended by dollar sign

        {$match: {query}}

### $Match stage Operator

    1. { $match: { query } }

        Example:

            db.employee.renameCollection("person")

            { $match: { city: 'New York' } }

            { $match: { age: { $gt: 25 } } }

            { $match: { $and: [{ gender: "female" }, {age: { $gt: 25 }}] } }

            db.person.aggregate([{$match: {ages: {$gt: 93}}}])

            db.person.aggregate([{$match: {tags: {$size: 3}}}]) // The $size operator matches any array with the number of elements specified by the argument.

            { "_id" : ObjectId("614d6fd341d4e3f1cfa9c9da"), "name" : "prakash", "gender" : "male", "age" : 95 }
            { "_id" : ObjectId("614d6fda41d4e3f1cfa9c9ec"), "name" : "prakash", "gender" : "male", "age" : 95 }
            { "_id" : ObjectId("614d6fdb41d4e3f1cfa9c9fe"), "name" : "prakash", "gender" : "male", "age" : 95 }
            { "_id" : ObjectId("614d6fdb41d4e3f1cfa9ca10"), "name" : "prakash", "gender" : "male", "age" : 95 }
            { "_id" : ObjectId("614d6fdc41d4e3f1cfa9ca22"), "name" : "prakash", "gender" : "male", "age" : 95 }
            { "_id" : ObjectId("614d6fdc41d4e3f1cfa9ca34"), "name" : "prakash", "gender" : "male", "age" : 95 }
            { "_id" : ObjectId("614d6fdd41d4e3f1cfa9ca46"), "name" : "prakash", "gender" : "male", "age" : 95 }
            { "_id" : ObjectId("614d6fdd41d4e3f1cfa9ca58"), "name" : "prakash", "gender" : "male", "age" : 95 }
            { "_id" : ObjectId("614d6fde41d4e3f1cfa9ca6a"), "name" : "prakash", "gender" : "male", "age" : 95 }
            { "_id" : ObjectId("614d6ff241d4e3f1cfa9ca7c"), "name" : "prakash", "gender" : "male", "age" : 95 }


### $Group stage Operator

     1. {
          $group:
            {
              _id: <expression>,
              <field1>: { <accumulator1> : <expression1> },
            }
         }

         Example:

            db.person.aggregate([{ $group: { _id: "$age"} }]) // $age is an expression and its an input value of the mongoDB fields
            { "_id" : 95 }
            { "_id" : 25 }
            { "_id" : 56 }
            { "_id" : 59 }
            { "_id" : 35 }
            { "_id" : 29 }
            { "_id" : 15 }

            db.person.aggregate([{$group: {_id: '$gender'}}])
            { "_id" : "transgender" }
            { "_id" : "female" }
            { "_id" : "mentor" }
            { "_id" : "male" }

      2. Group by nested fields in person collections

         db.person.aggregate([{$group: {_id: '$company.location.country'}}]);

      3. Group by multiple fields in a collections

         db.person.aggregate([{ $group: {_id: {age: '$age', gender: '$gender'}} }]) // Group by multiple field. value will be an object type { age, gender }


### $match and $Group stage Operator together

    1. $match and $Group

       db.person.aggregate([{$match: { favoriteFruit: 'apple' }}, {$group: {_id: '$age'}}]) // Multiple stage here Stage1 and Stage2

    2. Here change the order $Group and $match

       db.person.aggregate([{ $group: {_id: {age: '$age', name: '$name'}}}, {$match: { favoriteFruit: 'apple' }}]) // Multiple wrong stage operations

       db.person.aggregate([{ $group: {_id: {age: '$age', name: '$name'}}}, {$match: { "_id.age": {$gt: 29} }}])
        { "_id" : { "age" : 35, "name" : "prakash" } }
        { "_id" : { "age" : 95, "name" : "prakash" } }
        { "_id" : { "age" : 56, "name" : "raj" } }
        { "_id" : { "age" : 59, "name" : "david" } }

       db.person.aggregate([{ $group: {_id: {age: '$age', name: '$name'}}}, {$match: { "_id.age": 35 }}])
       { "_id" : { "age" : 35, "name" : "prakash" } }

### $Count stage Operator

    1. Count the number of input documents

        { $count: "<tittle>" }

        Example:

          db.person.aggregate([{$count: 'Count' }])
          { "Count" : 358 }

    2. Different count methods

        db.person.aggregate([]).toArray().length

### $Group and $count

    1. $Group and $count

        db.person.aggregate([{ $group: {_id: '$name'}}])
        { "_id" : "david" }
        { "_id" : "mala" }
        { "_id" : "prakash" }
        { "_id" : "prakashraj" }
        { "_id" : "raj" }
        { "_id" : "suganya" }

        db.person.aggregate([{ $group: {_id: '$name'}}, {$count: 'nameCount'}])
        { "nameCount" : 6 }

### $match and $Group and $count

    1. $match and $Group and $count

        db.person.aggregate([ {$match: {age: {$gt: 25}} },{ $group: {_id: '$name'}}, {$count: 'nameCount'}])
        { "nameCount" : 3 }

### $Sort

    1. { $sort: { <field>: <-1 || 1>, <field2>: <-1 || 1> } } // -1 mean sort will descending and 1 mean ascending

        db.person.aggregate([{$group: {_id: '$company.location.country'}}, {$sort: {_id: 1}}])

        db.person.aggregate([{$sort: {name: 1 }}]) // Sorted by alphabetical order

### $group and $sort

      db.person.aggregate([{$group: { _id: '$favoriteFruit' }}, { $sort: { _id: 1 }}])
        { "_id" :  null }
        { "_id" : "aplle" }
        { "_id" : "apple" }
        { "_id" : "banana" }
        { "_id" : "orange" }
        { "_id" : "strawberry" }

### $project is exclude fields and include fields

    1. { $project: { <field1>: <1>, <field2>: <0> } }

       db.person.aggregate({ $project: {name: '$name', gender: '$gender'}})
        { "name" : "prakash", "gender" : "male" }
        { "name" : "prakash", "gender" : "male" }
        { "name" : "prakash", "gender" : "male" }
        { "name" : "prakash", "gender" : "male" }
        { "name" : "prakash", "gender" : "male" }
        { "name" : "prakash", "gender" : "male" }
        { "name" : "prakash", "gender" : "male" }
        { "name" : "prakash", "gender" : "male" }

       db.person.aggregate({$project: {_id: 0, name: '$name', gender: '$gender'}})

       db.person.aggregate([ { $match: {age: {$gt: 24 }}}, {$group: {_id: '$gender', count: {$sum: 1}}}])

### $limit stage

    1. { $limit : <number> }

        Example: { $limit: 100 }

        db.person.aggregate([{$limit: 100}, {$match: { favoriteFruit: 'apple' }}, {$group: {_id: '$name'}}])
        { "_id" : "prakashraj" }
        { "_id" : "mala" }
        { "_id" : "prakash" }
        { "_id" : "suganya" }

        db.person.aggregate([{$group: {_id: "$tags"}}]) // If u want group by value of an array use unwind function in mongoDB
        { "_id" : [ "jenkins", "java", "bootstrap" ] }
        { "_id" : [ "css", "html", "nodejs" ] }
        { "_id" : [ "pug", "jade", "javascript" ] }
        { "_id" : [ "backend", "php" ] }
        { "_id" : [ "backend", "php", "frontend" ] }
        { "_id" : null }


### $unwind stage

    1. If u want group by value of an array use unwind function in mongoDB

        { $unwind: <arrayReferenceExpression> }

        db.person.aggregate([{ $unwind: "$tags"}])
        { "_id" : ObjectId("614d975741d4e3f1cfa9ca8d"), "name" : "raj", "gender" : "male", "age" : 56, "tags" : "css" }
        { "_id" : ObjectId("614d975741d4e3f1cfa9ca8d"), "name" : "raj", "gender" : "male", "age" : 56, "tags" : "html" }
        { "_id" : ObjectId("614d975741d4e3f1cfa9ca8d"), "name" : "raj", "gender" : "male", "age" : 56, "tags" : "nodejs" }
        { "_id" : ObjectId("614d978641d4e3f1cfa9ca8e"), "name" : "david", "gender" : "female", "age" : 59, "tags" : "pug" }
        { "_id" : ObjectId("614d978641d4e3f1cfa9ca8e"), "name" : "david", "gender" : "female", "age" : 59, "tags" : "jade" }
        { "_id" : ObjectId("614d978641d4e3f1cfa9ca8e"), "name" : "david", "gender" : "female", "age" : 59, "tags" : "javascript" }


        db.person.aggregate([{ $unwind: "$tags"}, {$group : {_id: '$tags'}}])
        { "_id" : "jenkins" }
        { "_id" : "javascript" }
        { "_id" : "bootstrap" }
        { "_id" : "frontend" }
        { "_id" : "nodejs" }
        { "_id" : "css" }
        { "_id" : "pug" }
        { "_id" : "jade" }
        { "_id" : "backend" }
        { "_id" : "html" }
        { "_id" : "java" }
        { "_id" : "php" }

        db.person.aggregate([{ $unwind: "$tags"}, {$group : {_id: '$tags'}}, {$count: 'tages'}])
        { "tages" : 12 }

### Accumulators are special operators inside the aggregation

    # Most accumulators are used only in the $group stages

    1. $sum

    2. $avg

    3. $max

    4. $min

    #  Accumulators maintain state for each group of the documents

    { $<accumulatorOperator>: <expression> }

    Example:

        { $sum: "$quantity" }

### $sum accumulator

    1. Sum numeric values of the documents in each group

    { $sum: <expression | number> }

    Example:
        {total: { $sum: '$quantity' }}

        db.person.aggregate([{$group: {_id: "$favoriteFruit", count: {$sum: 1}}}])
        { "_id" : null, "count" : 259 }
        { "_id" : "aplle", "count" : 3 }
        { "_id" : "strawberry", "count" : 35 }
        { "_id" : "banana", "count" : 13 }
        { "_id" : "apple", "count" : 14 }
        { "_id" : "orange", "count" : 34 }

### $sum, $unwind and $group

    1. db.person.aggregate([{$unwind: "$tags"}, {$group: {_id: "$tags", count: {$sum: 1}}}])

        { "_id" : "jenkins", "count" : 1 } // Group by tags and count using $sum accumulator
        { "_id" : "javascript", "count" : 13 }
        { "_id" : "bootstrap", "count" : 1 }
        { "_id" : "frontend", "count" : 14 }
        { "_id" : "nodejs", "count" : 1 }
        { "_id" : "css", "count" : 1 }
        { "_id" : "pug", "count" : 13 }
        { "_id" : "jade", "count" : 13 }
        { "_id" : "backend", "count" : 60 }
        { "_id" : "html", "count" : 1 }
        { "_id" : "java", "count" : 1 }
        { "_id" : "php", "count" : 60 }

### $avg accumulator

    1. calculate the average value of the certain values in the documents

    { $avg: <expression> } // expression refer to the input documents

    db.person.aggregate([{ $group: {_id: "$name", avg: {$avg: "$age"}}}])
    { "_id" : "suganya", "avg" : 25 }
    { "_id" : "prakashraj", "avg" : 25 }
    { "_id" : "david", "avg" : 59 }
    { "_id" : "prakash", "avg" : 31.675324675324674 }
    { "_id" : "mala", "avg" : 25 }
    { "_id" : "raj", "avg" : 56 }


### Unary Operators

    ### accumulator perform the group of the value that is called accumulator

    ### Unary operator usually used to project stage

    1. $type

    2. $or

    3. $lt

    4. $gt

    5. $and

    6. $multiply

### type Operators

    { $type: <expression> } // expression are refer to the field name

    db.person.aggregate([{$project: {name: 1, fruit: {$type: "$favoriteFruit"}, age: {$type: "$age"}}}])
    { "_id" : ObjectId("614d6fd341d4e3f1cfa9c9da"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
    { "_id" : ObjectId("614d6fd341d4e3f1cfa9c9db"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
    { "_id" : ObjectId("614d6fd341d4e3f1cfa9c9dc"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
    { "_id" : ObjectId("614d6fd341d4e3f1cfa9c9dd"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
    { "_id" : ObjectId("614d6fd341d4e3f1cfa9c9de"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
    { "_id" : ObjectId("614d6fd341d4e3f1cfa9c9df"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
    { "_id" : ObjectId("614d6fd341d4e3f1cfa9c9e0"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
    { "_id" : ObjectId("614d6fd341d4e3f1cfa9c9e1"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
    { "_id" : ObjectId("614d6fd341d4e3f1cfa9c9e2"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
    { "_id" : ObjectId("614d6fd341d4e3f1cfa9c9e3"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
    { "_id" : ObjectId("614d6fd341d4e3f1cfa9c9e4"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
    { "_id" : ObjectId("614d6fd341d4e3f1cfa9c9e5"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
    { "_id" : ObjectId("614d6fd341d4e3f1cfa9c9e6"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
    { "_id" : ObjectId("614d6fda41d4e3f1cfa9c9e7"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
    { "_id" : ObjectId("614d6fda41d4e3f1cfa9c9e8"), "name" : "suganya", "fruit" : "missing", "age" : "double" }


### MONGODB EXCERSIZE FOR KNOWLEDGE

##  db.person.aggregate([{$match: {age: {$gt: 35 }}}, {$group: {_id: '$gender', count: {$sum: 1}}}])
    { "_id" : "male", "count" : 11 }
    { "_id" : "female", "count" : 74 }

## db.sales.aggregate([{$group: {_id: '$quantity'}, total: {$sum: 1}}]) // This is absolutely wrong
    Error: command failed: {
        "ok" : 0,
        "errmsg" : "A pipeline stage specification object must contain exactly one field.",
        "code" : 40323,
        "codeName" : "Location40323"
    } : aggregate failed :

## db.sales.aggregate([{$group: {_id: '$quantity', total: {$sum: 1}}}]) // Here we are grouped by quantity and each group quantity count
    { "_id" : 20, "total" : 1 }
    { "_id" : 2, "total" : 1 }
    { "_id" : 1, "total" : 1 }
    { "_id" : 5, "total" : 2 }
    { "_id" : 10, "total" : 3 }

## db.person.aggregate([{$group: {_id: {age: "$age", gender: "$gender"}, sum: {$sum: 1}}}]) // Here we  grouped multiple field and each group count
    { "_id" : { "age" : 35, "gender" : "female" }, "sum" : 40 }
    { "_id" : { "age" : 59, "gender" : "female" }, "sum" : 74 }
    { "_id" : { "age" : 15, "gender" : "female" }, "sum" : 11 }
    { "_id" : { "age" : 56, "gender" : "male" }, "sum" : 1 }
    { "_id" : { "age" : 15, "gender" : "mentor" }, "sum" : 1 }
    { "_id" : { "age" : 95, "gender" : "male" }, "sum" : 10 }
    { "_id" : { "age" : 25, "gender" : "female" }, "sum" : 10 }
    { "_id" : { "age" : 29, "gender" : "transgender" }, "sum" : 2 }
    { "_id" : { "age" : 25, "gender" : "male" }, "sum" : 199 }
    { "_id" : { "age" : 29, "gender" : "female" }, "sum" : 10 }

## db.person.aggregate([{$group: {_id: '$company.location.country'}}])
    { "_id" : null }
    { "_id" : "usa" }
    { "_id" : "paris" }
    { "_id" : "australia" }
    { "_id" : "london" }
    { "_id" : "canada" }

## db.person.aggregate([{$group: {_id: {sex: '$gender', count: {$sum: 1} }}}])
    { "_id" : { "sex" : "female", "count" : 1 } }
    { "_id" : { "sex" : "female", "country" : "australia", "count" : 1 } }
    { "_id" : { "sex" : "transgender", "count" : 1 } }
    { "_id" : { "sex" : "female", "country" : "canada", "count" : 1 } }
    { "_id" : { "sex" : "female", "country" : "usa", "count" : 1 } }
    { "_id" : { "sex" : "female", "country" : "london", "count" : 1 } }
    { "_id" : { "sex" : "male", "count" : 1 } }
    { "_id" : { "sex" : "female", "country" : "paris", "count" : 1 } }
    { "_id" : { "sex" : "mentor", "count" : 1 } }

## db.person.aggregate([{$group: {_id: {sex: '$gender', country: '$company.location.country'}, count: {$sum: 1} }}])
    { "_id" : { "sex" : "mentor" }, "count" : 1 }
    { "_id" : { "sex" : "female", "country" : "paris" }, "count" : 16 }
    { "_id" : { "sex" : "female", "country" : "london" }, "count" : 8 }
    { "_id" : { "sex" : "female", "country" : "australia" }, "count" : 8 }
    { "_id" : { "sex" : "female", "country" : "canada" }, "count" : 8 }
    { "_id" : { "sex" : "female", "country" : "usa" }, "count" : 5 }
    { "_id" : { "sex" : "male" }, "count" : 210 }
    { "_id" : { "sex" : "female" }, "count" : 100 }
    { "_id" : { "sex" : "transgender" }, "count" : 2 }

## db.person.aggregate([{$group: {_id: {age:"$age"}}}, {$match: {"_id.age": {$gt: 40 }}}])
    { "_id" : { "age" : 95 } }
    { "_id" : { "age" : 59 } }
    { "_id" : { "age" : 56 } }

## db.person.aggregate([{$group: {_id: '$company.location.country'}}, {$sort: {_id: 1}}])
    { "_id" : null }
    { "_id" : "australia" }
    { "_id" : "canada" }
    { "_id" : "london" }
    { "_id" : "paris" }
    { "_id" : "usa" }

## db.person.aggregate({$project: {_id: 0, name: '$name', gender: '$gender'}})
    { "name" : "prakash", "gender" : "male" }
    { "name" : "suganya", "gender" : "male" }
    { "name" : "mala", "gender" : "female" }
    { "name" : "prakashraj", "gender" : "male" }
    { "name" : "prakash", "gender" : "male" }
    { "name" : "prakash", "gender" : "male" }
    { "name" : "prakash", "gender" : "male" }
