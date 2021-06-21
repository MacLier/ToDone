const { TEXT, INTEGER } = require('sequelize/types');
const Sqlite = require('sqlite3');
const db = new Sqlite.Database('to-done', sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the to-done SQlite database.');
})

module.exports = db;

CREATE TABLE Users(
    userID   INTEGER NOT NULL PRIMARY KEY,
    firstName TEXT    NOT NULL,
    lastName TEXT    NOT NULL,
    nickName TEXT    NOT NULL,
    email TEXT    NOT NULL,
    isActive TEXT    NOT NULL,
);

CREATE TABLE Tasks(
    taskID INTEGER NOT NULL PRIMARY KEY,
    taskName TEXT,
    description TEXT,
    timeRequirement TEXT,
    index INTEGER NOT NULL PRIMARY KEY DESC,
    userID FOREIGN KEY(userID)
        REFERENCES Users(userID) 
           ON UPDATE RESTRICT
           ON DELETE NULL
);
CREATE TABLE Events(
    eventID   INTEGER NOT NULL PRIMARY KEY,
    softDeadeline TEXT,
    deadline TEXT,
    notifications TEXT,
    members TEXT,
    location TEXT,
    allDone INTEGER,
    taskID FOREIGN KEY(taskID)
        REFERENCES Tasks(taskID) 
           ON UPDATE RESTRICT
           ON DELETE NULL
);
CREATE TABLE Preparations(
    prepID   INTEGER NOT NULL PRIMARY KEY,
    prepName TEXT,
    isItDone INTEGER,
    eventID FOREIGN KEY(eventID)
        REFERENCES Events(eventID) 
           ON UPDATE RESTRICT
           ON DELETE NULL
);
CREATE TABLE Todos(
    todoID   INTEGER NOT NULL PRIMARY KEY,
    softDeadeline TEXT,
    deadline TEXT,
    allDone INTEGER,
    taskID FOREIGN KEY(taskID)
            REFERENCES Tasks(taskID) 
                ON UPDATE RESTRICT
                ON DELETE NULL
);
CREATE TABLE Steps(
    stepID   INTEGER NOT NULL PRIMARY KEY,
    stepName TEXT,
    isItDone INTEGER,
    todoID FOREIGN KEY(todoID)
            REFERENCES Todos(todoID) 
                ON UPDATE RESTRICT
                ON DELETE NULL
);
CREATE TABLE ShoppingLists(
    sListID   INTEGER NOT NULL PRIMARY KEY,
    sListName TEXT,
    allDone INTEGER,
    taskID FOREIGN KEY(taskID)
            REFERENCES Tasks(taskID) 
                ON UPDATE RESTRICT
                ON DELETE NULL
);
CREATE TABLE Products(
    productID   INTEGER NOT NULL PRIMARY KEY,
    productName TEXT,
    unit TEXT,
    amount INTEGER,
    isItDone INTEGER,
    sListID FOREIGN KEY(sListID)
          REFERENCES ShoppingListss(sListID) 
            ON UPDATE RESTRICT
            ON DELETE NULL
);

// const { Sequelize, DataTypes } = require('sequelize');
// const path = require('path');

// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: path.join(__dirname, 'to-done.sqlite')
// });

// const Users = sequelize.define('Users', {
//     firstName: {
//         type: DataTypes.STRING(50),
//         allowNull: false,
//     },
//     lastName: {
//         type: DataTypes.STRING(50),
//         allowNull: false,
//     },
//     nickName: {
//         type: DataTypes.STRING(50),
//         allowNull: true,
//     },
//     email: {
//         type: DataTypes.STRING(100),
//         allowNull: false,
//     },
//     password: {
//         type: DataTypes.STRING(255),
//         allowNull: false,
//     }
// })

// const Tasks = sequelize.define('Tasks', {

//     name: {
//         type: DataTypes.STRING(100),
//         allowNull: false,
//     },
//     description: {
//         type: DataTypes.STRING(255),
//         allowNull: true,
//     },
//     allDone: {
//         type: DataTypes.BOOLEAN,
//         allowNull: true,
//     },
//     timeRequirement: {
//         type: DataTypes.DATE,
//         allowNull: true,
//     },
//     index: {
//         type: DataTypes.NUMBER(200),
//         allowNull: true,
//     },
// })


// const Events = sequelize.define('Events', {
//     name: {
//         type: DataTypes.STRING(100),
//         allowNull: false,
//     },
//     description: {
//         type: DataTypes.STRING(255),
//         allowNull: true,
//     },
//     timeRequirement: {
//         type: DataTypes.DATE,
//         allowNull: true,
//     },
//     index: {
//         type: DataTypes.NUMBER(200),
//         allowNull: true,
//     },
//     isItDone: {
//         type: DataTypes.BOOLEAN,
//         allowNull: true,
//     },
//     deadline: {
//         type: DataTypes.DATE,
//         allowNull: true,
//     },
//     softDeadline: {
//         type: DataTypes.DATE,
//         allowNull: true,
//     },
//     members: {
//         type: DataTypes.STRING(255),
//         allowNull: true,
//     },
//     location: {
//         type: DataTypes.STRING(100),
//         allowNull: true,
//     }
// })
// const Preparations = sequelize.define('Preparations', {
//     name: {
//         type: DataTypes.STRING(100),
//         allowNull: false,
//     },
//     isItDone: {
//         type: DataTypes.BOOLEAN,
//         allowNull: true,
//     },
// })

// const Todos = sequelize.define('Todos', {
//     name: {
//         type: DataTypes.STRING(100),
//         allowNull: false,
//     },
//     description: {
//         type: DataTypes.STRING(255),
//         allowNull: true,
//     },
//     timeRequirement: {
//         type: DataTypes.DATE,
//         allowNull: true,
//     },
//     index: {
//         type: DataTypes.NUMBER(200),
//         allowNull: true,
//     },
//     isItDone: {
//         type: DataTypes.BOOLEAN,
//         allowNull: true,
//     },
//     deadline: {
//         type: DataTypes.DATE,
//         allowNull: true,
//     },
//     softDeadline: {
//         type: DataTypes.DATE,
//         allowNull: true,
//     },
//     startDate: {
//         type: DataTypes.DATE,
//         allowNull: true,
//     },
//     isItDone: {
//         type: DataTypes.BOOLEAN,
//         allowNull: true,
//     },
// })
// const Steps = sequelize.define('Steps', {
//     name: {
//         type: DataTypes.STRING(100),
//         allowNull: false,
//     },
//     isItDone: {
//         type: DataTypes.BOOLEAN,
//         allowNull: true,
//     },
// })

// const ShoppingLists = sequelize.define('ShoppingLists', {
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     description: {
//         type: DataTypes.STRING(255),
//         allowNull: true,
//     },
//     timeRequirement: {
//         type: DataTypes.DATE,
//         allowNull: true,
//     },
//     index: {
//         type: DataTypes.NUMBER(200),
//         allowNull: true,
//     },
//     isItDone: {
//         type: DataTypes.BOOLEAN,
//         allowNull: true,
//     },
// })

// const Products = sequelize.define('Products', {
//     name: {
//         type: DataTypes.STRING(50),
//         allowNull: false,
//     },
//     unit: {
//         type: DataTypes.STRING(10),
//         allowNull: true,
//     },
//     amount: {
//         type: DataTypes.INTEGER,
//         allowNull: true,
//     },
//     isItDone: {
//         type: DataTypes.BOOLEAN,
//         allowNull: true,
//     },
// })

// // //ONE-TO-MANY cuccok
// // Users.hasMany(Tasks);
// // Tasks.belongsTo(Users);
// // Tasks.hasMany(Events);
// // Events.belongsTo(Tasks);
// // // Users.hasMany(Events);
// // Tasks.hasMany(Todos);
// // Todos.belongsTo(Tasks);
// // // Users.hasMany(Todos);
// // Tasks.hasMany(ShoppingLists);
// // ShoppingLists.belongsTo(Tasks);
// // // Users.hasMany(ShoppingLists);


// // Events.hasMany(Preparations);
// // Preparations.belongsTo(Events);

// // Todos.hasMany(Steps);
// // Steps.belongsTo(Todos);

// // ShoppingLists.hasMany(Products);
// // Products.belongsTo(ShoppingLists);


// // try {
// //     console.log(sequelize.isDefined('Users'))
// //     console.log(sequelize.isDefined('Preparations'))
// //     sequelize.authenticate();
// //     console.log('Connection has been established successfully.');
// // } catch (error) {
// //     console.error('Unable to connect to the database:', error);
// // }

// module.exports = sequelize;

// module.exports = Tasks;
// module.exports = Products;
// module.exports = ShoppingLists;
// module.exports = Steps;
// module.exports = Todos;
// module.exports = Preparations;
// module.exports = Events;
// module.exports = Users;