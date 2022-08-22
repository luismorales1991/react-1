import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
      <span>Nombre</span>
      <br />
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br />
      <br />
      <span>Descripcion</span>
      <br />
      <textarea
        cols="30"
        rows="10"
        placeholder="Escribe la dirección de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      >
      </textarea>
      <br />
      <button>Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
