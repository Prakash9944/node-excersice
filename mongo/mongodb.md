# What is stages
   * stages are independent and followed by doller sign

# 1. What are some of the advantages of MongoDB

    * MongoDB supports field, range-based, string pattern matching type queries. for searching the data in the database

    * MongoDB support primary and secondary index on any fields

    * MongoDB basically uses JavaScript objects in place of procedures

    * MongoDB uses a dynamic database schema

    * MongoDB is very easy to scale up or down

    * MongoDB has inbuilt support for data partitioning


# 2.  Document in MongoDB

    * document is key value pair

        {"greeting" : "Hello world!"}

# 3. What is a Collection in MongoDB

    * A collection in MongoDB is a group of documents. If a document is the MongoDB analog of a row in a relational database

# 4. What are some features of MongoDB

    * Indexing: It supports generic secondary indexes and provides unique, compound, geospatial, and full-text indexing capabilities as well.

    * Aggregation: It provides an aggregation framework based on the concept of data processing pipelines.

    Special collection and index types: It supports time-to-live (TTL) collections for data that should expire at a certain time

# $or Operator

    The $or operator performs a logical OR operation on an array of two or more <expressions> and selects the documents that satisfy at least one of the <expressions>. The $or has the following syntax:

    db.articals.aggregate([{$match: {$or: [{score: {$gte: 70, $lte: 90}}, {views: {$gte: 1000}}]} }])

    db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )

## $and Operator

    db.employee.aggregate([{$match: {$and: [{gender: 'female'}, {age: {$gte: 25}}]}}])

    $and performs a logical AND operation on an array of one or more expressions (<expression1>, <expression2>, and so on) and selects the documents that satisfy all the expressions.


## $size

    The $size operator matches any array with the number of elements specified by the argument. For example:

## $group by

    {
      $group:
        {
          _id: <expression>,
          <field1>: { <accumulator1> : <expression1> },
        }
     }

     db.employee.aggregate([{$group: {_id: '$age', count: {$sum: 1}}}])


     db.employee.aggregate([{$group: {_id: {ages: '$age', gender: '$gender'}, count: {$sum: 1}}}])


## $project is exclude fields and include fields

    db.articals.aggregate([{$project: {authors: '$author'}}])


    db.articals.aggregate([{$project: {authors: 1, views: 1}}])


## Aggregations:- ##

1. group by

    db.person.aggregate([{ $group: {'gender': '$gender'}}])

    db.sales.aggregate([{$group: { _id: "$quantity" , total: {$sum: '$quantity'}}}])

    db.employee.aggregate([{$group: {_id: { age: "$age", gender: '$gender'}, count: {$sum: 1}}}])

    db.employee.aggregate([{$group: {_id: '$company.location.country'}}])

    db.employee.aggregate([{$group: {_id: {male: '$gender', country: '$company.location.country', count: {$sum: 1} }}}])

    db.employee.aggregate([ { $group: {_id: {age: "$age"}}}, {$match: {'_id.age': {$gt: 40}}} ])

    <!-- db.employee.aggregate([{$group: {_id: '$company.location.country'}, $count: 'total'}]) -->

    db.employee.aggregate([{$group: {_id: '$company.location.country'}}, {$count: 'total'}])

2. Sort

     db.employee.aggregate([{$group: {_id: '$company.location.country'}}, {$sort: {_id: 1}}])

     db.employee.aggregate({$project: {name: '$name', gender: '$gender'}})

     db.employee.aggregate({$project: {_id: 0, name: '$name', gender: '$gender'}})


     db.employee.aggregate([ { $match: {age: {$gt: 24 }}}, {$group: {_id: '$gender', count: {$sum: 1}}}])

3. CreateIndex using name

    db.employee.find({"_id" : ObjectId("614d6fd341d4e3f1cfa9c9d5")}).explain("executionStats")


4.lookup

    db.orders.aggregate([{$lookup: {from: 'inventory', localField: 'item', foreignField: 'sku', as: 'matcheddocs'}}])

    db.orders.aggregate([{$lookup: {from: 'inventory', localField: 'item', foreignField: 'sku', as: 'matcheddocs'}}, {$match: {price: {$gte: 20}}}])

    db.orders.aggregate([{$lookup: {from: 'inventory', localField: 'item', foreignField: 'sku', as: 'matched'}}, {$match: {price: {$gte: 40}}}, {$group: {_id: '$item', vegCounts: {$sum: 1}}}])

    * Using unwind we get it vegtables total count

    db.inventory.aggregate([{$lookup: {from: 'orders', localField: 'sku', foreignField: 'item', as: 'totalOrder'}}, {$unwind: "$totalOrder"}, {$group: {_id: '$sku', count: {$sum: '$totalOrder.quantity'}}}])

5. $push operator add an array

    db.books.aggregate([{$group: {_id: '$author', books: {$push: '$copies'}}}])

db.athlet.aggregate(
    { $match: {
        school : 'MathHighSchool'
    }},
    { $group: {
        _id: "$school",

        // Add up matches less than grade 3
        low: { $sum: { $cond: [ {$lt: ["$grade", 3] }, 5, 0] }},

        // Add up matches between 3 and 5 (inclusive)
        medium: { $sum: { $cond:[
            { $and: [ {$gte: ["$grade", 3]}, {$lte: ["$grade", 5]} ] }, 1, 0]
        }},

        // Add up matches greater than grade 5
        high: { $sum: { $cond: [ {$gt: ["$grade", 5] }, 1, 0] }},

    }})


db.orders.aggregate([{$lookup: {from: 'inventory', localField: 'item', foreignField: 'sku', as :'inventorya'}}, {$match: {item: {$eq: 'carrot'}}}, {$group: {_id: '$item', count: {$sum: 1}}}])


db.orders.aggregate([{$lookup: {from: 'inventory', localField: 'item', foreignField: 'sku', as :'inventorya'}}, {$match: {price: {$gte: 10}}}, {$group: {_id: '$item', count: {$sum: 1}}}])


6. Unwind and Project

    # this aggregation group by country with city and total city count


    db.project.aggregate([{$project: {'hourlys': '$hourlyLocations'}}, {$unwind: "$hourlys" }, {$group: {_id: {country: '$hourlys.countryName', city: '$hourlys.cityName'}, city: {$sum: 1}}}, {$sort: {city: 1}}, {$group: {_id: '$_id.country', cities: {$push: {city: '$_id.city', count: "$city"}}}}]).pretty()


    db.orders.aggregate([{$lookup: {from: 'inventory', localField: 'item', foreignField: 'sku', as: 'products'}}, {$unwind: '$products'}, {$group: {_id: '$products._id', totalStock: {$sum: '$products.instock'}}}]).pretty()

    When preserveNullAndEmptyArrays set true if path or null its give output

    db.users.aggregate([{$lookup: {from: 'countries', localField: 'country', foreignField: '_id', as: 'country'}}, {$unwind: {path: '$countrys', 'preserveNullAndEmptyArrays': true }}]).pretty()


    db.users.aggregate([{$lookup: {from: 'countries', localField: 'country', foreignField: '_id', as: 'country'}}, {$unwind: {path: '$countrys' }}]).pretty()


7. group by account_name

    db.deal.aggregate([{$match: {status: {$eq: 'New'}, deal_amount: {$gte: '2000'}}}, {$group: {_id: {accountName: '$account_id', type: '$deal_type', 'amount': '$deal_amount'}}}])


    db.gender.aggregate([{$match: {GENDER: 'F'}}, {$group: {_id: '$GENDER', count: {$sum: '$BRAINSCORE'}}}])

8. Max Query

    db.deal.aggregate([{$group: {_id: '$status', max: {$max: '$deal_amount'}}}])


9. And Operator Query

    db.deal.aggregate([{$match: {$and: [{status: 'New'}, {deal_amount: {$gte: "4070"}}]}}])


10 $divide Query

    db.planning.aggregate([{$project: {names: '$name', workday: {$divide: ['$hours', 24]}}}])

11 $map Query

    # if you want change anything from the array we can use map function in monodb

    db.grades.aggregate([{$project: {grades: {$map: {input: '$quizzes', as: 'grade', in: {$add: ['$$grade', 7]}}}}}])

12. Replica set

    # A replica set in MongoDB is a group of MongoDB servers that maintain the same data set. It provides redundancy and high availability by replicating data across multiple servers

    # Primary Node: Handles all the write operations and reads (by default) for the data. Only one primary node can exist in a replica set at a time.

    # Secondary Nodes: Replicate data from the primary node. They can be configured to handle read operations if required, but they cannot handle write operations.

    # Replication: All data written to the primary node is replicated to the secondary nodes. This ensures that data is available even if the primary node fails.

    # Failover: If the primary node fails, the replica set automatically elects a new primary from the secondary nodes. This process is seamless, ensuring high availability.

    # Read Preference: You can configure how read operations are distributed among the nodes. For example, reads can be directed to the primary node only, or distributed among secondary nodes to balance load.


db.inventory.insert([
   { "_id" : 23, "sku" : "almonds", "description": "product 1", "instock" : 120 },
   { "_id" : 24, "sku" : "bread", "description": "product 2", "instock" : 80 },
   { "_id" : 25, "sku" : "carrot", "description": "product 3", "instock" : 60 },
   { "_id" : 26, "sku" : "pecans", "description": "product 4", "instock" : 70 },
   { "_id" : 27, "sku" : "almonds", "description": "product 1", "instock" : 120 },
   { "_id" : 28, "sku" : "bread", "description": "product 2", "instock" : 80 },
   { "_id" : 29, "sku" : "carrot", "description": "product 3", "instock" : 60 },
   { "_id" : 30, "sku" : "pecans", "description": "product 4", "instock" : 70 },
   { "_id" : 31, "sku" : "tomato", "description": "product 1", "instock" : 120 },
   { "_id" : 32, "sku" : "bread", "description": "product 2", "instock" : 80 },
   { "_id" : 33, "sku" : "cashews", "description": "product 3", "instock" : 60 },
   { "_id" : 33, "sku" : "pecans", "description": "product 4", "instock" : 70 },
   { "_id" : 34, "sku" : "tomato", "description": "product 1", "instock" : 120 },
   { "_id" : 35, "sku" : "bread", "description": "product 2", "instock" : 80 },
   { "_id" : 36, "sku" : "cashews", "description": "product 3", "instock" : 60 },
   { "_id" : 37, "sku" : "pecans", "description": "product 4", "instock" : 70 },
])
db.orders.insert([
   { "_id" : 16, "item" : "almonds", "price" : 42, "quantity" : 2 },
   { "_id" : 17, "item" : "almonds", "price" : 25, "quantity" : 11 },
   { "_id" : 18, "item" : "almonds", "price" : 25, "quantity" : 11 },
   { "_id" : 19, "item" : "almonds", "price" : 25, "quantity" : 27 },
   { "_id" : 20, "item" : "tomato", "price" : 20, "quantity" :  27 },
   { "_id" : 21, "item" : "tomato", "price" : 20, "quantity" : 22 },
   { "_id" : 22, "item" : "tomato", "price" : 20, "quantity" : 9 },
   { "_id" : 23, "item" : "tomato", "price" : 30, "quantity" : 9 },
   { "_id" : 24, "item" : "carrot", "price" : 30, "quantity" : 3 },
   { "_id" : 27, "item" : "carrot", "price" : 40, "quantity" : 4 },
   { "_id" : 25, "item" : "carrot", "price" : 40, "quantity" : 26 },
   { "_id" : 26, "item" : "pecans", "price" : 40, "quantity" : 26 },
])

15. $or Operator
    db.deal.aggregate([{$match: {$or: [{status: 'New'}, {deal_amount: {$gte: '500'}}]}}])
    db.employee.aggregate([{ $group: {'gender': '$gender'}, age: { $gt: '25' },  count: { gender: $count }}])



16. update (updateOne: Updates only the first document that matches the filter criteria.)
    db.collection.update(
      <filter>,
      <update>,
      { upsert: <boolean>, multi: <boolean> }
    )

    <filter>: Specifies the criteria to match the document(s) to be updated.
    <update>: Specifies the modifications to apply.
    upsert: Optional. If true, creates a new document if no documents match the filter.
    multi: Optional. When set to true, it updates all documents that match the filter (deprecated in favor of updateMany).


17. updateMany: May be slower if many documents are updated, but it’s necessary for bulk updates.
    upsert: Optional. If true, creates a new document if no documents match the filter.

db.collection.updateMany(
  <filter>,
  <update>,
  { upsert: <boolean> }
)

18. $addToSet
    operator is used to add a value to an array field only if the value does not already exist in the array
    db.collection.update(
      { <filter> },
      { $addToSet: { <field>: <value> } }
    )

19. $set
    operator is used to set the value of a field in a document. If the field does not exist, $set will create it with the specified value. If the field does exist, $set will overwrite its value with the new one

    db.collection.update(
      { <filter> },
      { $set: { <field>: <value> } }
    )


