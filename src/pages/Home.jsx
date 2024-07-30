import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDate, setNewDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch tasks from JSON file or local storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = () => {
    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      description: '',
      date: newDate,
      timestamp: new Date().toLocaleString(),
      completed: false,
    };
    const updatedTasks = [...tasks, newTaskObj];
    setTasks(updatedTasks);
    setNewTask('');
    setNewDate('');
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const updateTask = (id, newText, newDate) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText, date: newDate, timestamp: new Date().toLocaleString() } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />
        <button
          onClick={addTask}
          className="mt-2 p-2 bg-green-500 text-white rounded w-full"
        >
          Add Task
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Tasks"
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <TaskList
        tasks={filteredTasks}
        onUpdate={updateTask}
        onDelete={deleteTask}
        onToggle={toggleTaskCompletion}
      />
    </div>
  );
};

export default Home;
