const Products = require('./dbcreate.js');
const ShoppingLists = require('./dbcreate.js');
const Steps = require('./dbcreate.js');
const Todos = require('./dbcreate.js');
const Preparations = require('./dbcreate.js');
const Events = require('./dbcreate.js');
const Users = require('./dbcreate.js');
const sequalize = require('./dbcreate.js');

const dataservice = {

    async createTask(task, database) {
        Users.create({
            firstName: "jhasbd",
            lastName: "asdoasjm",
            nickName: "asdasd",
            email: "asd",
            password: "asd"
        });
        const x = await Users.findAll();
        console.log(x);
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