1. MySQL (Row-Oriented Database) Example?

    # Answer:-
        1. If you want to find out the details of an order (e.g., order_id = 1), MySQL retrieves the entire row
        2. In row-oriented databases, data is stored row by row. Each row stores all the fields (columns) of a record together.
        3. MySQL (Row-Oriented) is ideal for transactional systems where you need to handle individual records efficiently (e.g., inserting or updating orders).

    # Why Row-Oriented?:-
        1. MySQL stores all columns of a row together. When you query for a specific row, it can efficiently retrieve all the columns related to that order (like customer ID, product, quantity, etc.) in one go.

    # Use Case:
        1. MySQL is best suited for operations that involve inserting, updating, or reading entire records. For example, creating or modifying an order involves updating a row with all the details (e.g., customer ID, product ID, order date, etc.)

        2. Transactional Workloads: Reading/writing a single record or a small set of records, as in OLTP (Online Transaction Processing) systems like relational databases.

2. ClickHouse (Column-Oriented Database) Example?

    # Answer:-
        1. ClickHouse for analytics in an e-commerce setting. We will store and analyze data about sales performance by product over time.
        2. If you want to calculate the total revenue by product, ClickHouse will read only the product_id, quantity, and total_price columns, skipping unnecessary columns (like customer_id and order_date).
        3. ClickHouse (Column-Oriented) is designed for analytics and large-scale aggregations, making it faster for complex queries that involve scanning large amounts of data but only need a few columns (e.g., calculating total sales by product).

    # Why Column-Oriented?:-
        1. ClickHouse stores columns separately. When you run a query that involves only specific columns (e.g., product_id, quantity, total_price), it can read only those columns, making the query faster for analytical tasks.

    # Use Case:-
        1. ClickHouse is optimized for running fast aggregations, like calculating total revenue per product or total sales by region. These are common in data warehouses, where analysts run large-scale queries on historical data.


3. Key Differences Illustrated with Examples?

    Feature                         MySQL (Row-Oriented)                                ClickHouse (Column-Oriented)
    -----------------------------------------------------------------------------------------------------------------
    1. Storage Format               Stores data row by row                          Stores data column by column
    2. Best Use Case                Transactional (OLTP) systems (e.g., orders)     Analytical (OLAP) systems (e.g., analytics)
    3. Query Efficiency             Efficient for full row retrieval                Efficient for querying specific columns
    4. Data Retrieval               Reads entire rows, slower for large datasets    Reads only needed columns, faster for large datasets
    5. Data Compression             Less efficient compression                      Highly efficient compression due to similar data types in columns
    6. Example Query                SELECT * FROM orders WHERE order_id = 1;        SELECT product_id, SUM(total_price) FROM sales GROUP BY product_id;
    7. Insert/Update Performance    Fast for single row operations                  Slower for single row inserts/updates
    8. Use Case                     Transactional operations like orders            Analytical queries like total revenue per product
