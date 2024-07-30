import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [newDate, setNewDate] = useState(task.date);

  const handleEdit = () => {
    if (isEditing) {
      onUpdate(task.id, newText, newDate);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          {isEditing ? (
            <>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="ml-2 p-1 border border-gray-300"
              />
              <input
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="ml-2 p-1 border border-gray-300"
              />
            </>
          ) : (
            <>
              <span className={`ml-2 ${task.completed ? 'line-through' : ''}`}>
                {task.text}
              </span>
              <span className="ml-4 text-gray-500">
                {task.date}
              </span>
            </>
          )}
        </div>
        <div>
          <button
            onClick={handleEdit}
            className="ml-2 p-1 bg-blue-500 text-white rounded"
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="ml-2 p-1 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
      {task.description && (
        <div className="mt-2 text-sm text-gray-600">
          {task.description}
        </div>
      )}
      {task.timestamp && (
        <div className="mt-1 text-xs text-gray-400">
          Last updated: {task.timestamp}
        </div>
      )}
    </div>
  );
};

export default TaskItem;
