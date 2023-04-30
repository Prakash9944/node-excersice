### What are the best features of MongoDB?

   # Indexing:
        * It indexes are created in order to improve the search performance.

   # Replication:
        * MongoDB distributes the data across different machines.

   # SchemaLess:
        * It is very flexible because of its schema-less database that is written in C++.

   # Sharding:
        * MongoDB uses sharding to enable deployments with very large data sets and high throughput operations.

 ### How does Sharding work with replication?

   # Each Shard is a logical collection of partitioned data. The shard could consist of a single server or a cluster of replicas. Using a replica set for each Shard is highly recommended.

 ### What happens when a Shard is down or slow when querying?

   # If a Shard is down, the query will return an error unless the ‘Partial’ query options is set. If a shard is responding slowly, Mongos will wait for it.

### What is a Collection in MongoDB?

   # collection in MongoDB is a group of documents. If a document is the MongoDB analog of a row in a relational database, then a collection can be thought of as the analog to a table.

### What is a Document in MongoDB?

   # A Document in MongoDB is an ordered set of keys with associated values. It is represented by a map, hash, or dictionary. In JavaScript, documents are represented as objects:

   # {"greeting" : "Hello world!"}

### What are Databases in MongoDB?

   # MongoDB groups collections into databases admin local config

###  What are the data types in MongoDB?

   # Null
    {"x" : null}
   # Boolean
    {"x" : true}
   # Number
    {"x" : 4}
   # String
    {"x" : "foobar"}
   # Date
    {"x" : new Date()}
   # Regular expression
    {"x" : /foobar/i}
   # Array
    {"x" : ["a", "b", "c"]}
   # Embedded document
    {"x" : {"foo" : "bar"}}
   # Object ID
    {"x" : ObjectId()}
   # Binary Data
    Binary data is a string of arbitrary bytes.
   # Code
    {"x" : function() { /* ... */ }}


### Explain the process of Sharding.

   # Sharding is the process of splitting data up across machines. We also use the term “partitioning” sometimes to describe this concept. We can store more data and
    handle more load without requiring larger or more powerful machines, by putting a subset of data on each machine.
    In the figure below, RS0 and RS1 are shards. MongoDB’s sharding allows you to create a cluster of many machines (shards) and break up a collection across them, putting a subset of data on each shard. This allows your application to grow beyond the resource limits of a standalone server or replica set.

