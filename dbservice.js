dataservice = {

    createTask(task, tasks) {
        task.ID = getHighestID + 1;
        tasks.push(task);

    },
    createSubTask(ID, tasks, subtask) {
        if (readTaskByID(ID, tasks).products) {
            task.products.push(subtask)
        } else if (readTaskByID(ID, tasks).steps) {
            task.steps.push(subtask)
        } else if (readTaskByID(ID, tasks).preparations) {
            task.preparations.push(subtask)
        }


    },
    readTaskByID(ID, tasks) {
        for (const task of tasks) {
            if (ID == task.ID) {
                return task
            }
            return "No mach found"
        }
    },

    updateTask(ID, task) {//id, description, taskName, type, ID, steps

    },
    updateSubTask(id, name) {

    },

    deleteTask(id) {

    },
    deleteSubTask(id, name) {

    },
    getHighestID(tasks) {
        return tasks.length
    },
}


module.exports = dataservice;