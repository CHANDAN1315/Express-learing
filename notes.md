
# Middleware:
    Middleware: It is kind validation function between the client and the server. It run on every request cycle
    - It has ablity to send the request back to client or send to server.
    - A single code can have multiple middle ware

    For more details: express.js/middleware


# L17
    HTTP Headers
    -HTTP headers are an important part of API request and response as they represent meta-data(data of data)
    associated with the api request and response

    - Whenever we write custum header always append "X" eg :"x-myName"


# L18
    HTTP Status Code : Detail : mdn docs HTTP Status Code

# Mongo DB

    -No-Sql Document based database
    -Strong support for Aggregation pipes
    -Works on BSON format
    -Better for node applications


    Some basic command  used inside the mongosh -> mongodb shell

    1 show dbs
    2 use databaseName
    3 show collections
    4 db.coll.find({})
    5 db.coll.insert()
    6. db.users.find({}) // show the data of the users collection


 Working of mongoose 

    Schema - Define the structure
        define Schema to create Model
        using model we do CRUD operation



 MVC :- Model View Controller 

    more detail: https://www.freecodecamp.org/news/the-model-view-controller-pattern-mvc-architecture-and-frameworks-explained/

# MVC folder structure

    -models -user.js

    -contrullers -user.js

    -routes -index.js

    -views -index.js