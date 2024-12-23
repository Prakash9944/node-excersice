1. What is SQL?

    # Answer:-
        1. SQL stands for Structured Query Language. It is a language used to interact with the database, i.e to create a database, to create a table in the database, to retrieve data or update a table in the database, etc

2. What do you mean by foreign key?

    # Answer:-
        1. A Foreign key is a field that can uniquely identify each row in another table. And this constraint is used to specify a field as a Foreign key. That is this field points to the primary key of another table. This usually creates a kind of link between the two tables.

    # Key Concepts:-
        1. Parent Table: The table that contains the primary key being referenced.
        2. Child Table: The table that contains the foreign key referencing the primary key of the parent table.

3. What is a Constraint?

    # Answer:-
        1. Default constraint in SQL is used to assign a default value to a column when no value is provided during an INSERT operation. This ensures that a column always has a value, even if none is explicitly specified.

4. INNER JOIN

    # Answer:-

        1. Description: Returns only the rows that have matching values in both tables.

        2. Query:
            SELECT Employees.Name, Departments.DepartmentName
            FROM Employees
            INNER JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;

        3. Syntax
            SELECT table1.column1,table1.column2,table2.column1
            FROM table1
            INNER JOIN table2
            ON  table1.matching_column = table2.matching_column;

5. LEFT JOIN (or LEFT OUTER JOIN)

    # Answer:-

        1. Description: Returns all rows from the left table, and the matched rows from the right table. The result is NULL from the right side if there is no match

        2. Example: You want to list all customers and their orders, but you also want to include customers who haven't placed any orders.

    # Query:

        SELECT Customers.CustomerName, Orders.OrderDate
        FROM Customers
        LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;

        1. Left Table: Customers
        2. Right Table: Orders

        3. Left Table (Customers): This is the table from which all rows will be included in the result. Even if there is no match in the right table, every row from this table will appear in the final output.

        4. Right Table (Orders): This is the table where matching rows are sought based on the condition specified (Customers.CustomerID = Orders.CustomerID). If a row in the left table does not find a match in the right table, the result for those columns will be NULL

        5. Result:
            CustomerName    OrderDate
            Alice           2024-07-01
            Bob             2024-07-02
            Charlie         NULL

6. RIGHT JOIN (or RIGHT OUTER JOIN)

    # Answer:-

        1. Description: Returns all rows from the right table, and the matched rows from the left table. The result is NULL from the left side if there is no match.

    # Example: You want to list all departments, including those that might not have any employees.

        2. The RIGHT JOIN includes all rows from the right table and matches rows from the left table based on the specified condition. If a row in the right table has no corresponding match in the left table, the result will show NULL values for columns from the left table.

        3. It includes every row from the right table.

        4. It includes matching rows from the left table.

        5. If no matching row is found in the left table, the result will have NULL values for columns from the left table.

    # Query:
        SELECT Employees.EmployeeName, Departments.DepartmentName
        FROM Employees
        RIGHT JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;

    # Result

        EmployeeName    DepartmentName
        Alice   HR
        Bob IT
        NULL    Finance
        NULL    Sales

7. Difference between UNION and UNION ALL

    # Answer:-

        1. UNION combines the results of two queries and removes duplicate rows

        2. UNION ALL combines the results of two queries and includes all duplicates.

8. Difference between DELETE, TRUNCATE, and DROP commands

    # Answer:-

        1. DELETE:
            removes rows from a table based on a condition but keeps the table structure and data.

        2. TRUNCATE:
            removes all rows from a table without logging individual row deletions and resets the table.

        3. DROP:
            removes the table and its structure from the database.
