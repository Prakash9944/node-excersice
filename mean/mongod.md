1. What are MongoDB's key features?

    # Answer:
        1. Schema flexibility: MongoDB uses a schema-less document-oriented database model.
        2. Scalability: Supports horizontal scaling using sharding.
        3. High availability: Replica sets provide automatic failover.
        4. Indexing: Various types of indexing to improve query performance.
        5. Aggregation framework: Supports data aggregation operations similar to SQL’s GROUP BY.

2. What is a collection in MongoDB?

    # Answer:
        A collection in MongoDB is a grouping of documents. Collections are schema-less, meaning documents in the same collection can have different structures. Collections are similar to tables in traditional relational databases.

3. What is a primary key in MongoDB?

    # Answer:
        In MongoDB, the `_id` field serves as the primary key for a document. It must be unique within a collection and is automatically generated if not provided during document insertion.

4. What is Sharding, and How Does It Work in MongoDB?

    # Answer:
        1. Sharding is a method for distributing data across multiple servers in MongoDB. It allows for horizontal scaling by splitting large datasets into smaller, more manageable pieces called shards.

        2. Each shard is a separate database that holds a portion of the data. MongoDB automatically balances data and load across shards, ensuring efficient data distribution and high performance.

    # Real-Time Example:-
        1. Imagine you are running an e-commerce platform where millions of products and users interact daily. As the amount of data grows, a single server cannot handle the read/write operations efficiently.

    # How It Works:-
        1. Shards:
            Data is split into multiple partitions called shards. Each shard stores a subset of the data.

        2. Shard Key:
            A field or combination of fields used to determine how data is distributed across shards.

        3. Config Server:
            Stores metadata about the distribution of data.

    # When to Use Sharding:-
        1. Your data size exceeds the storage capacity of a single server.

        2. You need to scale horizontally to handle high traffic and load.

        3. Read/write operations are slowing down due to the large data set.

5. What is an Index in MongoDB, and How to Create One?

    # Answer:
        1. An index in MongoDB is a data structure that improves the speed of data retrieval operations on a collection. You can create an index using the createIndex method.

        2. index in MongoDB is a data structure that provides a way to quickly find documents in a collection. Without indexes, MongoDB would have to scan every document in a collection to find the ones matching a query, which is inefficient, especially with large datasets.

        db.collection.createIndex({ name: 1 })

    # Types of Indexes in MongoDB
        1. Single Field Index: Indexes a single field in a collection.

        2. Compound Index: Indexes multiple fields together.

        3. Multikey Index: Indexes arrays in documents.

        4. Geospatial Index: Indexes geographic location data.

        5. Text Index: Indexes string data for text search.

6. What is a replica set in MongoDB?

    # Answer:
        It is a group of servers that maintain the same data. It provides data redundancy and high availability. One server acts as the primary, while others are secondary servers that replicate data from the primary.

    # How It Works:
        1. Primary Node:
            Handles all write operations.

        2. Secondary Nodes:
            Maintain copies of the data from the primary and can serve read requests.

        3. Replication Oplog:
            Keeps a log of changes made to the primary node and applies them to secondaries.

        4. Real-Time Example:
            Consider a banking application that must be available 24/7. Data loss or downtime is unacceptable.

7. What are the data types supported by MongoDB?

    # Answer:
        MongoDB supports various data types, including string, number, boolean, date, array, object, null, regex, and more. It also helps geospatial and binary data types.

8. What is a cursor in MongoDB, and when is it used?

    # Answer:
        cursor in MongoDB is an iterator to retrieve and process documents from query results. Cursors are used when fetching large result sets, allowing you to retrieve documents in batches.

9. How do you backup a MongoDB database?

    # Answer:
        You can back up a MongoDB database using tools like `mongodump` or by configuring regular snapshots at the file system or cluster level.


10. what is aggregation in mongodb?

    # Answer:-
        1. process large amounts of data, group it, filter it, and generate computed results. Aggregation is a powerful feature in MongoDB, especially when working with large datasets, as it allows complex transformations to be done directly within the database, reducing the need to load large amounts of data into application memory for processing.

    # How Does Aggregation Work in MongoDB?
        1. MongoDB’s aggregation framework is based on a pipeline that allows you to chain multiple stages of operations.

        2. Each stage performs a specific operation on the data, and the result of one stage is passed as input to the next stage. This approach is similar to Unix pipelines

11. What is $addToSet in MongoDB?

    # Answer:-
        1. In MongoDB, $addToSet is an aggregation operator used in the $group stage to add unique values to an array. It ensures that there are no duplicates in the array, meaning it behaves like a "set" data structure that automatically removes duplicate values.

        2. You want to eliminate duplicates from an array.

        3. $addToSet adds only unique values to the array, automatically ignoring duplicates.

    # Example:-
        1. db.users.updateOne( { id: "A123" }, { $addToSet: { likedProducts: "p1" } } );

        2. db.orders.aggregate([ { $group: { id: "$customerId", uniqueProducts: { $addToSet: "$products" } } } ]);

            Result:- [ { "id": "A123", "uniqueProducts": [["p1", "p2", "p3"], ["p2", "p4"]] }, { "id": "B456", "uniqueProducts": [["p1", "p3"]] } ]

12. What is $set in MongoDB?

    # Answer:-
        1. In MongoDB, the $set operator is used to update fields of a document or add new fields to an existing document.

        2.  It is part of the update operations and allows you to specify the fields you want to update or add

        3. Updating Existing Fields: If the field exists, it will be updated with the new value.

        4. Adding New Fields: If the field does not exist, it will be added to the document.

        5. The $set operator is useful when you want to update specific fields while leaving the rest of the document intact.

    # Example:-
        db.users.updateOne(
          { id: 1 },   // Find user with id 1
          { $set: { age: 26 } }  // Update the age field to 26
        );


