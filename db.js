const express = require('express');
const db = [
    {
        description: "My first todo for today",
        name: "Learn one hour when you wake up",
        type: "todo",
        ID: 1,
        steps: [
            { name: "turn on the light" },
            { name: "get a book" },
            { name: "read" }
        ]
    },
    {
        description: "My second todo for today",
        name: "Make your bed",
        type: "todo",
        ID: 2,
        steps: [
            { name: "get up" },
            { name: "adjust your pillow" },
            { name: "adjust your blanket" }
        ]
    },
    {
        description: "My third todo for today",
        name: "From the SHOP",
        type: "shoppingList",
        ID: 3,
        products: [
            { name: "krumpli" },
            { name: "kenyér" },
            { name: "Sör" }
        ]
    },
    {
        description: "My fourth todo for today",
        name: "Nyári Tábor",
        type: "event",
        ID: 4,
        preparations: [
            { name: "karakternyomtatás" },
            { name: "Hűtő bepakolás" },
            { name: "SÖR" }
        ]
    },
];

module.exports = db;