# INNER JOIN

    # Description: Returns only the rows that have matching values in both tables.

    # Query:

        SELECT Employees.Name, Departments.DepartmentName
        FROM Employees
        INNER JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;

    # Syntax
        SELECT table1.column1,table1.column2,table2.column1
        FROM table1
        INNER JOIN table2
        ON  table1.matching_column = table2.matching_column;

# LEFT JOIN (or LEFT OUTER JOIN)

    # Description: Returns all rows from the left table, and the matched rows from the right table. The result is NULL from the right side if there is no match

    # Example: You want to list all customers and their orders, but you also want to include customers who haven't placed any orders.

    # Query:

        SELECT Customers.CustomerName, Orders.OrderDate
        FROM Customers
        LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;

        # Left Table: Customers
        # Right Table: Orders

        # Left Table (Customers): This is the table from which all rows will be included in the result. Even if there is no match in the right table, every row from this table will appear in the final output.

        # Right Table (Orders): This is the table where matching rows are sought based on the condition specified (Customers.CustomerID = Orders.CustomerID). If a row in the left table does not find a match in the right table, the result for those columns will be NULL

        # Result:
            CustomerName    OrderDate
            Alice           2024-07-01
            Bob             2024-07-02
            Charlie         NULL

# RIGHT JOIN (or RIGHT OUTER JOIN)

    # Description: Returns all rows from the right table, and the matched rows from the left table. The result is NULL from the left side if there is no match.

    # Example: You want to list all departments, including those that might not have any employees.

    The RIGHT JOIN includes all rows from the right table and matches rows from the left table based on the specified condition. If a row in the right table has no corresponding match in the left table, the result will show NULL values for columns from the left table.

    # It includes every row from the right table.

    # It includes matching rows from the left table.

    # If no matching row is found in the left table, the result will have NULL values for columns from the left table.

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

# Difference between UNION and UNION ALL

     UNION combines the results of two queries and removes duplicate rows

     UNION ALL combines the results of two queries and includes all duplicates.

# Difference between DELETE, TRUNCATE, and DROP commands

    # DELETE:
        removes rows from a table based on a condition but keeps the table structure and data.

    # TRUNCATE:
        removes all rows from a table without logging individual row deletions and resets the table.

    # DROP:
        removes the table and its structure from the database.
