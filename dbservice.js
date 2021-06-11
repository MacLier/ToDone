dataservice = {

    createTask(task, tasks) {
        task.ID = this.getHighestID(tasks) + 1;
        console.log("from dbservice" + JSON.stringify(task))
            ;
        return tasks.push(task);

    },
    createSubTask(ID, tasks, subtask) {
        const taskToSubTask = readTaskByID(ID, tasks)
        if (taskToSubTask.products) {
            taskToSubTask.products.push(subtask)
        } else if (taskToSubTask.steps) {
            taskToSubTask.steps.push(subtask)
        } else if (taskToSubTask.preparations) {
            taskToSubTask.preparations.push(subtask)
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

    updateTask(ID, task, tasks) {//id, description, taskName, type, ID, steps
        const updatedTask = this.readTaskByID(ID, tasks);
        updatedTask = task;
    },
    updateSubTask(ID, subTask, tasks) {
        const updatedTask = this.readTaskByID(ID, tasks);
        if (updatedTask.products) {
            updatedTask.products.push(subTask)
        } else if (updatedTask.steps) {
            updatedTask.steps.push(subTask)
        } else if (updatedTask.preparations) {
            updatedTask.preparations.push(subTask)
        }
    },

    deleteTask(ID, tasks) {
        const deletedTask = this.readTaskByID(ID, tasks);
        tasks.splice(deletedTask, 1);
    },
    deleteSubTask(ID, subTask, tasks) {
        const deletedTask = this.readTaskByID(ID, tasks);
        if (deletedTask.products) {
            deletedTask.products.splice(subTask, 1)
        } else if (deletedTask.steps) {
            deletedTask.steps.splice(subTask, 1)
        } else if (deletedTask.preparations) {
            deletedTask.preparations.splice(subTask, 1)
        }

    },
    getHighestID(tasks) {
        return tasks.length
    },
}


module.exports = dataservice;