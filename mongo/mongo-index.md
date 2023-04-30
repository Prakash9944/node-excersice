### What is index

 # Index improve mongoDB query execution

 # Without index whole collection must be scanned

 # Index stores sorted fields values

 # If index use MongoDB perform only index scan


### Default index in each MongoDB collections

    Example:
        {_id: 1 }

    1. Default _id index  unique

### Create new index

    1. db.collection.createIndex({ <keyname>: [-1 | 1 ], <options> })

    Example:

        db.persons.createIndex({ age: 1 })

        db.persons.createIndex({ name: 1 })


     db.getCollection('orders').getIndexes()
        [
            {
                "v" : 2,
                "key" : {
                    "_id" : 1
                },
                "name" : "_id_"
            },
            {
                "v" : 2,
                "key" : {
                    "qty" : 1
                },
                "name" : "qty_1"
            },
            {
                "v" : 2,
                "key" : {
                    "status" : 1
                },
                "name" : "status_1"
            },
            {
                "v" : 2,
                "key" : {
                    "item" : 1
                },
                "name" : "item_1"
            }
        ]


### Index are improve query performance

    1. db.person.find({"_id" : ObjectId("614d6fd341d4e3f1cfa9c9d5")}).explain("executionStats")


    2. db.people.find({name: 'John'}).explain('executionStats') // Without Index query performance
        {
            "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "test.people",
                "indexFilterSet" : false,
                "parsedQuery" : {
                    "name" : {
                        "$eq" : "John"
                    }
                },
                "winningPlan" : {
                    "stage" : "COLLSCAN",
                    "filter" : {
                        "name" : {
                            "$eq" : "John"
                        }
                    },
                    "direction" : "forward"
                },
                "rejectedPlans" : [ ]
            },
            "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 1822,
                "executionTimeMillis" : 21,
                "totalKeysExamined" : 0, // It means index not used
                "totalDocsExamined" : 10932,
                "executionStages" : {
                    "stage" : "COLLSCAN",
                    "filter" : {
                        "name" : {
                            "$eq" : "John"
                        }
                    },
                    "nReturned" : 1822,
                    "executionTimeMillisEstimate" : 5,
                    "works" : 10934,
                    "advanced" : 1822,
                    "needTime" : 9111,
                    "needYield" : 0,
                    "saveState" : 10,
                    "restoreState" : 10,
                    "isEOF" : 1,
                    "direction" : "forward",
                    "docsExamined" : 10932
                }
            },
            "serverInfo" : {
                "host" : "ubuntu-ThinkPad-E14",
                "port" : 27017,
                "version" : "4.4.8",
                "gitVersion" : "83b8bb8b6b325d8d8d3dfd2ad9f744bdad7d6ca0"
            },
            "ok" : 1
        }


    3. db.people.find({name: 'John'}).explain('executionStats') // With Index query performance
{
    "queryPlanner" : {
        "plannerVersion" : 1,
        "namespace" : "test.people",
        "indexFilterSet" : false,
        "parsedQuery" : {
            "name" : {
                "$eq" : "John"
            }
        },
        "winningPlan" : {
            "stage" : "FETCH",
            "inputStage" : {
                "stage" : "IXSCAN",
                "keyPattern" : {
                    "name" : 1
                },
                "indexName" : "name_1",
                "isMultiKey" : false,
                "multiKeyPaths" : {
                    "name" : [ ]
                },
                "isUnique" : false,
                "isSparse" : false,
                "isPartial" : false,
                "indexVersion" : 2,
                "direction" : "forward",
                "indexBounds" : {
                    "name" : [
                        "[\"John\", \"John\"]"
                    ]
                }
            }
        },
        "rejectedPlans" : [ ]
    },
    "executionStats" : {
        "executionSuccess" : true,
        "nReturned" : 1822,
        "executionTimeMillis" : 9,
        "totalKeysExamined" : 1822, // It means index are used
        "totalDocsExamined" : 1822,
        "executionStages" : {
            "stage" : "FETCH",
            "nReturned" : 1822,
            "executionTimeMillisEstimate" : 0,
            "works" : 1823,
            "advanced" : 1822,
            "needTime" : 0,
            "needYield" : 0,
            "saveState" : 1,
            "restoreState" : 1,
            "isEOF" : 1,
            "docsExamined" : 1822,
            "alreadyHasObj" : 0,
            "inputStage" : {
                "stage" : "IXSCAN",
                "nReturned" : 1822,
                "executionTimeMillisEstimate" : 0,
                "works" : 1823,
                "advanced" : 1822,
                "needTime" : 0,
                "needYield" : 0,
                "saveState" : 1,
                "restoreState" : 1,
                "isEOF" : 1,
                "keyPattern" : {
                    "name" : 1
                },
                "indexName" : "name_1",
                "isMultiKey" : false,
                "multiKeyPaths" : {
                    "name" : [ ]
                },
                "isUnique" : false,
                "isSparse" : false,
                "isPartial" : false,
                "indexVersion" : 2,
                "direction" : "forward",
                "indexBounds" : {
                    "name" : [
                        "[\"John\", \"John\"]"
                    ]
                },
                "keysExamined" : 1822,
                "seeks" : 1,
                "dupsTested" : 0,
                "dupsDropped" : 0
            }
        }
    },
    "serverInfo" : {
        "host" : "ubuntu-ThinkPad-E14",
        "port" : 27017,
        "version" : "4.4.8",
        "gitVersion" : "83b8bb8b6b325d8d8d3dfd2ad9f744bdad7d6ca0"
    },
    "ok" : 1
}




### Without Index
    db.sales.find({"quantity" : 1330}).explain('executionStats')
    {
        "explainVersion" : "1",
        "queryPlanner" : {
            "namespace" : "tasks.sales",
            "indexFilterSet" : false,
            "parsedQuery" : {
                "quantity" : {
                    "$eq" : 1330
                }
            },
            "maxIndexedOrSolutionsReached" : false,
            "maxIndexedAndSolutionsReached" : false,
            "maxScansToExplodeReached" : false,
            "winningPlan" : {
                "stage" : "COLLSCAN",
                "filter" : {
                    "quantity" : {
                        "$eq" : 1330
                    }
                },
                "direction" : "forward"
            },
            "rejectedPlans" : [ ]
        },
        "executionStats" : {
            "executionSuccess" : true,
            "nReturned" : 1,
            "executionTimeMillis" : 7,
            "totalKeysExamined" : 0,
            "totalDocsExamined" : 16037,
            "executionStages" : {
                "stage" : "COLLSCAN",
                "filter" : {
                    "quantity" : {
                        "$eq" : 1330
                    }
                },
                "nReturned" : 1,
                "executionTimeMillisEstimate" : 0,
                "works" : 16039,
                "advanced" : 1,
                "needTime" : 16037,
                "needYield" : 0,
                "saveState" : 16,
                "restoreState" : 16,
                "isEOF" : 1,
                "direction" : "forward",
                "docsExamined" : 16037
            }
        },
        "command" : {
            "find" : "sales",
            "filter" : {
                "quantity" : 1330
            },
            "$db" : "tasks"
        },
        "serverInfo" : {
            "host" : "namlabs-ThinkPad-E14-Gen-4",
            "port" : 27017,
            "version" : "5.0.15",
            "gitVersion" : "935639beed3d0c19c2551c93854b831107c0b118"
        },
        "serverParameters" : {
            "internalQueryFacetBufferSizeBytes" : 104857600,
            "internalQueryFacetMaxOutputDocSizeBytes" : 104857600,
            "internalLookupStageIntermediateDocumentMaxSizeBytes" : 104857600,
            "internalDocumentSourceGroupMaxMemoryBytes" : 104857600,
            "internalQueryMaxBlockingSortMemoryUsageBytes" : 104857600,
            "internalQueryProhibitBlockingMergeOnMongoS" : 0,
            "internalQueryMaxAddToSetBytes" : 104857600,
            "internalDocumentSourceSetWindowFieldsMaxMemoryBytes" : 104857600
        },
        "ok" : 1
    }

### With Index search

    db.sales.find({"quantity" : 1330}).explain('executionStats')
    {
        "explainVersion" : "1",
        "queryPlanner" : {
            "namespace" : "tasks.sales",
            "indexFilterSet" : false,
            "parsedQuery" : {
                "quantity" : {
                    "$eq" : 1330
                }
            },
            "maxIndexedOrSolutionsReached" : false,
            "maxIndexedAndSolutionsReached" : false,
            "maxScansToExplodeReached" : false,
            "winningPlan" : {
                "stage" : "FETCH",
                "inputStage" : {
                    "stage" : "IXSCAN",
                    "keyPattern" : {
                        "quantity" : 1
                    },
                    "indexName" : "quantity_1",
                    "isMultiKey" : false,
                    "multiKeyPaths" : {
                        "quantity" : [ ]
                    },
                    "isUnique" : false,
                    "isSparse" : false,
                    "isPartial" : false,
                    "indexVersion" : 2,
                    "direction" : "forward",
                    "indexBounds" : {
                        "quantity" : [
                            "[1330.0, 1330.0]"
                        ]
                    }
                }
            },
            "rejectedPlans" : [ ]
        },
        "executionStats" : {
            "executionSuccess" : true,
            "nReturned" : 1,
            "executionTimeMillis" : 2,
            "totalKeysExamined" : 1,
            "totalDocsExamined" : 1,
            "executionStages" : {
                "stage" : "FETCH",
                "nReturned" : 1,
                "executionTimeMillisEstimate" : 0,
                "works" : 2,
                "advanced" : 1,
                "needTime" : 0,
                "needYield" : 0,
                "saveState" : 0,
                "restoreState" : 0,
                "isEOF" : 1,
                "docsExamined" : 1,
                "alreadyHasObj" : 0,
                "inputStage" : {
                    "stage" : "IXSCAN",
                    "nReturned" : 1,
                    "executionTimeMillisEstimate" : 0,
                    "works" : 2,
                    "advanced" : 1,
                    "needTime" : 0,
                    "needYield" : 0,
                    "saveState" : 0,
                    "restoreState" : 0,
                    "isEOF" : 1,
                    "keyPattern" : {
                        "quantity" : 1
                    },
                    "indexName" : "quantity_1",
                    "isMultiKey" : false,
                    "multiKeyPaths" : {
                        "quantity" : [ ]
                    },
                    "isUnique" : false,
                    "isSparse" : false,
                    "isPartial" : false,
                    "indexVersion" : 2,
                    "direction" : "forward",
                    "indexBounds" : {
                        "quantity" : [
                            "[1330.0, 1330.0]"
                        ]
                    },
                    "keysExamined" : 1,
                    "seeks" : 1,
                    "dupsTested" : 0,
                    "dupsDropped" : 0
                }
            }
        },
        "command" : {
            "find" : "sales",
            "filter" : {
                "quantity" : 1330
            },
            "$db" : "tasks"
        },
        "serverInfo" : {
            "host" : "namlabs-ThinkPad-E14-Gen-4",
            "port" : 27017,
            "version" : "5.0.15",
            "gitVersion" : "935639beed3d0c19c2551c93854b831107c0b118"
        },
        "serverParameters" : {
            "internalQueryFacetBufferSizeBytes" : 104857600,
            "internalQueryFacetMaxOutputDocSizeBytes" : 104857600,
            "internalLookupStageIntermediateDocumentMaxSizeBytes" : 104857600,
            "internalDocumentSourceGroupMaxMemoryBytes" : 104857600,
            "internalQueryMaxBlockingSortMemoryUsageBytes" : 104857600,
            "internalQueryProhibitBlockingMergeOnMongoS" : 0,
            "internalQueryMaxAddToSetBytes" : 104857600,
            "internalDocumentSourceSetWindowFieldsMaxMemoryBytes" : 104857600
        },
        "ok" : 1
    }