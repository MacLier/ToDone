const db = require("./dbcreate.js");



// const { Sequelize, DataTypes } = require('sequelize');
// const path = require('path');

// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: path.join(__dirname, 'to-done.sqlite')
// });
// const Users = require('./dbcreate.js');
// const Tasks = require('./dbcreate.js');
// const Events = require('./dbcreate.js');
// const Todos = require('./dbcreate.js');
// const ShoppingLists = require('./dbcreate.js');
// const Preparations = require('./dbcreate.js');
// const Steps = require('./dbcreate.js');
// const Products = require('./dbcreate.js');


// // try {
// //     await sequelize.authenticate();
// //     console.log('Connection has been established successfully.');
// // } catch (error) {
// //     console.error('Unable to connect to the database:', error);
// // }


// Users.hasMany(Tasks);
// // Tasks.belongsTo(Users);
// Tasks.hasMany(Events);
// // Events.belongsTo(Tasks);
// // Users.hasMany(Events);
// Events.hasMany(Preparations)
// Tasks.hasMany(Todos);
// Tasks.hasMany(Steps);
// // Todos.belongsTo(Tasks);
// // Users.hasMany(Todos);
// Tasks.hasMany(ShoppingLists);
// ShoppingLists.hasMany(Products)
// // ShoppingLists.belongsTo(Tasks);
// // Users.hasMany(ShoppingLists);


// Events.hasMany(Preparations);
// Preparations.belongsTo(Events);

// Todos.hasMany(Steps);
// Steps.belongsTo(Todos);

// ShoppingLists.hasMany(Products);
// Products.belongsTo(ShoppingLists);

const dataservice = {

    // async createTask(task, database) {
    //     Users.create({
    //         firstName: "jhasbd",
    //         lastName: "asdoasjm",
    //         nickName: "asdasd",
    //         email: "asd",
    //         password: "asd"
    //     })
    //     sequelize.authenticate();
    //     const x = await Users.findAll();
    //     console.log(x.every(user => user instanceof x));
    // task.ID = this.getHighestID(database) + 1;
    // console.log("from dbservice" + JSON.stringify(task));
    // return database.push(task);

},
    createSubTask(ID, database, subtask) {
        const taskToSubTask = readTaskByID(ID, database)
        if (taskToSubTask.products) {
            taskToSubTask.products.push(subtask)
        } else if (taskToSubTask.steps) {
            taskToSubTask.steps.push(subtask)
        } else if (taskToSubTask.preparations) {
            taskToSubTask.preparations.push(subtask)
        }


    },
        readTaskByID(ID, database) {
    for (const task of database) {
        if (ID == task.ID) {
            return task
        }
        return "No mach found"
    }
},

updateTask(ID, task, database) {//id, description, taskName, type, ID, steps
    const updatedTask = this.readTaskByID(ID, database);
    updatedTask = task;
},
updateSubTask(ID, subTask, database) {
    const updatedTask = this.readTaskByID(ID, database);
    if (updatedTask.products) {
        updatedTask.products.push(subTask)
    } else if (updatedTask.steps) {
        updatedTask.steps.push(subTask)
    } else if (updatedTask.preparations) {
        updatedTask.preparations.push(subTask)
    }
},

deleteTask(ID, database) {
    console.log(ID);
    return database.splice(ID - 1, 1);
},
deleteSubTask(ID, subTask, database) {
    const deletedTask = this.readTaskByID(ID, database);
    if (deletedTask.products) {
        deletedTask.products.splice(subTask, 1)
    } else if (deletedTask.steps) {
        deletedTask.steps.splice(subTask, 1)
    } else if (deletedTask.preparations) {
        deletedTask.preparations.splice(subTask, 1)
    }

},
getHighestID(database) {
    return database.length
},
}


module.exports = dataservice;