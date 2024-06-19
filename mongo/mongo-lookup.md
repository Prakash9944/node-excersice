### what is lookup in mongoDB

    1. The $lookup operator is an aggregation operator or an aggregation stage, which is used to join a document from one collection to a document of another collection of the same database based on some queries. Both the collections should belong to the same databases

### Lookup Syntax
{
   $lookup:
     {
       from: <collection to join>,
       localField: <field from the input documents>,
       foreignField: <field from the documents of the "from" collection>,
       as: <output array field>
     }
}

## Lookup with match stage

    1. db.orders.aggregate([{$lookup: {from: 'inventory', localField: 'item', foreignField: 'sku', as: 'matcheddocs'}}])

    2. db.orders.aggregate([{$lookup: {from: 'inventory', localField: "item", foreignField: "sku", as: "matchedCollecctions"}}, {$match: {qty: {$gt: 222}}}])

    3. db.orders.aggregate([{$lookup: {from: 'inventory', localField: 'item', foreignField: 'sku', as: 'matched'}}, {$match: {price: {$gte: 40}}}, {$group: {_id: '$item', vegCounts: {$sum: 1}}}])
    { "_id" : "carrot", "vegCounts" : 2 }
    { "_id" : "pecans", "vegCounts" : 1 }
    { "_id" : "almonds", "vegCounts" : 1 }

    4. db.orders.aggregate([{$lookup: {from: 'inventory', localField: 'item', foreignField: 'sku', as: 'matched'}}, {$match: {price: {$gte: 40}}}, {$group: {_id: '$item', vegCounts: {$sum: 1}}}])


## db.orders.aggregate([{$lookup: {from: "inventory", localField: "item", foreignField: "sku", as: "matched"}}, {$match: {"price" : {$gt: 40}}}]).pretty()
    {
        "_id" : 16,
        "item" : "almonds",
        "price" : 42,
        "quantity" : 2,
        "matched" : [
            {
                "_id" : 23,
                "sku" : "almonds",
                "description" : "product 1",
                "instock" : 120
            },
            {
                "_id" : 27,
                "sku" : "almonds",
                "description" : "product 1",
                "instock" : 120
            }
        ]
    }

## db.orders.aggregate([{$lookup: {from: "inventory", localField: "item", foreignField: "sku", as: "matched"}}, {$match: {"matched._id" : 23}}]).pretty()



## db.orders.aggregate([{$lookup: {from: "inventory", localField: "item", foreignField: "sku", as: "matched"}}, {$match: {"matched.description": "product 4"}}].pretty()
{
    "_id" : 26,
    "item" : "pecans",
    "price" : 40,
    "quantity" : 26,
    "matched" : [
        {
            "_id" : 26,
            "sku" : "pecans",
            "description" : "product 4",
            "instock" : 70
        },
        {
            "_id" : 30,
            "sku" : "pecans",
            "description" : "product 4",
            "instock" : 70
        }
    ]
}



request.get('https://app.test.banking:9098/getAllCustomers', function(err, respones, body) {

})

var obj = {
    url: "https://app.test.banking:9098/getAllCustomers",
    method: 'get'
};

request(obj, function(err, respones, body) {

});

employee
privilleg
categroy
