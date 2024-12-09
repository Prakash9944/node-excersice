1. What is a Collection in MongoDB

    # Answer:-
        A collection in MongoDB is a group of documents. If a document is the MongoDB analog of a row in a relational database

2. MongoDB Lookup
    The $lookup operator is an aggregation operator or an aggregation stage, which is used to join a document from one collection to a document of another collection of the same database based on some queries. Both the collections should belong to the same databases

    # Answer:-
        {
           $lookup:
             {
               from: <collection to join>,
               localField: <field from the input documents>,
               foreignField: <field from the documents of the "from" collection>,
               as: <output array field>
             }
        }

        1. db.orders.aggregate( [ { $lookup: { from: "inventory", localField: "item", foreignField: "sku", as: "inventory_docs" } } ] )

        2. db.orders.aggregate([{$lookup: {from: 'inventory', localField: 'item', foreignField: 'sku', as: 'matcheddocs'}}])

        3. db.orders.aggregate([{$lookup: {from: 'inventory', localField: "item", foreignField: "sku", as: "matchedCollecctions"}}, {$match: {qty: {$gt: 222}}}])

        4. db.orders.aggregate([{$lookup: {from: 'inventory', localField: 'item', foreignField: 'sku', as: 'matched'}}, {$match: {price: {$gte: 40}}}, {$group: {_id: '$item', vegCounts: {$sum: 1}}}])

            { "id" : "carrot", "vegCounts" : 2 }
            { "id" : "pecans", "vegCounts" : 1 }
            { "id" : "almonds", "vegCounts" : 1 }

        5. db.orders.aggregate([{$lookup: {from: "inventory", localField: "item", foreignField: "sku", as: "matched"}}, {$match: {"price" : {$gt: 40}}}]).pretty()
                {
                    "`_id`" : 16,
                    "item" : "almonds",
                    "price" : 42,
                    "quantity" : 2,
                    "matched" : [
                        {
                            "`_id`" : 23,
                            "sku" : "almonds",
                            "description" : "product 1",
                            "instock" : 120
                        },
                        {
                            "`_id`" : 27,
                            "sku" : "almonds",
                            "description" : "product 1",
                            "instock" : 120
                        }
                    ]
                }

        6. db.orders.aggregate([{$lookup: {from: "inventory", localField: "item", foreignField: "sku", as: "matched"}}, {$match: {"matched._id" : 23}}]).pretty()

        7. db.orders.aggregate([{$lookup: {from: "inventory", localField: "item", foreignField: "sku", as: "matched"}}, {$match: {"matched.description": "product 4"}}].pretty()
            {
                "`_id`" : 26,
                "item" : "pecans",
                "price" : 40,
                "quantity" : 26,
                "matched" : [
                    {
                        "`_id`" : 26,
                        "sku" : "pecans",
                        "description" : "product 4",
                        "instock" : 70
                    },
                    {
                        "`_id`" : 30,
                        "sku" : "pecans",
                        "description" : "product 4",
                        "instock" : 70
                    }
                ]
            }

3. MongoDB stages

    # Answer:-
        1. Mongodb stages are independent and all stage operator prepended by dollar sign
            { $match: {query} }

        2. Stages Types:-
            1. $count
            2. $group
            3. $limit
            4. $lookup
            5. $match
            6. $merge
            7. $sort
            8. $project
            9. $unwind
            10. $unset

4. What is expression?

    # Answer:-
        * Expression refer to the name of the input document
         "$<fieldNam>"

5. What is $Match stage Operator?

    # Answer:-
        1. { $match: { query } }

            Example:
                db.employee.renameCollection("person")

                { $match: { city: 'New York' } }

                { $match: { age: { $gt: 25 } } }

                { $match: { $and: [{ gender: "female" }, {age: { $gt: 25 }}] } }

                db.person.aggregate([{$match: {ages: {$gt: 93}}}])

                db.person.aggregate([{$match: {tags: {$size: 3}}}]) // The $size operator matches any array with the number of elements specified by the argument.

                db.complex.aggregate([{$match: {arrayOfValues: {$size: 2}}}]) { "id" : ObjectId("5407c76b7b1c276c74f90525"), "field" : "x", "arrayOfValues" : [ "b", "c" ] } { "id" : ObjectId("5407c76b7b1c276c74f90527"), "field" : "x", "arrayOfValues" : [ "a", "c" ] }

                db.person.insert([{ "_.id" : ObjectId("614d6fd341d4e3f1cfa9c9da"), "name" : "prakash", "gender" : "male", "age" : 55 }, { "_.id" : ObjectId("614d6fda41d4e3f1cfa9c9ec"), "name" : "prakash", "gender" : "male", "age" : 5 }, { "_.id" : ObjectId("614d6fdb41d4e3f1cfa9c9fe"), "name" : "prakash", "gender" : "male", "age" : 15 }, { "_.id" : ObjectId("614d6fdb41d4e3f1cfa9ca10"), "name" : "prakash", "gender" : "male", "age" : 25 }, { "_.id" : ObjectId("614d6fdc41d4e3f1cfa9ca22"), "name" : "prakash", "gender" : "male", "age" : 35 }, { "_.id" : ObjectId("614d6fdc41d4e3f1cfa9ca34"), "name" : "prakash", "gender" : "male", "age" : 45 }, { "_.id" : ObjectId("614d6fdd41d4e3f1cfa9ca46"), "name" : "prakash", "gender" : "male", "age" : 51 }, { "_.id" : ObjectId("614d6fdd41d4e3f1cfa9ca58"), "name" : "prakash", "gender" : "male", "age" : 51 }, { "_.id" : ObjectId("614d6fde41d4e3f1cfa9ca6a"), "name" : "prakash", "gender" : "male", "age" : 35 }, { "_.id" : ObjectId("614d6ff241d4e3f1cfa9ca7c"), "name" : "prakash", "gender" : "male", "age" : 55 }])

6. $Group stage Operator?

    # Answer:-

     1. {
          $group:
            {
              id: <expression>,
              <field1>: { <accumulator1> : <expression1> },
            }
         }

         Example:
            1. db.orders.aggregate([{$group: {id: "$item", count: {$sum: "$price"}}}]);
                { "id" : "almonds", "count" : 117 }
                { "id" : "pecans", "count" : 40 }
                { "id" : "tomato", "count" : 90 }
                { "id" : "carrot", "count" : 110 }

            2. db.person.aggregate([{ $group: { id: "$age"} }]) // $age is an expression and its an input value of the mongoDB fields
                { "id" : 95 }
                { "id" : 25 }
                { "id" : 56 }
                { "id" : 59 }
                { "id" : 35 }
                { "id" : 29 }
                { "id" : 15 }

            3. db.person.aggregate([{$group: {id: '$gender'}}])
                { "id" : "transgender" }
                { "id" : "female" }
                { "id" : "mentor" }
                { "id" : "male" }

            4. Group BY Multiple Field
                db.orders.aggregate([{$group: {id: {test: "$item", pricee: "$price"}}}])
                { "id" : { "test" : "almonds", "pricee" : 25 } }
                { "id" : { "test" : "tomato", "pricee" : 20 } }
                { "id" : { "test" : "tomato", "pricee" : 30 } }
                { "id" : { "test" : "carrot", "pricee" : 30 } }
                { "id" : { "test" : "almonds", "pricee" : 42 } }
                { "id" : { "test" : "pecans", "pricee" : 40 } }
                { "id" : { "test" : "carrot", "pricee" : 40 } }

            5. Group BY count
                db.orders.aggregate([{$group: {id: "$item", count: {$sum: 1}}}])
                { "id" : "almonds", "count" : 4 }
                { "id" : "tomato", "count" : 4 }
                { "id" : "carrot", "count" : 3 }
                { "id" : "pecans", "count" : 1 }

      2. Group by nested fields in person collections
            db.person.aggregate([{$group: {_id: '$company.location.country'}}]);

      3. Group by multiple fields in a collections
            db.person.aggregate([{ $group: {_id: {age: '$age', gender: '$gender'}} }]) // Group by multiple field. value will be an object type { age, gender }

7. $match and $Group stage Operator together

    # Answer:-

        1. $match and $Group
           db.person.aggregate([{$match: { favoriteFruit: 'apple' }}, {$group: {_id: '$age'}}]) // Multiple stage here Stage1 and Stage2

        2. Here change the order $Group and $match

           db.person.aggregate([{ $group: {_id: {age: '$age', name: '$name'}}}, {$match: { favoriteFruit: 'apple' }}]) // Multiple wrong stage operations

           db.person.aggregate([ { $group: {id: {age: '$age', name: '$name'}}}, {$match: { "id.age": {$gt: 29} }}])

            { "id" : { "age" : 35, "name" : "prakash" } }
            { "id" : { "age" : 95, "name" : "prakash" } }
            { "id" : { "age" : 56, "name" : "raj" } }
            { "id" : { "age" : 59, "name" : "david" } }

           db.person.aggregate([{ $group: {id: {age: '$age', name: '$name'}}}, {$match: { "id.age": 35 }}])
            { "id" : { "age" : 35, "name" : "prakash" } }

8. what is $Count stage Operator?

    # Answer:-
        1. Count the number of input documents
            { $count: "<tittle>" }

            Example:

              db.person.aggregate([{$count: 'Count' }])
              { "Count" : 358 }

        2. Different count methods
            db.person.aggregate([]).toArray().length

9. Explain with $Group and $count

    # Answer:-
    1. $Group and $count

        db.person.aggregate([{ $group: {id: '$name'}}])
        # Result:-
            { "id" : "david" }
            { "id" : "mala" }
            { "id" : "prakash" }
            { "id" : "prakashraj" }
            { "id" : "raj" }
            { "id" : "suganya" }

        db.person.aggregate([{ $group: {id: '$name'}}, {$count: 'nameCount'}])
        # Result:-
            { "nameCount" : 6 }

10. $match and $Group and $count

    # Answer:-
        1. $match and $Group and $count
            db.person.aggregate([ {$match: {age: {$gt: 25}} },{ $group: {_id: '$age'}}, {$count: 'nameCount'}])
            { "nameCount" : 3 }

11. $Sort

    # Answer:-

        1. { $sort: { <field>: <-1 || 1>, <field2>: <-1 || 1> } } // -1 mean sort will descending and 1 mean ascending

            db.person.aggregate([{$group: {id: '$company.location.country'}}, {$sort: {id: 1}}])

            db.person.aggregate([{$sort: {name: 1 }}]) // Sorted by alphabetical order

12. $group and $sort

    # Answer:-
      1. db.person.aggregate([{$group: { id: '$favoriteFruit' }}, { $sort: { id: 1 }}])
            { "id" :  null }
            { "id" : "aplle" }
            { "id" : "apple" }
            { "id" : "banana" }
            { "id" : "orange" }
            { "id" : "strawberry" }

13. $project is exclude fields and include fields

    # Answer:-

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

       2. db.person.aggregate({$project: {id: 0, name: '$name', gender: '$gender'}})

       3. db.person.aggregate([ { $match: {age: {$gt: 24 }}}, {$group: {id: '$gender', count: {$sum: 1}}}])

       4. db.people.aggregate([{$project: {price: 1}}, {$count: "price"}])
            { "price" : 7568 }

       5. Project field can create new field object eg: if you have 10 input we get 11 using project

            * db.people.aggregate([{$project: { people: 1, info: {price: "$price", "quantity": "$quantity" }}}])
                { "id" : ObjectId("66583dd2793de670314806a4"), "people" : "Nick", "info" : { "price" : 10, "quantity" : 2 } }

            * db.people.aggregate([{$project: { people: 1, info: {price: "price", "quantity": "quantity" }}}]
                { "id" : ObjectId("66583dd2793de670314806a4"), "people" : "Nick", "info" : { "price" : "price", "quantity" : "quantity" } }

14. $limit stage

    # Answer:-
    1. { $limit : <number> }

        Example: { $limit: 100 }

        db.person.aggregate([{$limit: 100}, {$match: { favoriteFruit: 'apple' }}, {$group: {id: '$name'}}])
        { "id" : "prakashraj" }
        { "id" : "mala" }
        { "id" : "prakash" }
        { "id" : "suganya" }

        db.people.aggregate([{$limit: 10 }, {$match: {price: {$gt: 4}}}, {$group: {id : "$people"}}])
        { "id" : "Nick" }
        { "id" : "Prakash" }
        { "id" : "Raj" }
        { "id" : "Jhon" }

        db.person.aggregate([{$group: {id: "$tags"}}]) // If u want group by value of an array use unwind function in mongoDB
        { "id" : [ "jenkins", "java", "bootstrap" ] }
        { "id" : [ "css", "html", "nodejs" ] }
        { "id" : [ "pug", "jade", "javascript" ] }
        { "id" : [ "backend", "php" ] }
        { "id" : [ "backend", "php", "frontend" ] }
        { "id" : null }


15. $unwind stage

    # Answer:-
        1. If u want group by value of an array use unwind function in mongoDB

            { $unwind: <arrayReferenceExpression> }

        2. $unwind. Deconstructs an array field from the input documents to output a document for each element.

            db.person.aggregate([{ $unwind: "$tags"}])
            { "id" : ObjectId("614d975741d4e3f1cfa9ca8d"), "name" : "raj", "gender" : "male", "age" : 56, "tags" : "css" }
            { "id" : ObjectId("614d975741d4e3f1cfa9ca8d"), "name" : "raj", "gender" : "male", "age" : 56, "tags" : "html" }
            { "id" : ObjectId("614d975741d4e3f1cfa9ca8d"), "name" : "raj", "gender" : "male", "age" : 56, "tags" : "nodejs" }
            { "id" : ObjectId("614d978641d4e3f1cfa9ca8e"), "name" : "david", "gender" : "female", "age" : 59, "tags" : "pug" }
            { "id" : ObjectId("614d978641d4e3f1cfa9ca8e"), "name" : "david", "gender" : "female", "age" : 59, "tags" : "jade" }
            { "id" : ObjectId("614d978641d4e3f1cfa9ca8e"), "name" : "david", "gender" : "female", "age" : 59, "tags" : "javascript" }

        3. db.person.aggregate([{ $unwind: "$tags"}, {$group : {id: '$tags'}}])
            { "id" : "jenkins" }
            { "id" : "javascript" }
            { "id" : "bootstrap" }
            { "id" : "frontend" }
            { "id" : "nodejs" }
            { "id" : "css" }
            { "id" : "pug" }
            { "id" : "jade" }
            { "id" : "backend" }
            { "id" : "html" }
            { "id" : "java" }
            { "id" : "php" }

        4. db.person.aggregate([{ $unwind: "$tags"}, {$group : {_id: '$tags'}}, {$count: 'tages'}])
            { "tages" : 12 }

        5. db.array.aggregate([{$unwind: "$tages"}, {$group: {id: "$tages", totalEntry: {$sum: 1}}}])
            { "id" : "Nathon", "totalEntry" : 9 }
            { "id" : "Jhon", "totalEntry" : 9 }
            { "id" : "Raj", "totalEntry" : 6 }
            { "id" : "Prkash", "totalEntry" : 6 }

16. Accumulators are special operators inside the aggregation

    # Answer:-

        1. Most accumulators are used only in the $group stages

            1. $sum

            2. $avg

            3. $max

            4. $min

        2. Accumulators maintain state for each group of the documents
            { $<accumulatorOperator>: <expression> }

    # Example:
        { $sum: "$quantity" }

17. $sum accumulator

    # Answer:-
        1. Sum numeric values of the documents in each group

        { $sum: <expression | number> }

        Example:
            db.person.aggregate([{$group: {_id: "$favoriteFruit", count: {$sum: 1}}}])

            { "id" : null, "count" : 259 }
            { "id" : "aplle", "count" : 3 }
            { "id" : "strawberry", "count" : 35 }
            { "id" : "banana", "count" : 13 }
            { "id" : "apple", "count" : 14 }
            { "id" : "orange", "count" : 34 }

18. $sum, $unwind and $group

    # Answer:-
        1. db.person.aggregate([{$unwind: "$tags"}, {$group: {_id: "$tags", count: {$sum: 1}}}])

            { "id" : "jenkins", "count" : 1 } // Group by tags and count using $sum accumulator
            { "id" : "javascript", "count" : 13 }
            { "id" : "bootstrap", "count" : 1 }
            { "id" : "frontend", "count" : 14 }
            { "id" : "nodejs", "count" : 1 }
            { "id" : "css", "count" : 1 }
            { "id" : "pug", "count" : 13 }
            { "id" : "jade", "count" : 13 }
            { "id" : "backend", "count" : 60 }
            { "id" : "html", "count" : 1 }
            { "id" : "java", "count" : 1 }
            { "id" : "php", "count" : 60 }

        2. db.array.aggregate([{$unwind: "$tages"}, {$group: {_id: "$tages", totalEntry: {$sum: 1}}}])
            { "id" : "Nathon", "totalEntry" : 9 }
            { "id" : "Jhon", "totalEntry" : 9 }
            { "id" : "Raj", "totalEntry" : 6 }
            { "id" : "Prkash", "totalEntry" : 6 }

19. $avg accumulator

    # Answer:-
        1. calculate the average value of the certain values in the documents
        { $avg: <expression> } // expression refer to the input documents

        2. db.person.aggregate([{ $group: {_id: "$name", avg: {$avg: "$age"}}}])

        3. db.person.aggregate([{ $group: {id: "$name", max: {$max: "$age"}}}])
            { "id" : "suganya", "avg" : 25 }
            { "id" : "prakashraj", "avg" : 25 }
            { "id" : "david", "avg" : 59 }
            { "id" : "prakash", "avg" : 31.675324675324674 }
            { "id" : "mala", "avg" : 25 }
            { "id" : "raj", "avg" : 56 }

        4. db.inventory.aggregate([{$group: {_id: "$item", avgs: {$avg: "$quantity"}}}])
            { "id" : "Maps", "avgs" : null }
            { "id" : "Erasers", "avgs" : 15 }
            { "id" : "Books", "avgs" : 5 }
            { "id" : null, "avgs" : null }
            { "id" : "Pens", "avgs" : 350 }

20. Unary Operators

    # Answer:-
        1. accumulator perform the group of the value that is called accumulator

        2. Unary operator usually used to project stage
            1. $type

            2. $or

            3. $lt

            4. $gt

            5. $and

            6. $multiply

21. type Operators

    # Answer:-

        1. { $type: <expression> } // expression are refer to the field name

        2. db.person.aggregate([{$project: {name: 1, fruit: {$type: "$favoriteFruit"}, age: {$type: "$age"}}}])
            { "id" : ObjectId("614d6fd341d4e3f1cfa9c9da"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
            { "id" : ObjectId("614d6fd341d4e3f1cfa9c9db"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
            { "id" : ObjectId("614d6fd341d4e3f1cfa9c9dc"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
            { "id" : ObjectId("614d6fd341d4e3f1cfa9c9dd"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
            { "id" : ObjectId("614d6fd341d4e3f1cfa9c9de"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
            { "id" : ObjectId("614d6fd341d4e3f1cfa9c9df"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
            { "id" : ObjectId("614d6fd341d4e3f1cfa9c9e0"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
            { "id" : ObjectId("614d6fd341d4e3f1cfa9c9e1"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
            { "id" : ObjectId("614d6fd341d4e3f1cfa9c9e2"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
            { "id" : ObjectId("614d6fd341d4e3f1cfa9c9e3"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
            { "id" : ObjectId("614d6fd341d4e3f1cfa9c9e4"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
            { "id" : ObjectId("614d6fd341d4e3f1cfa9c9e5"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
            { "id" : ObjectId("614d6fd341d4e3f1cfa9c9e6"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
            { "id" : ObjectId("614d6fda41d4e3f1cfa9c9e7"), "name" : "prakash", "fruit" : "missing", "age" : "double" }
            { "id" : ObjectId("614d6fda41d4e3f1cfa9c9e8"), "name" : "suganya", "fruit" : "missing", "age" : "double" }

22. MONGODB EXCERSIZE FOR KNOWLEDGE

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
##
> db.orders.aggregate([{$group: {_id: "$item", totalPrice: {$sum: "$quantity"}}}, {$match: {"_id" : "almonds"}}])
    { "_id" : "almonds", "totalPrice" : 51 }
> db.orders.aggregate([{$group: {_id: "$item", totalPrice: {$sum: "$quantity"}}}, {$match: {"totalPrice" : 51}}])
    { "_id" : "almonds", "totalPrice" : 51 }
> db.orders.aggregate([{$group: {_id: "$item", totalPrice: {$sum: "$quantity"}}}, {$match: {"totalPrice" : {$gt: 33}}}])
    { "_id" : "almonds", "totalPrice" : 51 }
    { "_id" : "tomato", "totalPrice" : 67 }
## Element Match Operator

    * db.complex.find({arrayOfValues: {$elemMatch: {$eq: "k"}}})
        { "_id" : ObjectId("5407c76b7b1c276c74f90529"), "field" : "y", "arrayOfValues" : [ "k" ] }

# arrayOfValues mean it's mongoDB document name

    Example:-
        { "_id" : ObjectId("5407c76b7b1c276c74f90524"), "field" : "x", "arrayOfValues" : [ "a", "b", "c" ] }
        { "_id" : ObjectId("5407c76b7b1c276c74f90525"), "field" : "x", "arrayOfValues" : [ "b", "c" ] }
        { "_id" : ObjectId("5407c76b7b1c276c74f90526"), "field" : "z", "arrayOfValues" : [ "a" ] }
        { "_id" : ObjectId("5407c76b7b1c276c74f90527"), "field" : "x", "arrayOfValues" : [ "a", "c" ] }
        { "_id" : ObjectId("5407c76b7b1c276c74f90528"), "field" : "z", "arrayOfValues" : [ "b" ] }
        { "_id" : ObjectId("5407c76b7b1c276c74f90529"), "field" : "y", "arrayOfValues" : [ "k" ] }

# ElementMatch in aggregation

db.complex.aggregate([{$match: {arrayOfValues: {$elemMatch: {$eq: "k"}}}}])
{ "_id" : ObjectId("5407c76b7b1c276c74f90529"), "field" : "y", "arrayOfValues" : [ "k" ] }