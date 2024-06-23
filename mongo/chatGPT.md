# db.orders.aggregate([{$match: {status: {$in: ["shipped", "delivered"]}}}, {$lookup: {from: "customers", localField: "customerId", foreignField: "_id", as: "customerDetails"}}, {$unwind: "$customerDetails"}, {$match: {"customerDetails.name": {$eq: "Alice Johnson"}}} ])

    { "_id" : 1004, "customerId" : 3, "amount" : 100, "status" : "shipped", "customerDetails" : { "_id" : 3, "name" : "Alice Johnson", "email" : "alice.johnson@example.com" } }

# db.sales.aggregate([{$group: {_id: {store: "$store.location", categ: "$category"}, totSal: {$sum: {$multiply: ["$price", "$quantity"]}}, quan: {$sum: "$quantity"}, avg: {$avg: "$price"}}}, {$sort: {"_id.store": 1}}, {$project: {_id: 0, location: "$_id.store", category: "$_id.categ", totSal: 1, quan: 1 }}])
    { "totSal" : 1200, "quan" : 1, "location" : "Chicago", "category" : "Electronics" }
    { "totSal" : 1200, "quan" : 1, "location" : "New York", "category" : "Electronics" }
    { "totSal" : 850, "quan" : 8, "location" : "New York", "category" : "Accessories" }
    { "totSal" : 2200, "quan" : 3, "location" : "San Francisco", "category" : "Electronics" }