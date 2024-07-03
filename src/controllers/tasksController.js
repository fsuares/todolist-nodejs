const taskModel = require('../models/taskModel');

const getTasks = async (_req, res) =>{
    try{
        const tasks = await taskModel.getTasks();
        return res.status(200).json(tasks);
    } catch (error) {
        console.error(error.name);
    };
};

const addTask = async (req, res) => {
    try {
        const createdTask = await taskModel.addTask(req.body);
        return res.status(200).json({ message: 'Task Created' });
    } catch (error) {
        console.error(error.name);
    };
};

const updateTask =  async (req, res) => {
    const { id } = req.params;
    await taskModel.updateTask(id, req.body);
    return res.status(204).json({ message: "task updated" })
};

const deleteTask =  async (req, res) => {
    const { id } = req.params;
    await taskModel.deleteTask(id);
    return res.status(204).json({ message: "task deleted" })
};

module.exports = {
    getTasks,
    addTask,
    deleteTask,
    updateTask
};