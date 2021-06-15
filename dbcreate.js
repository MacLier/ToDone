const { Sequelize, DataTypes, STRING } = require('sequelize');
const { shoppingLists, Products } = require('./dataBaseModels');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'to-done.sqlite'
});

const Users = sequelize.define('Users', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        references: UserTasks.userID
    },
    UUID: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    nickName: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    softDelete: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    }
})

const Tasks = sequelize.define('Tasks', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        references: UserTasks.taskID,
        references: Events.taskID,
        references: Todos.taskID,
        references: shoppingLists.taskID,
    },
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

const UserTasks = sequelize.define('UserTasks', {
    userID: {
        type: DataTypes.INTEGER,
        references: Users.ID
    },
    taskID: {
        type: DataTypes.INTEGER,
        references: Tasks.ID
    }
})

const Events = sequelize.define('Events', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        references: Preparations.eventID,
    },
    taskID: {
        type: DataTypes.INTEGER,
        references: Tasks.ID,
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
    notificationID: {
        type: DataTypes.INTEGER,
        references: References.ID,
    },
    members: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    allDone: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
})

const Preparations = sequelize('Preparations', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    eventID: {
        type: DataTypes.INTEGER,
        references: Events.ID
    },
    prepName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
})

const Notifications = sequelize('Notifications', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        references: Events.notificationID,
    },
    notifName: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
    notifDate: {
        type: DataTypes.DATE,
        allowNull: true,
    }
})

const Todos = sequelize('Todos', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        references: Steps.todoID,
    },
    taskID: {
        type: DataTypes.INTEGER,
        references: Tasks.ID,
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
    allDone: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
})
const Steps = sequelize('Steps', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    todoID: {
        type: DataTypes.INTEGER,
        references: Todos.ID,
    },
    stepName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    isItDone: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
})

const ShoppingLists = sequelize('ShoppingLists', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        references: Products.shoppingListID,
    },
    taskID: {
        type: DataTypes.INTEGER,
        references: Tasks.ID,
    },
    allDone: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
})

const Products = sequelize('Products', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    shoppingListID: {
        type: DataTypes.INTEGER,
        references: ShoppingLists.ID,
    },
    productName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    measure: {
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
