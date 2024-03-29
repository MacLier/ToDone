// const sql = require('./dbcreate');
const Sqlite = require('sqlite3');
const db = new Sqlite.Database('to-done.sqlite', 'sqlite3.OPEN_CREATE', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the to-done SQlite database.');
})

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

    async read(table, id) {
        if (id) {
            const sql = `
            SELECT * 
            FROM ${table}
            WHERE id=${id};
            `;
            return new Promise((resolve, reject) => {
                db.all(sql, [], (err, rows) => {
                    if (err) return reject(err);

                    resolve(rows);
                });
            });
        } else {
            const sql = `
            SELECT *
            FROM ${table}
            `;
            return new Promise((resolve, reject) => {
                db.all(sql, [], (err, rows) => {
                    if (err) return reject(err);

                    resolve(rows);
                });
            });
        }
        // db.close();
    },
    async getTasks(table1, table2, table3) {
        const sql =
            `
        SELECT *
        FROM ${table1} CROSS JOIN ${table2} CROSS JOIN ${table3}`
        // `
        //     SELECT *
        //     FROM ${table1}, ${table2}, ${table3}
        //     Left JOIN ${table2}, ${table3}
        //         ON ${table1}.taskID = ${table2}.taskID
        //     UNION ALL
        //     SELECT *
        //     FROM ${table2}
        //     LEFT JOIN ${table1} 
        //         ON ${table2}.taskID = ${table1}.taskID
        //     SELECT *
        //     FROM ${table3}
        //     LEFT JOIN ${table2} 
        //         ON ${table3}.taskID = ${table2}.taskID
        //     `;
        return new Promise((resolve, reject) => {
            db.all(sql, [], (err, rows) => {
                if (err) return reject(err);

                resolve(rows);
            });
        });
    },
    async create(table, record) {
        if (table == 'Users') {
            this.sql = `
        INSERT INTO ${table} (${Object.keys(record).join(', ')}isActive)
        VALUES (${Object.values(record).map(value => (typeof value === 'number' ? `${value}` : `'${value}'`)).join(', ')},${1})
        `;
        }
        this.sql = `
        INSERT INTO ${table} (${Object.keys(record).join(', ')})
        VALUES (${Object.values(record).map(value => (typeof value === 'number' ? `${value}` : `'${value}'`)).join(', ')})
        `;
        const result = await db.all(this.sql, (err, rows) => {
            if (err) {
                throw err;
            }
            return result;
        });
    },

    async createUser(user) {
        console.log("user in dbservice" + JSON.stringify(user));
        if (await this.findUserByEmail(user.email)) {
            this.sql = `
                INSERT INTO Users (firstName,lastName,nickName,email,isActive)
                VALUES (${user.firstName},${user.lastName},${user.nickName},${user.email}, ${1})`;

            await db.all(this.sql, (err, rows) => {
                if (err) {
                    throw err;
                }
                rows.forEach((row) => {
                    console.log(row.name);
                });
            });
            db.close()

        }
        else {
            return false
        }
    },
    async findUserByEmail(email) {
        if (email) {
            this.sql = `
                SELECT *
                FROM Users
                WHERE email LIKE "${email}"`;
            const result = await db.all(this.sql, (err, rows) => {
                if (err) {
                    throw err;
                }
                console.log("finduser:" + JSON.stringify(result));
            });
            db.close()
            return true
        }
        else {
            return false
        }
    },



    createTask(task, database) {

        db.all(sql, (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                console.log(row.name);
            });
        });

        // close the database connection
        db.close()
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