const { Sequelize, DataTypes, STRING } = require('sequelize');

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
})

const Tasks = sequelize.define('Tasks', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
