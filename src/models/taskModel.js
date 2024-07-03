const connection = require('./connection');

const getTasks = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const addTask = async (task) =>{
    const { title } = task;
    const date = new Date().toUTCString();
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?,?,?)';
    const createdTask = await connection.execute(query, [title, 'pendente', date]);
};

const deleteTask = async (id) => {
    const query = 'DELETE FROM tasks WHERE id = ?';
    const removedTask = await connection.execute(query, [id]);
};

const updateTask = async (id, task) => {
    const { title, status } = task
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
    const [updatedTask] = await connection.execute(query, [title, status, id]);
    return updateTask
};

module.exports = {
    getTasks,
    addTask,
    deleteTask,
    updateTask
};