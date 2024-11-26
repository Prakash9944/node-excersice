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

5. What is an Index in MongoDB, and How to Create One?

    # Answer:
        An index in MongoDB is a data structure that improves the speed of data retrieval operations on a collection. You can create an index using the createIndex method.

        db.collection.createIndex({ name: 1 })

6. What is a replica set in MongoDB?

    # Answer:
        It is a group of servers that maintain the same data. It provides data redundancy and high availability. One server acts as the primary, while others are secondary servers that replicate data from the primary.

7. What are the data types supported by MongoDB?

    # Answer:
        MongoDB supports various data types, including string, number, boolean, date, array, object, null, regex, and more. It also helps geospatial and binary data types.

8. What is a cursor in MongoDB, and when is it used?

    # Answer:
        cursor in MongoDB is an iterator to retrieve and process documents from query results. Cursors are used when fetching large result sets, allowing you to retrieve documents in batches.

9. How do you backup a MongoDB database?

    # Answer:
        You can back up a MongoDB database using tools like `mongodump` or by configuring regular snapshots at the file system or cluster level.

