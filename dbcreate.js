
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'to-done.sqlite')
});

const Users = sequelize.define('Users', {
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    nickName: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    }
})

const Tasks = sequelize.define('Tasks', {

    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    allDone: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    timeRequirement: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    index: {
        type: DataTypes.NUMBER(200),
        allowNull: true,
    },
})


const Events = sequelize.define('Events', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    timeRequirement: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    index: {
        type: DataTypes.NUMBER(200),
        allowNull: true,
    },
    isItDone: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    deadline: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    softDeadline: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    members: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING(100),
        allowNull: true,
    }
})
const Preparations = sequelize.define('Preparations', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    isItDone: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
})

const Todos = sequelize.define('Todos', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    timeRequirement: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    index: {
        type: DataTypes.NUMBER(200),
        allowNull: true,
    },
    isItDone: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    deadline: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    softDeadline: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    isItDone: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
})
const Steps = sequelize.define('Steps', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    isItDone: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
})

const ShoppingLists = sequelize.define('ShoppingLists', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    timeRequirement: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    index: {
        type: DataTypes.NUMBER(200),
        allowNull: true,
    },
    isItDone: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
})

const Products = sequelize.define('Products', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    isItDone: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
})

//ONE-TO-MANY cuccok
Users.hasMany(Tasks);
Tasks.belongsTo(Users);
Tasks.hasMany(Events);
Events.belongsTo(Tasks);
// Users.hasMany(Events);
Tasks.hasMany(Todos);
Todos.belongsTo(Tasks);
// Users.hasMany(Todos);
Tasks.hasMany(ShoppingLists);
ShoppingLists.belongsTo(Tasks);
// Users.hasMany(ShoppingLists);


Events.hasMany(Preparations);
Preparations.belongsTo(Events);

Todos.hasMany(Steps);
Steps.belongsTo(Todos);

ShoppingLists.hasMany(Products);
Products.belongsTo(ShoppingLists);


// try {
//     console.log(sequelize.isDefined('Users'))
//     console.log(sequelize.isDefined('Preparations'))
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

module.exports = sequelize;

module.exports = Tasks;
module.exports = Products;
module.exports = ShoppingLists;
module.exports = Steps;
module.exports = Todos;
module.exports = Preparations;
module.exports = Events;
module.exports = Users;