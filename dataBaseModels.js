export class Users {
    ID;
    UUID;
    firstName;
    lastName;
    nickName;
    email;
    role;
}

export class UserTasks {
    userID;
    taskID;
}

export class Tasks {
    ID = 1;
    name;
    description;
    allDone;
    timeRequirement;
    index;
}

export class Events {
    ID;
    taskID;
    isItDone;
    allDone;
    deadline;
    softDeadline;
    notifications;
    members;
    location;
}
export class Preparations {
    ID;
    eventID;
    preparationName;
    isItDone
}
export class Todos {
    ID;
    taskID;
    isItDone;
    allDone;
    deadline;
    softDeadline;
    startDate;
}
export class Steps {
    ID;
    todoID;
    stepName;
    isItDone;
}
export class shoppingLists {
    ID;
    taskID;
    allDone;
}
export class Products {
    ID;
    shoppingListID;
    productName;
    measure;
    amount;
    isItDone;
}